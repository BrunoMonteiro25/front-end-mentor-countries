import React, { useEffect } from 'react'
import { InputContainer, InputText } from './style'
import { BsSearch } from 'react-icons/bs'
import { useTheme } from '@/contexts/ThemeContext'

import { useCountryContext } from '@/contexts/CountryContext'

const Input = ({ type, placeholder }) => {
  const { theme } = useTheme()
  const { fetchData, setSearchQuery, searchQuery } = useCountryContext()

  useEffect(() => {
    fetchData()
  }, [fetchData])

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
