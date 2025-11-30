/// <reference types="vitest" />
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { plugin as markdown } from "vite-plugin-markdown"
import sitemap from 'vite-plugin-sitemap'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'

const blogPosts = [
  'sell-scrap-without-leaving-home-in-mumbai',
  'best-price-for-scrap-metal-near-me-sell-now',
  'sell-scrap-online-in-mumbai-instant-pickup-call-now',
  'reliable-scrap-buyer-near-me-for-home-pick-up',
  'sell-my-unused-junk-for-cash-in-mumbai',
  'selling-scrap-online-with-scrapiz-how-it-makes-scrap-selling-easy',
  'sell-scrap-online-in-mumbai',
  'top-10-benefits-of-selling-your-scrap-online-with-scrapiz'
];

const staticRoutes = [
  '/about',
  '/bandra',
  '/bandra-east',
  '/blog',
  '/contact',
  '/demolition-service-page',
  '/dharavi',
  '/dharavi-koliwada',
  '/dismantling-page',
  '/goregaon',
  '/jogeshwari',
  '/junk-removal-service-page',
  '/kandivali',
  '/locations',
  '/mahim',
  '/nalasopara',
  '/paper-shredding-page',
  '/privacy-policy',
  '/scrap-collection-page',
  '/sell-aluminium-scrap-mumbai',
  '/sell-copper-scrap-mumbai',
  '/sell-brass-scrap-mumbai',
  '/sell-iron-steel-scrap-mumbai',
  '/sell-stainless-steel-scrap-mumbai',
  '/sell-e-waste-mumbai',
  '/sell-ac-scrap-mumbai',
  '/sell-refrigerator-scrap-mumbai',
  '/sell-washing-machine-scrap-mumbai',
  '/sell-microwave-scrap-mumbai',
  '/services',
  '/society-tie-up-page',
  '/terms-and-conditions',
  '/vehicle-scrapping-page',
];

export default defineConfig({
  plugins: [
    react(), 
    markdown({ 
      mode: ['html', 'attributes'],
      remarkPlugins: [
        remarkGfm,
        remarkSlug, 
        [remarkToc, { heading: 'table of contents', tight: true }]
      ],
    }),
    sitemap({
      hostname: 'https://www.scrapiz.in',
      dynamicRoutes: staticRoutes.concat(blogPosts.map((post) => `/blog/${post}`)),
      beautify: true, // This will format the XML
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React vendor bundle
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Framer Motion bundle
          'motion': ['framer-motion'],
          // Lucide icons bundle
          'icons': ['lucide-react'],
        },
      },
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 600,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})
