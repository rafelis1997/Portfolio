import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'
import { HeaderContainer, HeaderInner } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        <h1>Rafael Almeida</h1>

        <nav>
          <a>Home</a>
          <a>About Me</a>
          <a>Portfolio</a>
          <a>Contact</a>
          <div>
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
        </nav>
      </HeaderInner>
    </HeaderContainer>
  )
}
