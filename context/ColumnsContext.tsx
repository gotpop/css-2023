import { createContext, useState } from 'react'

const ColumnContext = createContext(null)

export function ColumnProvider({ children }) {
  const [layout, setColumns] = useState({ columns: 1 })
  const goSetColumns = value => setColumns(value)

  return (
    <ColumnContext.Provider value={{ layout, goSetColumns }}>
      {children}
    </ColumnContext.Provider>
  )
}

export default ColumnContext
