import type { Config } from "tailwindcss";
// import daisyui from "daisyui";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				default: '#633CFF',
  				active: '#BEADFF',
  				disabled: '#EFEBFF'
  			},
  			grey: {
  				dark: '#333333',
  				medium: '#737373',
  				light: '#D9D9D9',
  				verylight: '#FAFAFA'
  			},
  			whitesmoke: '#EEEEEE',
  			red: {
  				default: '#FF3939'
  			}
  		},
  		fontFamily: {
  			primary: 'instrument-sans'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // plugins: [daisyui],
    plugins: [require("tailwindcss-animate")]
};
export default config;
