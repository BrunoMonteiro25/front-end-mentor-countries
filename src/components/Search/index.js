import React from 'react'
import { InputContainer, InputText } from './style'
import { BsSearch } from 'react-icons/bs'

const Input = ({ type, placeholder }) => {
  return (
    <InputContainer>
      <BsSearch />
      <InputText type={type} placeholder={placeholder} />
    </InputContainer>
  )
}

export default Input
