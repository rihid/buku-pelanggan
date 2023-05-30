import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [searchField, setSearchField] = useState('');
  const [isActive, setActive] = useState(true)

  const value = {
    searchField,
    setSearchField,
    isActive,
    setActive,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}