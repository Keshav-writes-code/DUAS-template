/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import daisyUIClasses from "./daisyui_classes"
export default {
	content: ["./src/**/*.{html,js,svelte}"],
  safelist: daisyUIClasses,
  plugins: [daisyui],
	daisyui:{
		themes: ["dark"],
	}
}