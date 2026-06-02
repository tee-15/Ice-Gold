const fs = require('fs');
const html = fs.readFileSync('/Users/williamstemitope/.gemini/antigravity-ide/brain/926153ef-145e-4d3d-993d-27e76e99a8d0/.system_generated/steps/349/content.md', 'utf8');

const text = html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                 .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                 .replace(/<[^>]+>/g, '\n')
                 .split('\n')
                 .map(s => s.trim())
                 .filter(s => s.length > 30);
                 
console.log("--- TEXT ---");
console.log(Array.from(new Set(text)).join('\n'));

console.log("\n--- IMAGES ---");
const imgRegex = /(?:src|data-src|srcset)=["']([^"']*\.(?:png|jpg|jpeg|webp|gif)[^"']*)["']/gi;
let match;
const images = new Set();
while ((match = imgRegex.exec(html)) !== null) {
    if (match[1].includes('shopify')) {
        images.add(match[1]);
    }
}
Array.from(images).forEach(i => console.log(i));
