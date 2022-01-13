export interface TeamData {
	readonly id: string
	name: string
	description: string
	imageUrl: string
}

export interface TeamLevelData {
	readonly teamId: string
	xpGainedAllTime: number
}

export interface TeamLevelUserData extends TeamLevelData {
	xpContribution: number
}

export type TeamState = Pick<TeamLevelUserData, "teamId" | "xpContribution">
