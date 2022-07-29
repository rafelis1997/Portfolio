import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  List,
  X,
  SuitcaseSimple,
} from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer, HeaderInner, NavMenu } from './styles'

export function Header() {
  const [active, setActive] = useState(false)

  function handleNavMenuActive() {
    setActive(!active)
  }

  function handleNavigation(sectionName: string) {
    const section = document.querySelector(`#${sectionName}`)
    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <HeaderContainer>
      <HeaderInner>
        <h1>Rafael Almeida</h1>

        <NavMenu className="navContainer" active={active}>
          <nav>
            <a className="sandwichContainer" onClick={handleNavMenuActive}>
              {active ? <X size={32} /> : <List size={32} />}
            </a>

            <div className="menuItems">
              <a onClick={() => handleNavigation('home')}>Home</a>
              <a onClick={() => handleNavigation('about')}>About Me</a>
              <a onClick={() => handleNavigation('projects')}>Portfolio</a>
              <a
                href="https://www.fiverr.com/rafelis"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
              <div className="socialMedia">
                <a
                  href="https://github.com/rafelis1997/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubLogo size={32} />
                </a>

                <a
                  href="https://www.fiverr.com/rafelis"
                  target="_blank"
                  rel="noreferrer"
                >
                  <SuitcaseSimple size={32} />
                </a>

                <a
                  href="https://www.linkedin.com/in/rafael-heros-almeida/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo size={32} />
                </a>
              </div>
            </div>
          </nav>
        </NavMenu>
      </HeaderInner>
    </HeaderContainer>
  )
}
