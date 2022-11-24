import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../../theme/global"
import { GwenTheme } from "../../theme/theme"
interface Props {
	children?: JSX.Element | JSX.Element[]
	scale?: number
}

const StorybookThemeProvider = ({ children }: Props) => {
	const GS = GlobalStyle()
	return (
		<ThemeProvider theme={{ gwen: GwenTheme.gwen, proportions: (times: number, manualScale?: number) => times * (manualScale || 1), scale: 1 }}>
			<GS />
			{children}
		</ThemeProvider>
	)
}

export default StorybookThemeProvider
