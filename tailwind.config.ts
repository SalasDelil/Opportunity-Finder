import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      'custome-size': '16px',
      'custome-size1': '32px',
    },
    borderRadius: {
      'border-rad':'30px',
      'custom-rad1': '80px',
      'full' : '9999px',
    },
    extend: {
      fontFamily: { 
        epilogue: ["Epilogue"],
        poppins: 'Poppins',
      },
      spacing: {
        '266': '266px',
        '919':'919px'
      },
      width: {
        'custom-w': '66px',
      },
      height: {
        'custom-h': '59px'
      },
      colors: {
        'custom-color':'#25324B',
        'custom-color1':'#56CDAD1A',
        'custom-text-color1': '#56CDAD',
        'custom-text-color2': '#FFB836',
        'custom-text-color3': '#7C8493',
        'custom-text-color4': '#4640DE'
      },
    },
  },
  plugins: [],
};
export default config;
