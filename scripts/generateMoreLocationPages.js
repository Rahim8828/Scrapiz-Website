#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// New location data for 9 more pages
const newLocations = [
  {
    componentName: 'ScrapDealerinSion',
    fileName: 'ScrapDealerinSion.jsx',
    url: 'scrap-dealer-in-sion',
    name: 'Sion',
    title: 'Scrap Dealer in Sion – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Sion with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Sion Station', 'Sion East', 'Sion West', 'Sion Circle', 'Sion Koliwada', 'Dharavi', 'Antop Hill', 'Wadala', 'GTB Nagar', 'Chunabhatti', 'Pratiksha Nagar', 'Amar Mahal', 'Sion Hospital Area', 'Sion Fort', 'Rafi Ahmed Kidwai Road'],
    landmarks: ['Sion Railway Station', 'Sion Circle', 'Sion Hospital', 'Sion Fort', 'GTB Nagar', 'Antop Hill', 'Pratiksha Nagar Market', 'Chunabhatti Junction'],
    testimonials: [
      { name: 'Ramesh Pawar', area: 'Sion East', text: 'Best scrap dealer in Sion! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Sunita Kamble', area: 'Sion Circle', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Prakash Jadhav', area: 'Antop Hill', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinKurla',
    fileName: 'ScrapDealerinKurla.jsx',
    url: 'scrap-dealer-in-kurla',
    name: 'Kurla',
    title: 'Scrap Dealer in Kurla – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Kurla with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Kurla Station', 'Kurla East', 'Kurla West', 'LBS Marg', 'Nehru Nagar', 'Kamani', 'Chunabhatti', 'Tilak Nagar', 'CST Road', 'Kurla Industrial Estate', 'Phoenix Market City Area', 'Naupada', 'Ghatkopar Link Road', 'Kamgar Nagar', 'Saki Vihar Road'],
    landmarks: ['Kurla Railway Station', 'Phoenix Market City', 'Kurla Bus Depot', 'LBS Marg', 'Nehru Nagar Market', 'Kamani Junction', 'Tilak Nagar', 'CST Road'],
    testimonials: [
      { name: 'Santosh Rane', area: 'Kurla East', text: 'Best scrap dealer in Kurla! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Madhuri Desai', area: 'Nehru Nagar', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Ajay Shinde', area: 'Phoenix Area', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinChembur',
    fileName: 'ScrapDealerinChembur.jsx',
    url: 'scrap-dealer-in-chembur',
    name: 'Chembur',
    title: 'Scrap Dealer in Chembur – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Chembur with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Chembur Station', 'Chembur East', 'Chembur West', 'Tilak Nagar', 'Deonar', 'Govandi', 'Mankhurd', 'VN Purav Marg', 'Swami Samarth Nagar', 'Sindhi Society', 'RCF Colony', 'Basant Park', 'Diamond Garden', 'Chembur Camp', 'Mahul Road'],
    landmarks: ['Chembur Railway Station', 'Chembur Naka', 'Tilak Nagar Market', 'RCF Colony', 'Diamond Garden', 'Basant Park', 'Sindhi Society', 'Chembur Camp'],
    testimonials: [
      { name: 'Vijay Nair', area: 'Chembur East', text: 'Best scrap dealer in Chembur! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Kavita Pillai', area: 'Tilak Nagar', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Suresh Menon', area: 'RCF Colony', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinGhatkoparEast',
    fileName: 'ScrapDealerinGhatkoparEast.jsx',
    url: 'scrap-dealer-in-ghatkopar-east',
    name: 'Ghatkopar East',
    title: 'Scrap Dealer in Ghatkopar East – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Ghatkopar East with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Ghatkopar Station East', 'Rajawadi', 'Pant Nagar', 'Asalpha', 'Garodia Nagar', 'Lal Bahadur Shastri Marg', 'Vikhroli Link Road', 'Jagruti Nagar', 'Sarvodaya Nagar', 'Ramabai Nagar', 'Amrut Nagar', 'Pantnagar', 'Tilak Nagar', 'Ghatkopar Industrial Estate', 'Laxmi Nagar'],
    landmarks: ['Ghatkopar Railway Station', 'R City Mall', 'Rajawadi Hospital', 'Garodia Nagar', 'Pant Nagar Market', 'Asalpha Metro', 'Jagruti Nagar', 'LBS Marg'],
    testimonials: [
      { name: 'Anil Patil', area: 'Rajawadi', text: 'Best scrap dealer in Ghatkopar East! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Priya Joshi', area: 'Pant Nagar', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Rahul Sawant', area: 'Garodia Nagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinGhatkoparWest',
    fileName: 'ScrapDealerinGhatkoparWest.jsx',
    url: 'scrap-dealer-in-ghatkopar-west',
    name: 'Ghatkopar West',
    title: 'Scrap Dealer in Ghatkopar West – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Ghatkopar West with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Ghatkopar Station West', 'Cama Lane', 'Kanjur Marg Link Road', 'Jain Mandir Road', 'Sarvodaya Nagar', 'Panchsheel Nagar', 'Kamgar Nagar', 'Vallabh Baug Lane', 'Nalanda School Area', 'Ghatkopar Pipe Line', 'Shreyas Cinema Area', 'Rajawadi Village', 'Pestom Sagar', 'Chhedanagar', 'Laxmi Nagar'],
    landmarks: ['Ghatkopar Railway Station', 'Shreyas Cinema', 'Cama Lane Market', 'Jain Mandir', 'Nalanda School', 'Vallabh Baug', 'Pestom Sagar', 'Rajawadi Village'],
    testimonials: [
      { name: 'Mahesh Kulkarni', area: 'Cama Lane', text: 'Best scrap dealer in Ghatkopar West! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Sneha Bhosale', area: 'Panchsheel Nagar', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Kiran Naik', area: 'Pestom Sagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinVidyavihar',
    fileName: 'ScrapDealerinVidyavihar.jsx',
    url: 'scrap-dealer-in-vidyavihar',
    name: 'Vidyavihar',
    title: 'Scrap Dealer in Vidyavihar – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Vidyavihar with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Vidyavihar Station', 'Vidyavihar East', 'Vidyavihar West', 'Kannamwar Nagar', 'Amar Mahal', 'Vikhroli Link Road', 'Ghatkopar Link Road', 'Sonapur', 'Tilak Nagar', 'VN Purav Marg', 'Rajawadi', 'Kannamwar Nagar 1', 'Kannamwar Nagar 2', 'Tagore Nagar', 'Deonar'],
    landmarks: ['Vidyavihar Railway Station', 'Kannamwar Nagar', 'Amar Mahal Junction', 'Sonapur Market', 'Tagore Nagar', 'Vikhroli Link Road', 'Tilak Nagar', 'VN Purav Marg'],
    testimonials: [
      { name: 'Rajesh Sharma', area: 'Kannamwar Nagar', text: 'Best scrap dealer in Vidyavihar! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Anjali Gupta', area: 'Amar Mahal', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Sanjay More', area: 'Sonapur', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinMulund',
    fileName: 'ScrapDealerinMulund.jsx',
    url: 'scrap-dealer-in-mulund',
    name: 'Mulund',
    title: 'Scrap Dealer in Mulund – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Mulund with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Mulund Station', 'Mulund East', 'Mulund West', 'Nahur', 'LBS Marg', 'Mulund Colony', 'Veena Nagar', 'Yogi Nagar', 'Nirmal Nagar', 'Johnson & Johnson Area', 'Mulund Industrial Estate', 'Gavanpada', 'Dumping Road', 'Mulund Check Naka', 'Airoli Link Road'],
    landmarks: ['Mulund Railway Station', 'R Mall Mulund', 'Nahur Station', 'Johnson & Johnson', 'Mulund Check Naka', 'Veena Nagar Market', 'Yogi Nagar', 'LBS Marg'],
    testimonials: [
      { name: 'Deepak Shah', area: 'Mulund East', text: 'Best scrap dealer in Mulund! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Pooja Iyer', area: 'Nahur', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Amit Desai', area: 'Mulund West', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinBhandup',
    fileName: 'ScrapDealerinBhandup.jsx',
    url: 'scrap-dealer-in-bhandup',
    name: 'Bhandup',
    title: 'Scrap Dealer in Bhandup – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Bhandup with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Bhandup Station', 'Bhandup East', 'Bhandup West', 'Kanjur Marg', 'LBS Marg', 'Sonapur', 'Bhandup Village', 'Powai Link Road', 'Vikhroli Link Road', 'Nahur', 'Mulund Link Road', 'Bhandup Industrial Estate', 'Kannamwar Nagar', 'Kanjur Village', 'Godrej Hill'],
    landmarks: ['Bhandup Railway Station', 'Kanjur Marg Station', 'Bhandup Village', 'Sonapur Market', 'LBS Marg', 'Powai Link Road', 'Nahur Junction', 'Godrej Hill'],
    testimonials: [
      { name: 'Sunil Patil', area: 'Bhandup East', text: 'Best scrap dealer in Bhandup! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Meera Nair', area: 'Kanjur Marg', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Prakash Jain', area: 'Bhandup West', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinVikhroli',
    fileName: 'ScrapDealerinVikhroli.jsx',
    url: 'scrap-dealer-in-vikhroli',
    name: 'Vikhroli',
    title: 'Scrap Dealer in Vikhroli – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Vikhroli with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Vikhroli Station', 'Vikhroli East', 'Vikhroli West', 'Kannamwar Nagar', 'Tagore Nagar', 'Godrej Hill', 'Parksite', 'Vikhroli Industrial Estate', 'LBS Marg', 'Powai Link Road', 'Kanjur Marg Link Road', 'Nirlon Colony', 'Kannamwar Nagar 1', 'Kannamwar Nagar 2', 'Vikhroli Park Site'],
    landmarks: ['Vikhroli Railway Station', 'Godrej Memorial Hospital', 'Parksite Colony', 'Kannamwar Nagar', 'Tagore Nagar Market', 'Nirlon Colony', 'LBS Marg', 'Powai Link Road'],
    testimonials: [
      { name: 'Ganesh Pawar', area: 'Vikhroli East', text: 'Best scrap dealer in Vikhroli! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Rekha Shetty', area: 'Parksite', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Vijay Mishra', area: 'Kannamwar Nagar', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  },
  {
    componentName: 'ScrapDealerinWadala',
    fileName: 'ScrapDealerinWadala.jsx',
    url: 'scrap-dealer-in-wadala',
    name: 'Wadala',
    title: 'Scrap Dealer in Wadala – Free Pickup & Best Price | Scrapiz',
    description: 'Sell scrap in Wadala with Scrapiz. Free doorstep pickup, instant cash, and best scrap rates. We buy metal scrap, e-waste, AC, copper, furniture & more.',
    areas: ['Wadala Station', 'Wadala East', 'Wadala West', 'Antop Hill', 'Sewri', 'Dadar TT', 'BPT Colony', 'Wadala Truck Terminal', 'Anik Depot', 'Bhakti Park', 'Naigaon', 'Cotton Green', 'Reay Road', 'Wadala Bridge', 'Phoenix Mills Area'],
    landmarks: ['Wadala Railway Station', 'Phoenix Market City', 'Antop Hill', 'Sewri Fort', 'BPT Colony', 'Bhakti Park', 'Cotton Green', 'Wadala Bridge'],
    testimonials: [
      { name: 'Ramesh Yadav', area: 'Wadala East', text: 'Best scrap dealer in Wadala! Got excellent rates for my old AC and fridge. Team was very professional.' },
      { name: 'Sunita Kamble', area: 'Antop Hill', text: 'Quick service and instant payment. Sold office furniture and e-waste. Highly recommended!' },
      { name: 'Anil Sawant', area: 'BPT Colony', text: 'Called them for society bulk scrap pickup. They handled everything smoothly. Great rates!' }
    ]
  }
];

console.log('🚀 Starting generation of 9 more location pages...\n');

// Read the template file
const templatePath = path.join(__dirname, '../src/Extra Location pages /ScrapDealerinAndheri.jsx');
let template = fs.readFileSync(templatePath, 'utf8');

// Generate all 9 pages
newLocations.forEach((location, index) => {
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

console.log('\n🎉 All 9 new location pages generated successfully!');
console.log('\n📋 Summary:');
console.log('✅ Sion');
console.log('✅ Kurla');
console.log('✅ Chembur');
console.log('✅ Ghatkopar East');
console.log('✅ Ghatkopar West');
console.log('✅ Vidyavihar');
console.log('✅ Mulund');
console.log('✅ Bhandup');
console.log('✅ Vikhroli');
console.log('✅ Wadala');
console.log('\n📝 Next step: Add routes to App.jsx');
