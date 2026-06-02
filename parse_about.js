const fs = require('fs');
const html = fs.readFileSync('/Users/williamstemitope/.gemini/antigravity-ide/brain/926153ef-145e-4d3d-993d-27e76e99a8d0/.system_generated/steps/349/content.md', 'utf8');

// very basic extraction for text in paragraphs or headings
const contentMatches = html.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi) || [];
const pMatches = html.match(/<p[^>]*>(.*?)<\/p>/gi) || [];
const imgMatches = html.match(/<img[^>]+src="([^">]+)"/gi) || [];

console.log("--- HEADINGS ---");
contentMatches.forEach(m => console.log(m.replace(/<[^>]+>/g, '').trim()));
console.log("\n--- PARAGRAPHS ---");
pMatches.forEach(m => console.log(m.replace(/<[^>]+>/g, '').trim()));
console.log("\n--- IMAGES ---");
imgMatches.forEach(m => {
  const match = m.match(/src="([^">]+)"/);
  if (match) console.log(match[1]);
});
