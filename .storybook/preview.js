import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";


const theme = {
	fontFamily: "Lato",
  proportions: () => {},
	colors: {
		primary: "#ff5e5e",
		secondary: "#545454",
		inactive: "#d7d7d7",
		success: "#3bdcd1",
		danger: "#ff5e5e",
		info: "#ad7cfc",
		text: {
			primary: "#545454",
			secondary: "#7c7c7c",
			success: "#fff",
			danger: "#ff5e5e",
		},
		button: {
			default: "linear-gradient(0deg, rgba(235,235,235,1) 0%, rgba(255,255,255,1) 100%)",
			next: "linear-gradient(0deg, rgba(56,56,56,1) 0%, rgba(97,97,97,1) 100%)",
		},
		background: {
			default: "#f3f3f3",
			backdrop: "#d7d7d7",
			header: "#fff",
			list: "#cbcbcb",
			badge: "#fff",
			podium: "#545454",
		},
		divider: "#d7d7d7",
		overlay: "rgba(0,0,0,0.5)",
		shadow: {
			default: (scale) => `0 ${2 * scale}px ${5 * scale}px 0 rgba(0, 0, 0, 0.2)`,
			blur: (scale) => `${5 * scale}px`,
			spread: "0",
			color: "rgba(0, 0, 0, 0.2)",
		},
		widget: "#ffffff",
		timeline: { path: "#bebebe", cleared: "#fff", text: "#545454" },
	},
	transition: {
		duration: 400,
		effect: "ease-in-out",
	},
	animation: {
		default: "4s linear infinite",
	},
	boxShadow: {
		default: (scale) => `0 ${2 * scale}px ${5 * scale}px 0 rgba(0, 0, 0, 0.2)`,
		large: (scale) => `0 0 ${10 * scale}px 0 rgba(0, 0, 0, 0.3)`,
		blur: (scale) => `${10 * scale}px`,
		spread: "0",
		color: "rgba(0, 0, 0, 0.2)",
	},
  gwen: {
	border: {
		default: (scale) => `${1 * scale}px solid #d7d7d7`,
		textInput: (scale) => `${1 * scale}px solid #7c7c7c`,
		width: (scale) => `${1 * scale}px`,
		style: "solid",
		color: "#ddd",
	  }
  }
}
const themes = [theme]
addDecorator(withThemesProvider(themes), ThemeProvider)

// export const parameters = {
// 	actions: { argTypesRegex: "^on[A-Z].*" },
// 	controls: {
// 		matchers: {
// 			color: /(background|color)$/i,
// 			date: /Date$/,
// 		},
// 	},
// }
