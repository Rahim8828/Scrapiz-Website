#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// South Mumbai location data
const southMumbaiLocations = [
  {
    componentName: 'ScrapDealerinLowerParel',
    fileName: 'ScrapDealerinLowerParel.jsx',
    url: 'scrap-dealer-in-lower-parel',
    name: 'Lower Parel',
    title: 'Scrap Dealer in Lower Parel – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Lower Parel with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Lower Parel Station', 'Elphinstone Road', 'Parel', 'Worli', 'Phoenix Mills', 'Kamala Mills', 'Lodha Park', 'Shivaji Park', 'Prabhadevi', 'Dadar TT', 'Curry Road', 'Delisle Road', 'High Street Phoenix', 'Palladium Mall Area', 'Raghuvanshi Mills'],
    landmarks: ['Lower Parel Railway Station', 'Phoenix Market City', 'High Street Phoenix', 'Palladium Mall', 'Kamala Mills', 'Lodha Park', 'Elphinstone Road Station', 'Parel Station'],
    testimonials: [
      { name: 'Arjun Mehta', area: 'Phoenix Mills', text: 'Best scrap dealer in Lower Parel! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Kavita Shah', area: 'Kamala Mills', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Rohit Kapoor', area: 'Lodha Park', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinWorli',
    fileName: 'ScrapDealerinWorli.jsx',
    url: 'scrap-dealer-in-worli',
    name: 'Worli',
    title: 'Scrap Dealer in Worli – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Worli with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Worli Station', 'Worli Naka', 'Worli Sea Face', 'Prabhadevi', 'Lower Parel', 'Annie Besant Road', 'Worli Village', 'BDD Chawl', 'Lotus Mills', 'Worli Koliwada', 'Acharya Atre Chowk', 'Worli Dairy', 'Nehru Planetarium Area', 'Haji Ali', 'Mahalaxmi'],
    landmarks: ['Worli Sea Face', 'Haji Ali Dargah', 'Nehru Planetarium', 'Worli Naka', 'BDD Chawl', 'Worli Village', 'Lotus Mills', 'Acharya Atre Chowk'],
    testimonials: [
      { name: 'Sameer Desai', area: 'Worli Sea Face', text: 'Best scrap dealer in Worli! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Priya Nair', area: 'Prabhadevi', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Vikram Joshi', area: 'Worli Naka', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinByculla',
    fileName: 'ScrapDealerinByculla.jsx',
    url: 'scrap-dealer-in-byculla',
    name: 'Byculla',
    title: 'Scrap Dealer in Byculla – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Byculla with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Byculla Station', 'Byculla East', 'Byculla West', 'Mazgaon', 'Dockyard Road', 'Sandhurst Road', 'Agripada', 'Clare Road', 'Mandvi', 'Bharat Nagar', 'Gloria Church', 'Byculla Zoo Area', 'Nesbit Road', 'Jijamata Udyan', 'Mazgaon Dock'],
    landmarks: ['Byculla Railway Station', 'Byculla Zoo', 'Gloria Church', 'Mazgaon Dock', 'Dockyard Road Station', 'Sandhurst Road Station', 'Agripada Market', 'Jijamata Udyan'],
    testimonials: [
      { name: 'Farhan Khan', area: 'Byculla East', text: 'Best scrap dealer in Byculla! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Ayesha Shaikh', area: 'Mazgaon', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Imran Patel', area: 'Agripada', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinGrantRoad',
    fileName: 'ScrapDealerinGrantRoad.jsx',
    url: 'scrap-dealer-in-grant-road',
    name: 'Grant Road',
    title: 'Scrap Dealer in Grant Road – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Grant Road with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Grant Road Station', 'Grant Road East', 'Grant Road West', 'Tardeo', 'Charni Road', 'Opera House', 'Girgaon', 'Gamdevi', 'Nana Chowk', 'Babulnath', 'Malabar Hill', 'Walkeshwar', 'Teen Batti', 'Kemps Corner', 'August Kranti Maidan'],
    landmarks: ['Grant Road Railway Station', 'Nana Chowk', 'Babulnath Temple', 'Opera House', 'Charni Road Station', 'Gamdevi Market', 'Tardeo Junction', 'August Kranti Maidan'],
    testimonials: [
      { name: 'Rajesh Patel', area: 'Grant Road East', text: 'Best scrap dealer in Grant Road! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Meena Desai', area: 'Tardeo', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Kiran Shah', area: 'Gamdevi', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinCST',
    fileName: 'ScrapDealerinCST.jsx',
    url: 'scrap-dealer-in-cst',
    name: 'CST',
    title: 'Scrap Dealer in CST – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in CST with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['CST Station', 'Chhatrapati Shivaji Terminus', 'Fort', 'Kala Ghoda', 'Ballard Estate', 'Azad Maidan', 'Cross Maidan', 'Horniman Circle', 'Flora Fountain', 'VT Area', 'DN Road', 'Mahatma Gandhi Road', 'Churchgate', 'Marine Lines', 'Mantralaya'],
    landmarks: ['CST Railway Station', 'Flora Fountain', 'Horniman Circle', 'Azad Maidan', 'Kala Ghoda', 'Ballard Estate', 'Mantralaya', 'BMC Building'],
    testimonials: [
      { name: 'Aditya Kulkarni', area: 'Fort', text: 'Best scrap dealer in CST area! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Shruti Joshi', area: 'Kala Ghoda', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Manish Agarwal', area: 'Ballard Estate', text: 'Called them for office bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinColaba',
    fileName: 'ScrapDealerinColaba.jsx',
    url: 'scrap-dealer-in-colaba',
    name: 'Colaba',
    title: 'Scrap Dealer in Colaba – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Colaba with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Colaba Causeway', 'Cuffe Parade', 'Navy Nagar', 'Badhwar Park', 'Colaba Market', 'Sassoon Dock', 'Gateway of India', 'Regal Cinema Area', 'Wodehouse Road', 'Strand Road', 'Apollo Bunder', 'World Trade Center', 'Taj Mahal Hotel Area', 'Colaba Bus Depot', 'Afghan Church'],
    landmarks: ['Gateway of India', 'Taj Mahal Palace Hotel', 'Colaba Causeway', 'Regal Cinema', 'Sassoon Dock', 'Cuffe Parade', 'World Trade Center', 'Afghan Church'],
    testimonials: [
      { name: 'Aryan Mehta', area: 'Colaba Causeway', text: 'Best scrap dealer in Colaba! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Natasha D\'Souza', area: 'Cuffe Parade', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Rohan Kapoor', area: 'Navy Nagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinFort',
    fileName: 'ScrapDealerinFort.jsx',
    url: 'scrap-dealer-in-fort',
    name: 'Fort',
    title: 'Scrap Dealer in Fort – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Fort with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Fort Area', 'Kala Ghoda', 'Ballard Estate', 'Horniman Circle', 'Flora Fountain', 'DN Road', 'Mahatma Gandhi Road', 'Churchgate', 'Marine Lines', 'Nariman Point', 'Oval Maidan', 'Cross Maidan', 'Mantralaya', 'Hutatma Chowk', 'Bombay Stock Exchange'],
    landmarks: ['Flora Fountain', 'Horniman Circle', 'Kala Ghoda', 'Bombay Stock Exchange', 'Churchgate Station', 'Marine Lines Station', 'Nariman Point', 'Oval Maidan'],
    testimonials: [
      { name: 'Nikhil Sharma', area: 'Kala Ghoda', text: 'Best scrap dealer in Fort! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Pooja Reddy', area: 'Nariman Point', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Amit Verma', area: 'Churchgate', text: 'Called them for office bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinDadarEast',
    fileName: 'ScrapDealerinDadarEast.jsx',
    url: 'scrap-dealer-in-dadar-east',
    name: 'Dadar East',
    title: 'Scrap Dealer in Dadar East – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Dadar East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Dadar Station East', 'Dadar TT', 'Parel', 'Naigaon', 'Sewri', 'Wadala', 'Antop Hill', 'Kohinoor Mills', 'Hindmata', 'Portuguese Church', 'Dadar Market', 'Tilak Bridge', 'Kabutarkhana', 'Dadar Parsi Colony', 'Dadar Flower Market'],
    landmarks: ['Dadar Railway Station', 'Dadar Flower Market', 'Dadar TT Circle', 'Portuguese Church', 'Hindmata Cinema', 'Kohinoor Mills', 'Tilak Bridge', 'Kabutarkhana'],
    testimonials: [
      { name: 'Sanjay Pawar', area: 'Dadar TT', text: 'Best scrap dealer in Dadar East! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Anita Kulkarni', area: 'Parel', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Prakash Jadhav', area: 'Naigaon', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinDadarWest',
    fileName: 'ScrapDealerinDadarWest.jsx',
    url: 'scrap-dealer-in-dadar-west',
    name: 'Dadar West',
    title: 'Scrap Dealer in Dadar West – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Dadar West with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Dadar Station West', 'Shivaji Park', 'Mahim', 'Prabhadevi', 'Worli', 'Dadar Parsi Colony', 'Gokhale Road', 'Ranade Road', 'Veer Savarkar Marg', 'Chaityabhoomi', 'Siddhivinayak Temple Area', 'Dadar Beach', 'Plaza Cinema', 'Kohinoor Square', 'Shivaji Park Gymkhana'],
    landmarks: ['Shivaji Park', 'Siddhivinayak Temple', 'Chaityabhoomi', 'Dadar Beach', 'Plaza Cinema', 'Kohinoor Square', 'Shivaji Park Gymkhana', 'Gokhale Road'],
    testimonials: [
      { name: 'Ramesh Rane', area: 'Shivaji Park', text: 'Best scrap dealer in Dadar West! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Sunita Deshmukh', area: 'Gokhale Road', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Vijay Sawant', area: 'Prabhadevi', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  }
];

console.log('🚀 Starting generation of 9 South Mumbai location pages...\n');

// Read the template file
const templatePath = path.join(__dirname, '../src/Extra Location pages /ScrapDealerinAndheri.jsx');
let template = fs.readFileSync(templatePath, 'utf8');

// Generate all 9 pages
southMumbaiLocations.forEach((location, index) => {
  console.log(`📄 Generating ${index + 1}/9: ${location.name}...`);
  
  let pageContent = template;
  
  // Replace component name
  pageContent = pageContent.replace(/const ScrapDealerinAndheri/g, `const ${location.componentName}`);
  pageContent = pageContent.replace(/export default ScrapDealerinAndheri/g, `export default ${location.componentName}`);
  
  // Replace location name
  pageContent = pageContent.replace(/'Andheri West'/g, `'${location.name}'`);
  pageContent = pageContent.replace(/Andheri West/g, location.name);
  
  // Replace title and description
  pageContent = pageContent.replace(/title: 'Scrap Dealer in Andheri West[^']*'/g, `title: '${location.title}'`);
  pageContent = pageContent.replace(/description: 'Sell scrap in Andheri West[^']*'/g, `description: '${location.description}'`);
  
  // Replace URL
  pageContent = pageContent.replace(/scrap-dealer-in-andheri/g, location.url);
  
  // Replace areas array
  const areasString = location.areas.map(a => `'${a}'`).join(', ');
  pageContent = pageContent.replace(/areas: \[[^\]]*\]/s, `areas: [\n      ${areasString}\n    ]`);
  
  // Replace landmarks array
  const landmarksString = location.landmarks.map(l => `'${l}'`).join(', ');
  pageContent = pageContent.replace(/landmarks: \[[^\]]*\]/s, `landmarks: [\n      ${landmarksString}\n    ]`);
  
  // Replace testimonials
  const testimonialsString = location.testimonials.map(t => 
    `{\n      name: '${t.name}',\n      area: '${t.area}',\n      rating: 5,\n      text: '${t.text}'\n    }`
  ).join(',\n    ');
  pageContent = pageContent.replace(/const testimonials = \[[^\]]*\];/s, `const testimonials = [\n    ${testimonialsString}\n  ];`);
  
  // Remove address field
  pageContent = pageContent.replace(/address: '[^']*',?\n/g, '');
  
  // Write the file
  const outputPath = path.join(__dirname, `../src/Extra Location pages /${location.fileName}`);
  fs.writeFileSync(outputPath, pageContent);
  
  console.log(`✅ Created: ${location.fileName}`);
});

console.log('\n🎉 All 9 South Mumbai location pages generated successfully!');
console.log('\n📋 Summary:');
console.log('✅ Lower Parel');
console.log('✅ Worli');
console.log('✅ Byculla');
console.log('✅ Grant Road');
console.log('✅ CST');
console.log('✅ Colaba');
console.log('✅ Fort');
console.log('✅ Dadar East');
console.log('✅ Dadar West');
console.log('\n📝 Next step: Add routes to App.jsx');
console.log('\n🎯 Total pages created: 29 location pages!');
