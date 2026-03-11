import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Updated to your Clinic Brand Palette
        brand: {
          navy: '#1F3665',
          teal: '#3297A8',
          mint: '#A4D9D0',
          sage: '#B7DDC9',
        },
       primary: {
          DEFAULT: '#1F3665', // Changed from black to Navy
          gold: '#3297A8',
          white: '#FFFFFF',
        },
        background: {
          light: '#F8FAFB',
          dark: '#1F3665',    // Changed from #121212 to Navy
        },
        text: {
          light: '#1F3665',
          dark: '#E5F4F1',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        ui: ['Nunito', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
