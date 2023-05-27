import React, { createContext, useState } from 'react'

export const Context = createContext()

export const Provider = ({ children }) => {
  const [searchField, setSearchField] = useState('')

  const value = {
    searchField,
    setSearchField,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}