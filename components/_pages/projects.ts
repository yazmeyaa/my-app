import { fluidTypography } from '@utils/fluidTypography'
import styled from 'styled-components'

export const PageContainer = styled.section`
&{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}`

export const CardsContainer = styled.div`
    &{ 
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: space-evenly;
    }
`

export const Title = styled.h1`
    &{
        font-size: ${fluidTypography(480, 1440, 18, 22)};
        align-self: center;
    }
`

export const PageDescription = styled.p`
&{
    align-self: center;
    color: #909090;
    font-size: ${fluidTypography(480, 1440, 14, 18)};
    line-height: 1.3;
}`