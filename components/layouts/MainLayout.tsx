import type { ReactNode } from "react"
import MainContainer from "../elements/MainContainer/MainContainer"
import Nav from "../elements/Nav/Nav"

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Nav />
      <MainContainer>
        {children}
      </MainContainer>
    </>
  )
}
export default MainLayout