import type { ReactNode } from "react"
import Nav from "../elements/Nav/Nav"

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
export default MainLayout