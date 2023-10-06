import React, { useEffect } from 'react'

import styled from 'styled-components'

import Link from 'next/link'
import Header from '@/components/Header'

import { BsArrowLeftShort as IconArrow } from 'react-icons/bs'
import CardDetail from '@/components/CardDetail'
import { useRouter } from 'next/router'
import { useCountryContext } from '@/contexts/CountryContext'
import Head from 'next/head'

import { useTheme } from '@/contexts/ThemeContext'

const Container = styled.div`
  max-width: 1300px;
  margin: 50px auto;
  padding: 0px 10px;
  /* border: 1px solid blue; */
`

const LinkStyled = styled(Link)`
  color: ${(props) => (props.theme === 'dark' ? '#fff' : '#0d1114')};
  display: flex;
  align-items: center;
  width: 136px;
  padding: 9px 0px;
  gap: 4px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.theme === 'light' ? '#fff' : '#2B3743'};

  svg {
    width: 25px;
    height: 25px;
    margin-left: 30px;
  }
`

const Details = () => {
  const router = useRouter()
  const { id } = router.query
  const {
    countries,
    setCountry,
    selectedCountry,
    fetchData,
  } = useCountryContext()

  const { theme } = useTheme()

  useEffect(() => {
    if (id) {
      const countryData = countries.find((country) => country.cca3 === id)

      if (!countryData) {
        // Se o país não estiver nos dados carregados, recarregue os dados
        fetchData()
      } else {
        setCountry(countryData)
      }
    }
  }, [id, countries, setCountry, fetchData])

  return (
    <>
      <Head>
        <title>{selectedCountry?.name.common} | Countries</title>
        <link rel="icon" href={selectedCountry?.flags.svg} />
      </Head>
      <Header />

      <Container>
        <LinkStyled href="/" theme={theme}>
          <IconArrow />
          Back
        </LinkStyled>

        <CardDetail />
      </Container>
    </>
  )
}

export default Details
