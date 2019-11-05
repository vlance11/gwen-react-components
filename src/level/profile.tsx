import React from "react"
import styled from "styled-components"
import { Rewards } from "../components/reward"
import { LevelAvatarData, LevelData } from "../types/level"
import { LevelCircle } from "./level-circle"
import { LevelTranslation } from "./translations"

export interface ProfileProps {
	translations: LevelTranslation
	data?: LevelData
	avatar?: LevelAvatarData
	selectAvatar?: () => void
	scale: number
}

export class Profile extends React.PureComponent<ProfileProps> {
	render() {
		const { data } = { ...this.props }
		const { translations } = this.props
		return (
			<Wrapper>
				<LevelWrapper>
					<LevelCircle
						translations={translations}
						data={data}
						avatar={this.props.avatar}
						selectAvatar={this.props.selectAvatar}
						size={this.props.scale * 160}
					/>
				</LevelWrapper>
				<hr />
				<SecondaryText>{translations.xpUntilNextLevel}</SecondaryText>
				<ExperienceLeft>{data ? data.levelXp - data.currentXp : ""}</ExperienceLeft>
				{data && data.rewards.length > 0 && <Rewards rewards={data.rewards} rewardsTranslation={translations.rewards} size={this.props.scale * 80} />}
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const LevelWrapper = styled.div`
	margin-top: 10%;
`
const SecondaryText = styled.div`
	font-size: ${(p) => p.theme.proportions(18)}px;
	line-height: ${(p) => p.theme.proportions(24)}px;
	color: ${(p) => p.theme.gwen.colors.text.secondary};
	font-weight: bold;
	padding: 0 ${(p) => p.theme.proportions(20)}px;
	margin-top: -${(p) => p.theme.proportions(4)}px;
`
const ExperienceLeft = styled.div`
	font-size: ${(p) => p.theme.proportions(28)}px;
	line-height: ${(p) => p.theme.proportions(28)}px;
	margin-top: ${(p) => p.theme.proportions(8)}px;
	font-weight: bold;
`