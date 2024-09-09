import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Almost-White' : 'hsl(0, 0%, 98%)',
        'Medium-Gray' : 'hsl(0, 0%, 41%)',
        'Almost-Black' : 'hsl(0, 0%, 8%)',
      },
      fontFamily : {
        Epilogue : ["Epilogue"]
      }
    },
  },
  plugins: [],
};
export default config;
