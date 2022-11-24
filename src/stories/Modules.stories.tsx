import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { AchievementModule } from "../achievement/module"
import { Achievements, AchievementsWithoutCompleted } from "./data/achievement/data"
import StorybookThemeProvider from "./theme/StorybookThemeProvider"

export default {
	title: "Achievement/Modules",
	component: AchievementModule,
} as ComponentMeta<typeof AchievementModule>

const achievements = Achievements

const Template: ComponentStory<typeof AchievementModule> = (args) => (
	<StorybookThemeProvider>
		<div
			style={{
				width: "550px",
				maxWidth: "550px",
				height: "650px",
				margin: "auto",
			}}
		>
			<AchievementModule {...args} />
		</div>
	</StorybookThemeProvider>
)

export const WithCheckMark = Template.bind({})
WithCheckMark.args = {
	translations: {
		moduleName: "Achievement",
		details: "Details",
		done: "Done",
		rewards: "Rewards",
		experience: "Experience",
		coins: "Coins",
	},
	achievements,
	scale: 1,
	open: (achievement) => console.log(achievement),
}

export const WithoutCheckMark = Template.bind({})
WithoutCheckMark.args = {
	translations: {
		moduleName: "Achievement",
		details: "Details",
		done: "Done",
		rewards: "Rewards",
		experience: "Experience",
		coins: "Coins",
	},
	achievements: AchievementsWithoutCompleted,
	scale: 1,
	open: (achievement) => console.log(achievement),
}
