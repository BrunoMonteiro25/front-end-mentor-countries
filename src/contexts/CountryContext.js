import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const CountryContext = createContext()

export const useCountryContext = () => {
  return useContext(CountryContext)
}

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const fetchData = async () => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      setCountries(response.data)
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error.message)
      setCountries([])
    }
  }

  useEffect(() => {
    fetchData()

    // Carregar país selecionado do localStorage ao inicializar
    const savedCountry = JSON.parse(localStorage.getItem('selectedCountry'))
    if (savedCountry) {
      setSelectedCountry(savedCountry)
    }
  }, [])

  const setCountry = (country) => {
    // Salvar país selecionado no localStorage
    localStorage.setItem('selectedCountry', JSON.stringify(country))
    setSelectedCountry(country)
  }

  const searchCountry = async (query) => {
    setSearchQuery(query)

    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${query}`,
      )

      setCountries(response.data)
    } catch (error) {
      console.error('Erro ao fazer a solicitação de pesquisa:', error.message)
      setCountries([])
    }
  }

  return (
    <CountryContext.Provider
      value={{
        countries,
        selectedCountry,
        setCountry,
        searchCountry,
        fetchData,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}
