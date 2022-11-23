import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import { AchievementTiers } from "../achievement/tiers"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Achievement/Tiers",
	component: AchievementTiers,
} as ComponentMeta<typeof AchievementTiers>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AchievementTiers> = (args) => <AchievementTiers {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	achievement: {
		id: "achievement-sharer",
		behaviorId: "achievement-sharer",
		tag: "social",
		description: "Share your achievements with your friends",
		icon: "https://static-assets-prod.epicgames.com/fortnite/static/fortnite-game/Content/Athena/Items/Cosmetics/Emotes/EID_ShareYourAchievements/EID_ShareYourAchievements.png",
		title: "Sharing is Caring <3",
		active: true,
		tiers: [
			{
				title: "First Time Sharer",
				description: "Share some love with your sifnificant other! Five time's is the charm!",
				amount: 5,
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
			{
				title: "Mega Sharer",
				description: "Everyone loves when you're a giver, share some love with everyone around you to gain some karma back! Ten time's the charm!",
				amount: 10,
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "coin", amount: 20 }],
			},
			{
				title: "Master of Sharing",
				description:
					"We all love sharing, and when you share it means that you care! And to become a master of sharing you need to keep it up in your everyday life. Spread som love and become a master of sharing!",
				amount: 25,
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [
					{ currency: "xp", amount: 500 },
					{ currency: "coin", amount: 50 },
				],
			},
		],
	},
	// example of Partial<Record<string, string>>'.
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
