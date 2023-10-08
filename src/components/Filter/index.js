import React, { useState } from 'react'
import {
  DropdownContainer,
  DropdownButton,
  DropdownOptions,
  Option,
} from './style'

import { IoIosArrowDown as IconArrowDown } from 'react-icons/io'

import { useTheme } from '@/contexts/ThemeContext'
import { useCountryContext } from '@/contexts/CountryContext'

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const { theme } = useTheme()
  const { setRegion } = useCountryContext()

  const options = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setRegion(option)
    setSelectedOption(option === 'All' ? null : option)
    setIsOpen(false)
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown} theme={theme}>
        {selectedOption || 'Filter by Region'}
        <IconArrowDown />
      </DropdownButton>
      {isOpen && (
        <DropdownOptions theme={theme}>
          {options.map((option) => (
            <Option
              key={option}
              onClick={() => handleOptionClick(option)}
              theme={theme}
            >
              {option}
            </Option>
          ))}
        </DropdownOptions>
      )}
    </DropdownContainer>
  )
}

export default Filter
