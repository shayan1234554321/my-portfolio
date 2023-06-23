import { styled } from "styled-components"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import { colors } from "../utilities/common"
import Menu from "../layout/menu.jsx"

const Main = styled.div`
  background-color: ${colors.background};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`

export default function Home() {
  return (
    <Main>
      <Menu />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Main>
  )
}
