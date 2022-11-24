export const AchievementSharer = {
	id: "achievement-sharer",
	behaviorId: "achievement-sharer",
	tags: ["social"],
	description: "Share your achievements with your friends",
	icons:
		"https://static-assets-prod.epicgames.com/fortnite/static/fortnite-game/Content/Athena/Items/Cosmetics/Emotes/EID_ShareYourAchievements/EID_ShareYourAchievements.png",
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
}

export const AchievementSuperGiver = {
	title: "Super Giver",
	tiers: [
		{
			amount: 10,
			progress: 6,
			icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
		},
	],
}

export const AchievementSharingIsCaring = {
	title: "Sharing is Caring <3",
	tiers: [
		{
			amount: 1,
			progress: 1,
			icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
			completed: new Date(),
		},
	],
}

export const AchievementFoodRun = {
	title: "Food Runner Supreme",
	tiers: [
		{
			amount: 3,
			progress: 2,
			icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
		},
	],
}

export const Achievements = [
	{
		title: "Super Giver",
		id: "super-giver",
		behaviorId: "super-giver",
		description: "Give away",
		active: true,
		tiers: [
			{
				amount: 10,
				title: "Super Giver",
				description: "Give away",
				progress: 6,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Sharing is Caring <3",
		id: "sharing-is-caring",
		behaviorId: "sharing-is-caring",
		description: "Share some love with your sifnificant other! Five time's is the charm!",
		active: true,
		tiers: [
			{
				amount: 1,
				title: "Sharing is Caring <3",
				description: "Share some love with your sifnificant other! Five time's is the charm!",
				progress: 1,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				completed: new Date(),
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Sweet Symphony",
		id: "sweet-symphony",
		behaviorId: "sweet-symphony",
		description: "Play some music for your friends and family",
		active: false,
		tiers: [
			{
				amount: 15,
				title: "Sweet Symphony",
				description: "Play some music for your friends and family",
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
				completed: new Date(),
			},
		],
	},
	{
		title: "Coding",
		id: "coding",
		behaviorId: "coding",
		description: "Code some stuff",
		active: true,
		tiers: [
			{
				amount: 5,
				title: "Coding",
				description: "Code some stuff",
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Spint the Bottle",
		id: "spint-the-bottle",
		behaviorId: "spint-the-bottle",
		description: "Play some music for your friends and family",
		active: true,
		tiers: [
			{
				amount: 5,
				title: "Spint the Bottle",
				description: "Play some music for your friends and family",
				progress: 4,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Food Run",
		id: "food-run",
		behaviorId: "food-run",
		description: "Run some food",
		active: true,
		tiers: [
			{
				amount: 3,
				title: "Food Run",
				description: "Run some food",
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				completed: new Date(),
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Poke a Bear",
		id: "poke-a-bear",
		behaviorId: "poke-a-bear",
		description: "Poke a bear",
		active: true,
		tiers: [
			{
				amount: 1,
				title: "Poke a Bear",
				description: "Poke a bear",
				progress: 0,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
]
export const AchievementsWithoutCompleted = [
	{
		title: "Super Giver",
		id: "super-giver",
		behaviorId: "super-giver",
		description: "Give away",
		active: true,
		tiers: [
			{
				amount: 10,
				title: "Super Giver",
				description: "Give away",
				progress: 6,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Sharing is Caring <3",
		id: "sharing-is-caring",
		behaviorId: "sharing-is-caring",
		description: "Share some love with your sifnificant other! Five time's is the charm!",
		active: true,
		tiers: [
			{
				amount: 1,
				title: "Sharing is Caring <3",
				description: "Share some love with your sifnificant other! Five time's is the charm!",
				progress: 1,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Sweet Symphony",
		id: "sweet-symphony",
		behaviorId: "sweet-symphony",
		description: "Play some music for your friends and family",
		active: false,
		tiers: [
			{
				amount: 15,
				title: "Sweet Symphony",
				description: "Play some music for your friends and family",
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Coding",
		id: "coding",
		behaviorId: "coding",
		description: "Code some stuff",
		active: true,
		tiers: [
			{
				amount: 5,
				title: "Coding",
				description: "Code some stuff",
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Spint the Bottle",
		id: "spint-the-bottle",
		behaviorId: "spint-the-bottle",
		description: "Play some music for your friends and family",
		active: true,
		tiers: [
			{
				amount: 5,
				title: "Spint the Bottle",
				description: "Play some music for your friends and family",
				progress: 4,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Food Run",
		id: "food-run",
		behaviorId: "food-run",
		description: "Run some food",
		active: true,
		tiers: [
			{
				amount: 3,
				title: "Food Run",
				description: "Run some food",
				progress: 3,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
	{
		title: "Poke a Bear",
		id: "poke-a-bear",
		behaviorId: "poke-a-bear",
		description: "Poke a bear",
		active: true,
		tiers: [
			{
				amount: 1,
				title: "Poke a Bear",
				description: "Poke a bear",
				progress: 0,
				icon: "https://gwen.insertcoin.se/widget/images/action-icons/FallbackPlaceholder.svg",
				rewards: [{ currency: "xp", amount: 100 }],
			},
		],
	},
]
