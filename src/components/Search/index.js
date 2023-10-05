import React from 'react'
import { InputContainer, InputText } from './style'
import { BsSearch } from 'react-icons/bs'
import { useTheme } from '@/contexts/ThemeContext'

const Input = ({ type, placeholder }) => {
  const { theme } = useTheme()

  return (
    <InputContainer theme={theme}>
      <BsSearch theme={theme} />
      <InputText type={type} placeholder={placeholder} theme={theme} />
    </InputContainer>
  )
}

export default Input
