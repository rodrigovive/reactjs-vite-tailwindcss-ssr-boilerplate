// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import * as React from 'react'
import { useContext } from 'react'
import type { PageContext } from './types'

export { PageContextProvider }
export { usePageContext }

const Context = React.createContext<PageContext>(
  undefined as unknown as PageContext
)

function PageContextProvider({
  pageContext,
  children
}: {
  pageContext: PageContext
  children: React.ReactNode
}) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext() {
  const pageContext = useContext(Context)
  return pageContext
}
