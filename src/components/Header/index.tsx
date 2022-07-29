import { GithubLogo, LinkedinLogo, TwitterLogo, List, X } from 'phosphor-react'
import { useState } from 'react'
import { HeaderContainer, HeaderInner, NavMenu } from './styles'

export function Header() {
  const [active, setActive] = useState(false)

  function handleNavMenuActive() {
    setActive(!active)
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
              <a>Home</a>
              <a>About Me</a>
              <a>Portfolio</a>
              <a>Contact</a>
              <div className="socialMedia">
                <a>
                  <GithubLogo size={32} />
                </a>

                <a>
                  <TwitterLogo size={32} />
                </a>

                <a>
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
