import React from 'react'
import {
  Container,
  TopSection,
  Details,
  Title,
  InformationsContainer,
  Informations,
  BottomDiv,
} from './style'
import Image from 'next/image'

import { useCountryContext } from '@/contexts/CountryContext'

const CardDetail = () => {
  const { selectedCountry } = useCountryContext()

  // selectedCountry não é nulo antes de acessar suas propriedades
  if (!selectedCountry) {
    return <div>Loading...</div> // quando não houver um país selecionado
  }

  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,
    borders,
  } = selectedCountry

  return (
    <>
      <Container>
        {/* <Image src={flags.svg} width={560} height={401} alt={name.common} /> */}
        <TopSection imageUrl={flags.svg} />

        <Details>
          <Title>
            <p>{name.common}</p>
          </Title>

          <InformationsContainer>
            <Informations>
              <p>
                <span>Native Name: </span>
                {name.nativeName && Object.keys(name.nativeName).length > 0
                  ? Object.keys(name.nativeName).map((languageCode) => (
                      <span style={{ fontWeight: '300' }} key={languageCode}>
                        {name.nativeName[languageCode].official ||
                          name.nativeName[languageCode].common}
                        {languageCode !==
                        Object.keys(name.nativeName)[
                          Object.keys(name.nativeName).length - 1
                        ]
                          ? ', '
                          : ''}
                      </span>
                    ))
                  : 'Not Available'}
              </p>
              <p>
                <span>Population: </span>
                {population ? population : 'Not Available'}
              </p>
              <p>
                <span>Region: </span>
                {region ? region : 'Not Available'}
              </p>
              <p>
                <span>Sub Region: </span>
                {subregion ? subregion : 'Not Available'}
              </p>
              <p>
                <span>Capital: </span>
                {capital ? capital : 'Not Available'}
              </p>
            </Informations>
            <Informations>
              <p>
                <span>Top Level Domain: </span>
                {tld ? tld : 'Not Available'}
              </p>
              <p>
                <span>Currencies: </span>
                {currencies && Object.keys(currencies).length > 0
                  ? Object.keys(currencies).map((currencyCode) => (
                      <span style={{ fontWeight: '300' }} key={currencyCode}>
                        {currencies[currencyCode].name}
                        {currencyCode !==
                        Object.keys(currencies)[
                          Object.keys(currencies).length - 1
                        ]
                          ? ', '
                          : ''}
                      </span>
                    ))
                  : 'Not Available'}
              </p>
              <p>
                <span>Languages: </span>
                {languages && Object.keys(languages).length > 0
                  ? Object.keys(languages).map((languageCode) => (
                      <span style={{ fontWeight: '300' }} key={languageCode}>
                        {languages[languageCode]}
                        {languageCode !==
                        Object.keys(languages)[
                          Object.keys(languages).length - 1
                        ]
                          ? ', '
                          : ''}
                      </span>
                    ))
                  : 'Not Available'}
              </p>
            </Informations>
          </InformationsContainer>

          <BottomDiv>
            <p className="text">
              <span>Border Countries: </span>
              {borders && borders.length > 0 ? (
                borders.map((item, index) => (
                  <p key={index} className="btn">
                    {item}
                  </p>
                ))
              ) : (
                <p className="btn">Not Available</p>
              )}
            </p>
          </BottomDiv>
        </Details>
      </Container>
    </>
  )
}

export default CardDetail
