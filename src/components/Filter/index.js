import React, { useState } from 'react'
import {
  DropdownContainer,
  DropdownButton,
  DropdownOptions,
  Option,
} from './style'

import { IoIosArrowDown as IconArrowDown } from 'react-icons/io'

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selectedOption || 'Filter by Region'}
        <IconArrowDown />
      </DropdownButton>
      {isOpen && (
        <DropdownOptions>
          {options.map((option) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </DropdownOptions>
      )}
    </DropdownContainer>
  )
}

export default Filter
