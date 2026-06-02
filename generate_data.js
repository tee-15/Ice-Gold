const fs = require('fs');

try {
  const data = fs.readFileSync('products.json', 'utf8');
  const parsedData = JSON.parse(data);
  const products = parsedData.products;
  
  const mappedProducts = products.map((p, index) => {
    let price = '0.00';
    if (p.variants && p.variants.length > 0 && p.variants[0].price) {
      price = p.variants[0].price;
    }

    let image = '';
    if (p.images && p.images.length > 0 && p.images[0].src) {
      image = p.images[0].src;
    }

    let material = 'Gold';
    if (p.title.toLowerCase().includes('silver')) {
      material = 'Silver';
    } else if (p.title.toLowerCase().includes('diamond') || p.title.toLowerCase().includes('gem')) {
      material = 'Diamonds & Gems';
    }

    return {
      id: p.id || (index + 1),
      title: p.title,
      price: `$${price}`,
      image: image,
      category: p.product_type || 'Jewelry',
      material: material,
      description: p.body_html || 'A beautiful piece from Ice & Gold.',
      handle: p.handle || `product-${index}`
    };
  });

  // Get unique categories and materials
  const categories = [...new Set(mappedProducts.map(p => p.category).filter(Boolean))];
  const materials = [...new Set(mappedProducts.map(p => p.material).filter(Boolean))];

  const fileContent = `// Automatically generated from iceandgold.com/products.json

export const CATEGORIES = ${JSON.stringify(categories, null, 2)};

export const MATERIALS = ${JSON.stringify(materials, null, 2)};

export const ALL_PRODUCTS = ${JSON.stringify(mappedProducts, null, 2)};

export const COLLECTIONS = [
  { id: 'new', title: 'New Arrivals', image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-3479784.png', handle: 'new-arrivals' },
  { id: 'best', title: 'Best Sellers', image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gold-link-set-6166572.png', handle: 'best-sellers' },
  { id: 'gifts', title: 'Gifts Under $100', image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/e2e13d1007c4df0b6b54560700bee115.jpg', handle: 'gifts' }
];
`;

  fs.writeFileSync('./lib/data.js', fileContent);
  console.log(`Successfully generated lib/data.js with ${mappedProducts.length} products.`);
} catch (e) {
  console.error('Error parsing JSON or writing file:', e);
}
