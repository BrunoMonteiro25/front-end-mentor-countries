import React from 'react'
import {
  CardContainer,
  TopSection,
  BottomSection,
  Title,
  Details,
} from './style'
import Image from 'next/image'

const Card = () => {
  return (
    <CardContainer>
      <TopSection>
        <Image
          src="https://flagcdn.com/de.svg"
          alt="Germany Flag"
          width={264}
          height={160}
        />
      </TopSection>

      <BottomSection>
        <Title>Germany</Title>
        <Details>
          <span>Population:</span> 10.000.000
        </Details>
        <Details>
          <span>Region:</span> Europe
        </Details>
        <Details>
          <span>Capital:</span> Berlin
        </Details>
      </BottomSection>
    </CardContainer>
  )
}

export default Card
