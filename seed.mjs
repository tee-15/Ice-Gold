import pkg from '@prisma/client';
const { PrismaClient } = pkg;

import { ALL_PRODUCTS } from './lib/data.js'

const prisma = new PrismaClient({})

async function main() {
  console.log('Seeding the database with products...');
  for (const product of ALL_PRODUCTS) {
    await prisma.product.upsert({
      where: { handle: product.handle },
      update: {},
      create: {
        originalId: String(product.id),
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        material: product.material,
        description: product.description,
        handle: product.handle
      }
    });
  }
  console.log(`Successfully seeded ${ALL_PRODUCTS.length} products.`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
