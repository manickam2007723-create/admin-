const fs = require('fs');

const adjectives = ['Organic', 'Natural', 'Pure', 'Raw', 'Wildcrafted', 'Eco-friendly', 'Sustainable', 'Herbal', 'Cold-Pressed', 'Vegan', 'Handmade', 'Artisan', 'Healing', 'Soothing', 'Nourishing'];
const nouns = ['Honey', 'Aloe Vera Gel', 'Neem Soap', 'Bamboo Toothbrush', 'Rose Water', 'Coconut Oil', 'Essential Oil', 'Shea Butter', 'Body Scrub', 'Face Mask', 'Lip Balm', 'Deodorant', 'Cotton Tote', 'Hemp Serum', 'Matcha Tea', 'Ashwagandha Powder', 'Turmeric Roots', 'Shampoo Bar', 'Conditioner Bar', 'Jojoba Oil'];

const categories = ['Skincare', 'Food', 'Bath & Body', 'Accessories', 'Wellness', 'Haircare'];

const products = [];

let idCounter = 1;
for (let i = 0; i < 100; i++) {
  const adjName = adjectives[Math.floor(Math.random() * adjectives.length)];
  const nounName = nouns[Math.floor(Math.random() * nouns.length)];
  const name = `${adjName} ${nounName} ${idCounter}`; // Add ID to ensure uniqueness strictly
  
  const category = categories[Math.floor(Math.random() * categories.length)];
  
  // Random price between 5 and 50
  const price = (Math.random() * 45 + 5).toFixed(2);
  
  // Create a realistic-looking Unsplash nature generic link per category or random nature keywords
  const imgKeywords = ['nature', 'leaf', 'flower', 'water', 'plant', 'organic'];
  const keyword = imgKeywords[Math.floor(Math.random() * imgKeywords.length)];
  const image = `https://source.unsplash.com/400x400/?${keyword},${category.split(' ')[0]}&sig=${idCounter}`; // Note: Unsplash Source API is deprecated, let's use a dummy image service like placehold.co or Picsum.
  
  const picsumImage = `https://picsum.photos/seed/${idCounter + 100}/400/400`;
  
  products.push({
    id: idCounter,
    name: `${adjName} ${nounName}`,
    price: parseFloat(price),
    category: category,
    image: picsumImage,
    description: `A premium, environmentally-conscious ${nounName.toLowerCase()} crafted for those who value sustainability and natural ingredients. Paraben-free and sustainably sourced.`
  });
  
  idCounter++;
}

// Convert to module format exporting the array
const fileContent = `const initialProducts = ${JSON.stringify(products, null, 2)};\n`;
fs.writeFileSync('data.js', fileContent, 'utf-8');
console.log('100 products generated in data.js');
