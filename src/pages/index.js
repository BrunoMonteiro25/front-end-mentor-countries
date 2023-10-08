import Head from 'next/head'

import Header from '@/components/Header'
import Input from '@/components/Search'
import Card from '@/components/Card'
import Filter from '@/components/Filter'

import styled from 'styled-components'

import { useCountryContext } from '@/contexts/CountryContext'

const Container = styled.div`
  max-width: 1300px;
  /* max-width: 1460px; */
  margin: 50px auto;
  padding: 0px 10px;
  /* border: 1px solid black; */
`

const SearchAndFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const CardContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-wrap: wrap;
  gap: 74px;
  margin-top: 50px;
  width: 100%;

  @media (max-width: 1297px) {
    justify-content: space-evenly;
    gap: 50px;
  }

  @media (max-width: 1225px) {
    justify-content: space-evenly;
    gap: 40px;
  }
`

export default function Home() {
  const {
    countries,
    setSearchQuery,
    searchQuery,
    selectedRegion,
  } = useCountryContext()

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const filteredCountries = countries.filter(
    (country) =>
      (country.name.common
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase()) ||
        searchQuery.trim() === '') &&
      (!selectedRegion ||
        selectedRegion === 'All' ||
        country.region === selectedRegion),
  )

  return (
    <>
      <Head>
        <title>Countries</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container>
        <SearchAndFilterContainer>
          <Input
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          {searchQuery.trim() === '' && <Filter />}
        </SearchAndFilterContainer>

        {filteredCountries.length > 0 ? (
          <CardContainer>
            {filteredCountries.map((country, index) => (
              <Card key={index} item={country} />
            ))}
          </CardContainer>
        ) : (
          <p style={{ color: '#ff0000', marginTop: '20px' }}>
            {`No results found for: ${searchQuery}`}
          </p>
        )}
      </Container>
    </>
  )
}
