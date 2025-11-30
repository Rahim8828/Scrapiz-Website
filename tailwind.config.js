/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[700]'),
            '--tw-prose-headings': theme('colors.gray[900]'),
            '--tw-prose-links': theme('colors.blue[600]'),
            '--tw-prose-bold': theme('colors.gray[800]'),
            '--tw-prose-hr': theme('colors.gray[200]'),
            '--tw-prose-quotes': theme('colors.gray[800]'),
            '--tw-prose-quote-borders': theme('colors.gray[200]'),
            '--tw-prose-font-sans': 'Inter',
            '--tw-prose-font-poppins': 'Poppins',
            h1: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '800',
            },
            h2: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              marginTop: '1.8em',
              marginBottom: '0.8em',
            },
            p: {
              fontFamily: 'Inter, sans-serif',
            },
            img: {
              width: '100%',
              maxHeight: '450px',
              objectFit: 'cover',
              borderRadius: theme('borderRadius.lg'),
              marginLeft: 'auto',
              marginRight: 'auto',
            },
            // Add styles for the Table of Contents
            'nav[aria-label="Table of contents"]': {
              border: `1px solid ${theme('colors.gray.200')}`,
              backgroundColor: theme('colors.gray.50'),
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.6'),
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.8'),
            },
            'nav[aria-label="Table of contents"] > h2': {
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '600',
              fontSize: theme('fontSize.xl'),
              marginTop: '0',
              marginBottom: theme('spacing.4'),
            },
             'nav[aria-label="Table of contents"] > ol': {
              listStyle: 'decimal inside',
              margin: 0,
              padding: 0,
            },
            'nav[aria-label="Table of contents"] li': {
              marginTop: theme('spacing.2'),
            },
            'nav[aria-label="Table of contents"] a': {
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.2s ease-in-out',
            },
            'nav[aria-label="Table of contents"] a:hover': {
              color: theme('colors.blue.700'),
              textDecoration: 'underline',
            },
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
