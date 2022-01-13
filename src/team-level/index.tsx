import React from "react"
import styled from "styled-components"
import { TeamData } from "../types"
import { TeamContributionComponent } from "./contribution"
import { TeamProgressComponent } from "./progress"
import { TeamSelectorComponent } from "./selector"

interface Props {
	data: TeamData
	teamPoints: number
	contribution: number
	scale?: number
}

export function TeamComponent({ data, teamPoints, contribution, scale }: Props) {
	return (
		<Wrapper>
			<TeamSelectorComponent />
			<TeamProgressComponent teamData={data} teamPoints={teamPoints} />
			<TeamContributionComponent teamPoints={teamPoints} contribution={contribution} />
		</Wrapper>
	)
}

const Wrapper = styled.div``
