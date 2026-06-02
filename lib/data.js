export const REAL_PRODUCTS = [
  {
    id: 1,
    title: 'Gold Link Set',
    price: '$249.00',
    category: 'Necklaces',
    material: '18K Gold Filled',
    description: 'Elevate your everyday look with this stunning Gold Link Set. Crafted to be water-resistant and hypoallergenic, it offers a luxurious shine that lasts.',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gold-link-set-6166572.png?v=1775241367',
    images: [
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gold-link-set-6166572.png?v=1775241367'
    ]
  },
  {
    id: 2,
    title: 'Gold Twisted Herringbone Necklace',
    price: '$69.00',
    category: 'Necklaces',
    material: '18K Gold Filled',
    description: 'A delicate and sophisticated twisted herringbone design that catches the light beautifully from every angle.',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gold-twisted-herringbone-necklace-6372164.png?v=1777064346',
    images: [
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gold-twisted-herringbone-necklace-6372164.png?v=1777064346'
    ]
  },
  {
    id: 3,
    title: 'Water Drop Earring and Necklace Set',
    price: '$129.00',
    category: 'Necklaces',
    material: '18K Gold Filled',
    description: 'A matching set featuring an elegant water drop design. Perfect for gifting or treating yourself.',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/water-drop-earring-and-necklace-set-6119667.png?v=1775241366',
    images: [
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/water-drop-earring-and-necklace-set-6119667.png?v=1775241366'
    ]
  },
  {
    id: 4,
    title: 'Gold Tassel Earrings',
    price: '$59.00',
    category: 'Earrings',
    material: '18K Gold Filled',
    description: 'Make a statement with these fluid, kinetic gold tassel earrings. Lightweight yet visually striking.',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/e2e13d1007c4df0b6b54560700bee115.jpg?v=1771109952',
    images: [
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/e2e13d1007c4df0b6b54560700bee115.jpg?v=1771109952'
    ]
  },
  {
    id: 5,
    title: 'Gemstone Dome Ring',
    price: '$89.00',
    category: 'Rings',
    material: '18K Gold Filled',
    description: 'Our Gemstone Dome Ring is designed to stand out with its smooth dome silhouette and vibrant gemstone-inspired centerpiece. Crafted with 18K gold-filled, it’s tarnish-resistant, hypoallergenic, and comfortable for everyday wear.',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-2002793.jpg',
    images: [
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-2002793.jpg',
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-9979469.png',
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-5431099.jpg'
    ]
  },
  {
    id: 6,
    title: 'Double Mixed Metal Ring',
    price: '$79.00',
    category: 'Rings',
    material: 'Sterling Silver',
    description: 'A bold, contemporary double-band ring mixing silver and gold tones for ultimate versatility.',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-9979469.png',
    images: [
      'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-9979469.png'
    ]
  }
];

export const ALL_PRODUCTS = [...REAL_PRODUCTS, ...REAL_PRODUCTS.map(p => ({...p, id: p.id + 6}))];
export const CATEGORIES = ['Rings', 'Necklaces', 'Earrings', 'Bracelets'];
export const MATERIALS = ['18K Gold Filled', 'Sterling Silver', 'Rose Gold'];

export const COLLECTIONS = [
  {
    title: 'Necklaces',
    slug: 'necklaces',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-3479784.png',
    link: '/collections/necklaces'
  },
  {
    title: 'Bracelets',
    slug: 'bracelets',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-1240777.png',
    link: '/collections/bracelets'
  },
  {
    title: 'Rings',
    slug: 'rings',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-2002793.jpg',
    link: '/collections/rings'
  },
  {
    title: 'Earrings',
    slug: 'earrings',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-9979469.png',
    link: '/collections/earrings'
  },
  {
    title: 'Chains',
    slug: 'chains',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/screw-on-gem-bracelet-7928243.png',
    link: '/collections/chains'
  },
  {
    title: 'Sets',
    slug: 'sets',
    image: 'https://cdn.shopify.com/s/files/1/0524/9325/4812/files/gemstone-dome-ring-5431099.jpg',
    link: '/collections/sets'
  }
];
