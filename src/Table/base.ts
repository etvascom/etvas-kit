import { createContext } from 'react'

import bodyStyles from './Body.styles'
import cellStyles from './Cell.styles'
import headerStyles from './Header.styles'
import rowStyles from './Row.styles'

interface TableContextProps {
  mode:
    | keyof typeof bodyStyles
    | keyof typeof cellStyles
    | typeof headerStyles
    | typeof rowStyles
  setHeaderCell: (idx: number, content: any) => void
  cells: any[]
  verticalBreakpointDisplay: boolean
}

export const TableContext = createContext<TableContextProps>({
  mode: 'web',
  setHeaderCell: (idx: number, content: any) => {},
  cells: [],
  verticalBreakpointDisplay: false
})

export const HeaderContext = createContext<any>(null)
