const fs = require('fs');

const data = fs.readFileSync('/Users/williamstemitope/.gemini/antigravity-ide/brain/9ae2e772-81ad-4bf8-be05-ed51738245ef/.system_generated/steps/859/content.md', 'utf8');

// The file contains frontmatter. Let's find the JSON start.
const jsonStart = data.indexOf('{"products"');
if (jsonStart !== -1) {
  const jsonStr = data.slice(jsonStart);
  try {
    const parsed = JSON.parse(jsonStr);
    const products = parsed.products.slice(0, 10).map(p => ({
      title: p.title,
      image: p.images[0] ? p.images[0].src : null
    }));
    console.log(JSON.stringify(products, null, 2));
  } catch(e) {
    console.error("JSON parse error", e.message);
  }
} else {
  console.error("Could not find JSON");
}
