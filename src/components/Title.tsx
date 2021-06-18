import { breakpoints, mediaQueries } from 'styles/responsive'

import styled from 'styled-components'
import { vars } from 'styles/vars'

const Heading = styled.h1`
	font-size: 15px;
	color: ${vars.basic_font_color};
	${mediaQueries.up(breakpoints.md)} {
		font-size: 20px;
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-left: 30px;
`

const Title = () => {
	return (
		<Wrapper>
			<Heading>Search Github repositories</Heading>
		</Wrapper>
	)
}

export default Title
