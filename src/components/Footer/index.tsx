import {
  GithubLogo,
  TwitterLogo,
  LinkedinLogo,
  SuitcaseSimple,
} from 'phosphor-react'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h1>Contact</h1>
      <div className="footerItemsContainer">
        <span>Email: rafaelheros80@gmail.com</span>
        <div className="socialMediaFooter">
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
      <span>@Copyright, all rights reserved to Rafael H. de Almeida</span>
    </FooterContainer>
  )
}
