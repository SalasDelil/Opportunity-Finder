import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	fontSize: {
  		'custome-size': '16px',
  		'custome-size0': '22px',
  		'custome-size1': '32px'
  	},
  	borderRadius: {
  		'border-rad': '30px',
  		'custom-rad0': '6px',
  		'custom-rad1': '80px',
  		full: '9999px'
  	},
  	extend: {
  		fontFamily: {
  			epilogue: ["Epilogue"],
  			poppins: 'Poppins'
  		},
  		spacing: {
  			'266': '266px',
  			'919': '919px'
  		},
  		width: {
  			'custom-w': '66px'
  		},
  		height: {
  			'custom-h': '59px'
  		},
  		colors: {
  			'custom-color': '#25324B',
  			'custom-color1': '#56CDAD1A',
  			'custom-color2': '#4640DE',
  			'custom-text-color1': '#56CDAD',
  			'custom-text-color2': '#FFB836',
  			'custom-text-color3': '#7C8493',
  			'custom-text-color4': '#4640DE',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
