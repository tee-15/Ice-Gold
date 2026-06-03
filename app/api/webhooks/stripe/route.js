import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    const userId = session.metadata.userId;
    const cartItems = JSON.parse(session.metadata.cartItems);
    const total = session.amount_total / 100;

    try {
      // Create the order in the database
      const order = await prisma.order.create({
        data: {
          userId: userId,
          total: total,
          status: 'paid', // Update status immediately to paid
          items: {
            create: cartItems.map((item) => ({
              productId: item.id,
              quantity: item.quantity,
              price: item.price,
            })),
          },
        },
      });

      console.log(`Order ${order.id} created successfully for user ${userId}`);
    } catch (dbError) {
      console.error('Failed to create order in database:', dbError);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}
