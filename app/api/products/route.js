import { NextResponse } from 'next/server';
import { ALL_PRODUCTS } from '../../../lib/data';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    return NextResponse.json({ products: ALL_PRODUCTS });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
