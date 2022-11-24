import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { AchievementTiers } from "../achievement/tiers"
import { AchievementSharer } from "./data/achievement/data"
import StorybookThemeProvider from "./theme/StorybookThemeProvider"
export default {
	title: "Achievement/Tiers",
	component: AchievementTiers,
} as ComponentMeta<typeof AchievementTiers>

const Template: ComponentStory<typeof AchievementTiers> = (args) => (
	<StorybookThemeProvider>
		<div
			style={{
				width: "calc(100% - 40px)",
				background: "#434343",
				padding: "20px",
			}}
		>
			<AchievementTiers {...args} />
		</div>
	</StorybookThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
	achievement: AchievementSharer,
	rewardIcons: {
		"1": "https://i.imgur.com/1JZ9Z9A.png",
		"2": "https://i.imgur.com/1JZ9Z9A.png",
	},
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//     label: "Button",
// }

// export const Large = Template.bind({})
// Large.args = {
//     size: "large",
//     label: "Button",
// }

// export const Small = Template.bind({})
// Small.args = {
//     size: "small",
//     label: "Button",
// }
