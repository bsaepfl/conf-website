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
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#BCCEFB",
          "secondary": "#A99AEA",
          "accent": "#BCCEFB",
          "neutral": "#3d4451",
          "base-100": "#000000",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["nord"], // This enables only the retro theme
  },
} satisfies Config;
