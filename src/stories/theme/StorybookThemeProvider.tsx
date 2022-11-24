import React from "react"
import { ThemeProvider } from "styled-components"
import { GwenTheme } from "../../theme/theme"

interface Props {
	children?: JSX.Element | JSX.Element[]
	scale?: number
}

const StorybookThemeProvider = ({ children }: Props) => {
	return (
		<ThemeProvider theme={{ gwen: GwenTheme.gwen, proportions: (times: number, manualScale?: number) => times * (manualScale || 1), scale: 1 }}>
			{children}
		</ThemeProvider>
	)
}

export default StorybookThemeProvider
