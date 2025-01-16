/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
	content: [
    "./src/**/*.{svelte,html,astro}"
  ],
	safelist: [
    'lg:text-4xl',
    'bg-neutral-content',
    'bg-base-100',
    'bg-base-200',
    'bg-base-300',
    'bg-base-content',
    'bg-success'
  ],
  corePlugins: [],
  plugins: [daisyui],
	daisyui:{
		themes: ["dark"],
	}
}
