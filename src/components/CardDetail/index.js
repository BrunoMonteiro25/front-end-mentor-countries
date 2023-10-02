import React from 'react'
import {
  Container,
  Details,
  Title,
  InformationsContainer,
  Informations,
  BottomDiv,
} from './style'
import Image from 'next/image'

const CardDetail = () => {
  return (
    <>
      <Container>
        <Image
          src="https://flagcdn.com/de.svg"
          width={560}
          height={401}
          alt="img"
        />

        <Details>
          <Title>
            <p>Belgium</p>
          </Title>

          <InformationsContainer>
            <Informations>
              <p>
                <span>Native Name: </span>Belgie
              </p>
              <p>
                <span>Population: </span>11,222,222
              </p>
              <p>
                <span>Region: </span>Europe
              </p>
              <p>
                <span>Sub Region: </span>Western Europe
              </p>
              <p>
                <span>Capital: </span>Brussels
              </p>
            </Informations>
            <Informations>
              <p>
                <span>Top Level Domain: </span>.be
              </p>
              <p>
                <span>Currencies: </span>Euro
              </p>
              <p>
                <span>Languages </span>Dutch, French, German
              </p>
            </Informations>
          </InformationsContainer>

          <BottomDiv>
            <p className="text">
              <span>Border Countries: </span>
              <p className="btn">France</p>
              <p className="btn">Germany</p>
              <p className="btn">Netherlands</p>
            </p>
          </BottomDiv>
        </Details>
      </Container>
    </>
  )
}

export default CardDetail
