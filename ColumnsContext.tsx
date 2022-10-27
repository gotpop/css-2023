import { createContext, useState } from 'react'

const ColumnContext = createContext(null)

export function ColumnProvider({ children }) {
  const [columns, setColumns] = useState({ columns: 1 })

  const weSetState = value => setColumns(value)

  return (
    <ColumnContext.Provider value={{ columns, weSetState }}>
      {children}
    </ColumnContext.Provider>
  )
}

export default ColumnContext
