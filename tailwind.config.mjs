/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
	content: [
    "./src/**/*.{svelte,html,astro}"
  ],
	corePlugins: [],
  plugins: [daisyui],
	daisyui:{
		themes: ["dark"],
	}
}