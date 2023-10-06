import React, { useEffect } from 'react'
import { InputContainer, InputText } from './style'
import { BsSearch } from 'react-icons/bs'
import { useTheme } from '@/contexts/ThemeContext'

import { useCountryContext } from '@/contexts/CountryContext'

const Input = ({ type, placeholder }) => {
  const { theme } = useTheme()
  const {
    searchCountry,
    fetchData,
    searchQuery,
    setSearchQuery,
  } = useCountryContext()

  useEffect(() => {
    if (searchQuery.trim() === '') {
      fetchData()
    } else {
      searchCountry(searchQuery)
    }
  }, [searchQuery, fetchData, searchCountry])

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <InputContainer theme={theme}>
      <BsSearch theme={theme} />
      <InputText
        type={type}
        placeholder={placeholder}
        theme={theme}
        value={searchQuery}
        onChange={handleInputChange}
      />
    </InputContainer>
  )
}

export default Input
