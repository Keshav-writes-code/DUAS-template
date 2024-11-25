/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import {daisyUIClasses} from "./daisyui_classes.js"
export default {
	content: [],
  safelist: daisyUIClasses,
  plugins: [daisyui],
	daisyui:{
		themes: ["dark"],
	}
}