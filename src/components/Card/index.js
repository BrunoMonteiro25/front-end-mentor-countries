import React from 'react'
import {
  Container,
  TopSection,
  BottomSection,
  Title,
  Details,
  LinkStyled,
} from './style'

import Image from 'next/image'

import { useCountryContext } from '@/contexts/CountryContext'

const Card = ({ item }) => {
  const { setCountry } = useCountryContext()

  const srcImage = item.flags.svg

  const handleCardClick = () => {
    setCountry(item)
  }

  return (
    <Container>
      <LinkStyled href="/details" onClick={handleCardClick}>
        <TopSection>
          <Image
            src={srcImage}
            alt={item.name.common}
            width={264}
            height={160}
          />
        </TopSection>

        <BottomSection>
          <Title>{item.name.common}</Title>
          <Details>
            <span>Population:</span> {item.population}
          </Details>
          <Details>
            <span>Region:</span> {item.region}
          </Details>
          <Details>
            <span>Capital:</span> {item.capital}
          </Details>
        </BottomSection>
      </LinkStyled>
    </Container>
  )
}

export default Card
