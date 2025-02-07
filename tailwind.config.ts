import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        myCustomTheme: {
          primary: '#b949d7',   // Vibrant Purple
          secondary: '#b4a6ed', // Lavender Mist
          accent: '#bccefb',    // Sky Blue
          neutral: '#6593b3',   // Steel Blue
          'base-100': '#f7f7f7',// Light Gray (background)
          'base-200': '#e5e7eb',// Light Gray (background)
          'base-300': '#d1d5db',// Light Gray (background)
          'base-content': '#1f2937',// Light Gray (background)
          info: '#e0e8f0',      // Soft Blue
          success: '#86e1b9',   // Mint Green
          warning: '#fbbf24',   // Warm Yellow
          error: '#ef4444',     // Red for errors
        },
    },], // This enables only the retro theme
  },
} satisfies Config;
