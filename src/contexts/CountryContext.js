import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const CountryContext = createContext()

export const useCountryContext = () => {
  return useContext(CountryContext)
}

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
      } catch (error) {
        console.error('Erro ao fazer a solicitação:', error.message)
        setCountries([])
      }
    }

    fetchData()
  }, [])

  const setCountry = (country) => {
    setSelectedCountry(country)
  }

  return (
    <CountryContext.Provider value={{ countries, selectedCountry, setCountry }}>
      {children}
    </CountryContext.Provider>
  )
}
