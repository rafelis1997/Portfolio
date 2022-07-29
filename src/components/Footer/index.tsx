import { GithubLogo, TwitterLogo, LinkedinLogo } from 'phosphor-react'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h1>Contact</h1>
      <div className="footerItemsContainer">
        <span>Email: rafaelheros80@gmail.com</span>
        <div className="socialMediaFooter">
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
      <span>@Copyright, all rights reserved to Rafael H. de Almeida</span>
    </FooterContainer>
  )
}
