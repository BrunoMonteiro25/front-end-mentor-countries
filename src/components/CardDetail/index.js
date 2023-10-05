import React from 'react'
import {
  Container,
  TopSection,
  Details,
  Title,
  InformationsContainer,
  Informations,
  BottomDiv,
  Loading,
  LinkStyled,
} from './style'

import { useCountryContext } from '@/contexts/CountryContext'
import { useTheme } from '@/contexts/ThemeContext'

import Link from 'next/link'

const CardDetail = () => {
  const { selectedCountry, countries } = useCountryContext()
  const { theme } = useTheme()

  if (!selectedCountry || !countries.length) {
    return (
      <Loading>
        <div className="dot">.</div>
        <div className="dot">.</div>
        <div className="dot">.</div>
      </Loading>
    )
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
        <TopSection imageUrl={flags.svg} />

        <Details>
          <Title theme={theme}>
            <p>{name.common}</p>
          </Title>

          <InformationsContainer>
            <Informations theme={theme}>
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
                {population
                  ? population.toLocaleString('en-US')
                  : 'Not Available'}
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
            <Informations theme={theme}>
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
              <span style={{ color: theme === 'dark' ? '#fff' : '#0d1114' }}>
                Border Countries:
              </span>
              {borders && borders.length > 0 ? (
                borders.map((item, index) => {
                  const borderCountry = countries.find(
                    (country) => country.cca3 === item,
                  )
                  const borderCountryName = borderCountry
                    ? borderCountry.name.common
                    : item

                  return (
                    <LinkStyled
                      href={`/details/${item}`}
                      key={index}
                      theme={theme}
                    >
                      {borderCountryName}
                    </LinkStyled>
                  )
                })
              ) : (
                <p className="btn disabled">Not Available</p>
              )}
            </p>
          </BottomDiv>
        </Details>
      </Container>
    </>
  )
}

export default CardDetail
