import {
  ContactForm,
  ContactMeContainer,
  ContactMeContent,
  MailImage,
} from './styles'

export function ContactMe() {
  return (
    <ContactMeContainer>
      <ContactMeContent>
        <MailImage>
          <img src="Mail-bro.svg" alt="" />
        </MailImage>

        <ContactForm
          action="https://formsubmit.co/rafaelheros80@gmail.com"
          method="POST"
        >
          <h1>Contact Form</h1>

          <label htmlFor="fname">Name/Company:</label>
          <input type="text" id="fname" name="fname" autoFocus required />
          <label htmlFor="lname">Email:</label>
          <input type="email" id="lname" name="lname" required />
          <label htmlFor="tname">Content:</label>
          <textarea id="tname" name="tname" rows={4} wrap="soft" required />

          <input
            type="hidden"
            name="_next"
            value="https://rafael-almeida.vercel.app/#/contact-me/email-sent"
          ></input>

          <input type="hidden" name="_template" value="box" />

          <button type="submit">Enviar</button>
        </ContactForm>
      </ContactMeContent>
    </ContactMeContainer>
  )
}
