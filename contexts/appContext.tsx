'use client'

import { Dispatch, createContext } from 'react'
import { useAppReducer } from '@/hooks/useAppReducer'

export const AppStateContext = createContext<CoreApplicationState | null>(null)

export const AppStateDispatchContext =
  createContext<Dispatch<CoreApplicationActions> | null>(null)

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useAppReducer()
  return (
    <AppStateContext.Provider value={state}>
      <AppStateDispatchContext.Provider value={dispatch}>
        {children}
      </AppStateDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}
