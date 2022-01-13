import React from "react"
import styled, { DefaultTheme } from "styled-components"
import { TeamData } from "../types"

interface Props {
	teamData: TeamData
	teamPoints: number
}

export function TeamProgressComponent({ teamData, teamPoints }: Props) {
	return (
		<Wrapper>
			<Icon size={80} src={teamData.imageUrl} alt="icon" />
			<Name>{teamData.name}</Name>
			<Description>{teamData.description}</Description>
			Team points: <strong>{teamPoints}</strong>
		</Wrapper>
	)
}

const Wrapper = styled.div``

interface SizeProps {
	theme: DefaultTheme
	size: number
}

const Icon = styled.img`
	display: block;
	width: ${({ theme, size }: SizeProps) => theme.proportions(size)}px;
	height: ${({ theme, size }: SizeProps) => theme.proportions(size)}px;
	object-fit: contain;
`

const Name = styled.div``

const Description = styled.div``
