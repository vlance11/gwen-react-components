import React from "react"
import styled from "styled-components"

interface Props {
	teamPoints: number
	contribution: number
}

export function TeamContributionComponent({ teamPoints, contribution }: Props) {
	const percentage = ((contribution / teamPoints) * 100).toFixed(2)
	return (
		<Wrapper>
			Your contribution: {contribution} points <em>({percentage}%)</em>
		</Wrapper>
	)
}

const Wrapper = styled.div``
