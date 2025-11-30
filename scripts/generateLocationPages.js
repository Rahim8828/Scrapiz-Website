#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Location data for all 10 pages
const locations = [
  {
    componentName: 'ScrapDealerinAndheriEast',
    fileName: 'ScrapDealerinAndheriEast.jsx',
    url: 'scrap-dealer-in-andheri-east',
    name: 'Andheri East',
    title: 'Scrap Dealer in Andheri East – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Andheri East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Chakala', 'Marol', 'Saki Naka', 'JB Nagar', 'MIDC', 'Andheri Kurla Road', 'Sahar', 'Airport Area', 'WEH Metro', 'Asalpha', 'Gundavali', 'Vijay Nagar', 'Marol Naka', 'Kondivita', 'Pump House'],
    landmarks: ['Andheri Railway Station', 'WEH Metro Station', 'Saki Naka Junction', 'Marol Naka', 'MIDC Andheri', 'Chakala Market', 'JB Nagar Market', 'Andheri Sports Complex'],
    testimonials: [
      { name: 'Rajesh Kumar', area: 'Chakala', text: 'Best scrap dealer in Andheri East! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Priya Singh', area: 'Marol', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Amit Desai', area: 'Saki Naka', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinJogeshwariWest',
    fileName: 'ScrapDealerinJogeshwariWest.jsx',
    url: 'scrap-dealer-in-jogeshwari-west',
    name: 'Jogeshwari West',
    title: 'Scrap Dealer in Jogeshwari West – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Jogeshwari West with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Jogeshwari Station', 'Meghwadi', 'Aram Nagar', 'Prakash Nagar', 'Shastri Nagar', 'Jogeshwari Caves', 'Ismail Nagar', 'Siddharth Nagar', 'Ambedkar Nagar', 'Behram Baug', 'Jain Society', 'Laljipada', 'Navpada', 'Rajawadi', 'Shimpoli'],
    landmarks: ['Jogeshwari Railway Station', 'Jogeshwari Metro', 'Aram Nagar Film Studios', 'Meghwadi Market', 'Jogeshwari Caves', 'Ismail Nagar Market', 'Prakash Nagar Junction', 'Shimpoli Road'],
    testimonials: [
      { name: 'Suresh Patil', area: 'Meghwadi', text: 'Best scrap dealer in Jogeshwari West! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Neha Sharma', area: 'Aram Nagar', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Vikram Joshi', area: 'Prakash Nagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinJogeshwariEast',
    fileName: 'ScrapDealerinJogeshwariEast.jsx',
    url: 'scrap-dealer-in-jogeshwari-east',
    name: 'Jogeshwari East',
    title: 'Scrap Dealer in Jogeshwari East – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Jogeshwari East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Jogeshwari East Station', 'Vikhroli Link Road', 'Laxmi Industrial Estate', 'Mahakali Caves', 'Jogeshwari Vikhroli Link Road', 'Majas', 'Adarsh Nagar', 'Sahyadri Nagar', 'Patel Nagar', 'Rajawadi', 'Laxmi Nagar', 'Shankar Nagar', 'Indira Nagar', 'Jagruti Nagar', 'Sarvodaya Nagar'],
    landmarks: ['Jogeshwari East Station', 'Mahakali Caves', 'Laxmi Industrial Estate', 'Vikhroli Link Road', 'Majas Depot', 'Adarsh Nagar Market', 'Patel Nagar Junction', 'Rajawadi Market'],
    testimonials: [
      { name: 'Ramesh Yadav', area: 'Majas', text: 'Best scrap dealer in Jogeshwari East! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Anjali Gupta', area: 'Adarsh Nagar', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Kiran Naik', area: 'Laxmi Nagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinGoregaonEast',
    fileName: 'ScrapDealerinGoregaonEast.jsx',
    url: 'scrap-dealer-in-goregaon-east',
    name: 'Goregaon East',
    title: 'Scrap Dealer in Goregaon East – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Goregaon East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Aarey Colony', 'Film City', 'Dindoshi', 'Bangur Nagar', 'Jawahar Nagar', 'Motilal Nagar', 'Gokuldham', 'Sanjay Gandhi National Park', 'Aarey Milk Colony', 'Vanrai', 'Hanuman Nagar', 'Shanti Nagar', 'Siddharth Nagar', 'Yashodham', 'Oberoi Mall Area'],
    landmarks: ['Goregaon East Station', 'Film City', 'Aarey Colony', 'Oberoi Mall', 'Dindoshi Bus Depot', 'Bangur Nagar Market', 'Jawahar Nagar', 'Sanjay Gandhi National Park Gate'],
    testimonials: [
      { name: 'Sanjay More', area: 'Film City', text: 'Best scrap dealer in Goregaon East! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Pooja Iyer', area: 'Dindoshi', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Anil Sawant', area: 'Bangur Nagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinGoregaonWest',
    fileName: 'ScrapDealerinGoregaonWest.jsx',
    url: 'scrap-dealer-in-goregaon-west',
    name: 'Goregaon West',
    title: 'Scrap Dealer in Goregaon West – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Goregaon West with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Goregaon Station West', 'Link Road', 'Patkar College', 'Siddharth Nagar', 'Motilal Nagar', 'Vanrai', 'Jawahar Nagar', 'Bangur Nagar', 'Oshiwara', 'Malad Link Road', 'Goregaon Sports Club', 'Mindspace', 'Nesco', 'Inorbit Mall Area', 'Oberoi Garden City'],
    landmarks: ['Goregaon Railway Station', 'Inorbit Mall', 'Oberoi Mall', 'Mindspace IT Park', 'Nesco Exhibition Center', 'Patkar College', 'Link Road Junction', 'Goregaon Sports Club'],
    testimonials: [
      { name: 'Mahesh Kulkarni', area: 'Mindspace', text: 'Best scrap dealer in Goregaon West! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Sneha Reddy', area: 'Link Road', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Prakash Jain', area: 'Bangur Nagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  }
];

console.log('🚀 Starting location pages generation...\n');

// Read the template file
const templatePath = path.join(__dirname, '../src/Extra Location pages /ScrapDealerinAndheri.jsx');
let template = fs.readFileSync(templatePath, 'utf8');

// Generate pages for first 5 locations
locations.forEach((location, index) => {
  console.log(`📄 Generating ${index + 1}/5: ${location.name}...`);
  
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

console.log('\n✨ First 5 pages generated successfully!');
console.log('\n📝 Next: Run the script again for remaining 5 pages (Malad East, Malad West, Kandivali East, Kandivali West)');


// Remaining 5 locations
const remainingLocations = [
  {
    componentName: 'ScrapDealerinMaladEast',
    fileName: 'ScrapDealerinMaladEast.jsx',
    url: 'scrap-dealer-in-malad-east',
    name: 'Malad East',
    title: 'Scrap Dealer in Malad East – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Malad East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Malad East Station', 'Kurar Village', 'Dindoshi', 'Jankalyan Nagar', 'Evershine Nagar', 'Pushpa Park', 'Malvani', 'Amboli', 'Chincholi Bunder', 'Akurli', 'Rathodi', 'Gaikwad Nagar', 'Shanti Nagar', 'Prakash Nagar', 'Hanuman Tekdi'],
    landmarks: ['Malad East Station', 'Kurar Village', 'Dindoshi Bus Depot', 'Evershine Nagar Market', 'Jankalyan Nagar', 'Pushpa Park', 'Akurli Road', 'Malvani Market'],
    testimonials: [
      { name: 'Deepak Shah', area: 'Kurar Village', text: 'Best scrap dealer in Malad East! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Kavita Nair', area: 'Evershine Nagar', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Ravi Tiwari', area: 'Jankalyan Nagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinMaladWest',
    fileName: 'ScrapDealerinMaladWest.jsx',
    url: 'scrap-dealer-in-malad-west',
    name: 'Malad West',
    title: 'Scrap Dealer in Malad West – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Malad West with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Malad Station West', 'Orlem', 'Malad Link Road', 'Chincholi Bunder', 'Marve Road', 'Madh Island', 'Aksa Beach', 'Erangal', 'Mindspace', 'Malad Industrial Area', 'Poisar', 'Evershine City', 'Infiniti Mall Area', 'Inorbit Mall Area', 'Mindspace Malad'],
    landmarks: ['Malad Railway Station', 'Infiniti Mall Malad', 'Inorbit Mall', 'Mindspace Malad', 'Orlem Church', 'Marve Beach', 'Aksa Beach', 'Madh Island', 'Malad Link Road'],
    testimonials: [
      { name: 'Sunil D\'Souza', area: 'Orlem', text: 'Best scrap dealer in Malad West! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Meera Fernandes', area: 'Link Road', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Ashok Rane', area: 'Mindspace', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinKandivaliEast',
    fileName: 'ScrapDealerinKandivaliEast.jsx',
    url: 'scrap-dealer-in-kandivali-east',
    name: 'Kandivali East',
    title: 'Scrap Dealer in Kandivali East – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Kandivali East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Kandivali East Station', 'Thakur Complex', 'Thakur Village', 'Lokhandwala Township', 'Growels 101 Mall Area', 'Hanuman Nagar', 'Poisar', 'Samta Nagar', 'Akurli', 'Mahavir Nagar', 'Charkop Naka', 'Shanti Nagar', 'Damu Nagar', 'Laljipada', 'Ganesh Nagar'],
    landmarks: ['Kandivali East Station', 'Thakur Complex', 'Thakur Village', 'Growels 101 Mall', 'Lokhandwala Township', 'Mahavir Nagar Market', 'Poisar Depot', 'Akurli Road'],
    testimonials: [
      { name: 'Nitin Thakur', area: 'Thakur Complex', text: 'Best scrap dealer in Kandivali East! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Swati Kapoor', area: 'Thakur Village', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Manish Agarwal', area: 'Lokhandwala Township', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinKandivaliWest',
    fileName: 'ScrapDealerinKandivaliWest.jsx',
    url: 'scrap-dealer-in-kandivali-west',
    name: 'Kandivali West',
    title: 'Scrap Dealer in Kandivali West – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Kandivali West with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Kandivali Station West', 'Charkop', 'Mahavir Nagar', 'Poisar', 'Thakur Complex', 'Akurli Road', 'Dattani Park', 'Shanti Nagar', 'Hanuman Tekdi', 'Ganesh Nagar', 'Laljipada', 'Samta Nagar', 'Damu Nagar', 'Magathane', 'Mandpeshwar'],
    landmarks: ['Kandivali Railway Station', 'Raghuleela Mall', 'Charkop Market', 'Mahavir Nagar', 'Thakur Complex', 'Poisar Bus Depot', 'Akurli Road', 'Mandpeshwar Caves'],
    testimonials: [
      { name: 'Ganesh Pawar', area: 'Charkop', text: 'Best scrap dealer in Kandivali West! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Rekha Shetty', area: 'Mahavir Nagar', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Vijay Mishra', area: 'Thakur Complex', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  }
];

// Generate remaining pages
console.log('\n🚀 Generating remaining 4 pages...\n');

remainingLocations.forEach((location, index) => {
  console.log(`📄 Generating ${index + 1}/4: ${location.name}...`);
  
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

console.log('\n🎉 All 9 location pages generated successfully!');
console.log('\n📋 Summary:');
console.log('✅ Andheri East');
console.log('✅ Jogeshwari West');
console.log('✅ Jogeshwari East');
console.log('✅ Goregaon East');
console.log('✅ Goregaon West');
console.log('✅ Malad East');
console.log('✅ Malad West');
console.log('✅ Kandivali East');
console.log('✅ Kandivali West');
console.log('\n📝 Next step: Add routes to App.jsx');
