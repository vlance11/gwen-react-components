import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { AchievementBox } from "../achievement/box"
import { Achievements } from "./data/achievement/data"
import StorybookThemeProvider from "./theme/StorybookThemeProvider"
export default {
	title: "Achievement/Box",
	component: AchievementBox,
} as ComponentMeta<typeof AchievementBox>

const Template: ComponentStory<typeof AchievementBox> = (args) => (
	<StorybookThemeProvider>
		<div style={{ display: "flex", justifyContent: "space-evenly" }}>
			<div style={{ width: "170px", display: "flex", justifyContent: "center" }}>
				<AchievementBox {...args} />
			</div>
		</div>
	</StorybookThemeProvider>
)

const TemplateMultiple: ComponentStory<typeof AchievementBox> = (args) => (
	<StorybookThemeProvider>
		<div style={{ display: "flex", justifyContent: "space-evenly" }}>
			<div style={{ width: "170px", display: "flex", justifyContent: "center" }}>
				<AchievementBox {...args} />
			</div>
			<div style={{ width: "170px", display: "flex", justifyContent: "center" }}>
				<AchievementBox {...args} />
			</div>
			<div style={{ width: "170px", display: "flex", justifyContent: "center" }}>
				<AchievementBox {...args} />
			</div>
		</div>
	</StorybookThemeProvider>
)

export const Single = Template.bind({})
Single.args = {
	data: Achievements[0],
	openDetails: (achievement: any) => console.log(achievement),
}

export const Multiple = TemplateMultiple.bind({})
Multiple.args = {
	data: Achievements[3],
	openDetails: (achievement: any) => console.log(achievement),
}
