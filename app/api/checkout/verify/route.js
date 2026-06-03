import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { PrismaClient } from '@prisma/client';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const { session_id } = await request.json();

    if (!session_id) {
      return NextResponse.json({ error: 'Missing session_id' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ error: 'Payment not successful' }, { status: 400 });
    }

    // Check if we already created this order via webhook or previous load
    const existingOrder = await prisma.order.findUnique({
      where: { stripeSessionId: session_id },
    });

    if (existingOrder) {
      return NextResponse.json({ success: true, orderId: existingOrder.id });
    }

    const userId = session.metadata.userId;
    const cartItems = JSON.parse(session.metadata.cartItems);
    const total = session.amount_total / 100;

    // Create the order
    const order = await prisma.order.create({
      data: {
        userId: userId,
        total: total,
        status: 'paid',
        stripeSessionId: session_id,
        items: {
          create: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (error) {
    console.error('Session verify error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}
