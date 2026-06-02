import { ALL_PRODUCTS } from './lib/data.js';

try {
  const query = "ring";
  const filtered = ALL_PRODUCTS.filter(product => 
    product.title.toLowerCase().includes(query) || 
    product.category.toLowerCase().includes(query)
  );
  console.log("Filtered length:", filtered.length);
} catch (e) {
  console.log("Error:", e.message);
}
