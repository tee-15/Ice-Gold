const fs = require('fs');

// Simple script to test if the search logic works and if there are any undefined fields
const code = fs.readFileSync('./lib/data.js', 'utf8');
// Mocking the export
const sandbox = {};
eval(code.replace(/export const/g, 'sandbox.'));
const ALL_PRODUCTS = sandbox.ALL_PRODUCTS || sandbox.REAL_PRODUCTS; // If it failed to map?

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
