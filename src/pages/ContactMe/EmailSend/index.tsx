import {
  ContactMeContainer,
  ContactMeContent,
  MailImage,
  ContactThanks,
} from './styles'

export function EmailSent() {
  return (
    <ContactMeContainer>
      <ContactMeContent>
        <MailImage>
          <img src="../../../Mail-bro.svg" alt="" />
        </MailImage>

        <ContactThanks>
          <h1>Email Sent!</h1>

          <span>I will respond to you as soon as I can</span>

          <img src="../../../Mail-sent-bro.svg" alt="" />
        </ContactThanks>
      </ContactMeContent>
    </ContactMeContainer>
  )
}
