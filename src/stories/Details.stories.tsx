import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { AchievementDetails } from "../achievement/details"
import { AchievementSharer } from "./data/achievement/data"
import StorybookThemeProvider from "./theme/StorybookThemeProvider"

export default {
	title: "Achievement/Details",
	component: AchievementDetails,
} as ComponentMeta<typeof AchievementDetails>

const Template: ComponentStory<typeof AchievementDetails> = (args) => (
	<StorybookThemeProvider>
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				height: "700px",
			}}
		>
			<div
				style={{
					width: "400px",
					height: "550px",
					background: "#fff",
					borderRadius: "10px",
					boxShadow: "0px 4px 6px 6px rgba(0, 0, 0, 0.25)",
					display: "flex",
				}}
			>
				<AchievementDetails {...args} />
			</div>
		</div>
	</StorybookThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
	translations: {
		moduleName: "Achievement",
		details: "Details",
		done: "Done",
		rewards: "Rewards",
		experience: "Experience",
		coins: "Coins",
	},
	data: AchievementSharer,
}
