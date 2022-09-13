import { EventHandler, FormEvent, useState } from 'react'
import {
  ContactForm,
  ContactMeContainer,
  ContactMeContent,
  MailImage,
} from './styles'

export function ContactMe() {
  const [isSubmiting, setIsSubmiting] = useState(false)

  function handleSubmit() {
    setIsSubmiting((state) => !state)
    const form = document.getElementById('theForm') as HTMLFormElement
    if (form) {
      form.submit()
    }
  }

  return (
    <ContactMeContainer>
      <ContactMeContent>
        <MailImage>
          <img src="Mail-bro.svg" alt="" />
        </MailImage>

        <ContactForm
          action="https://formsubmit.co/rafaelheros80@gmail.com"
          method="POST"
          id="theForm"
        >
          <h1>Contact Form</h1>

          <label htmlFor="fname">Name/Company:</label>
          <input
            required
            autoFocus
            id="fname"
            type="text"
            name="Name/Company"
          />
          <label htmlFor="lname">Email:</label>
          <input required id="lname" type="email" name="Email" />
          <label htmlFor="tname">Content:</label>
          <textarea name="Text" id="tname" rows={4} wrap="soft" required />

          <input
            name="_next"
            value="https://rafael-almeida.vercel.app/#/contact-me/email-sent"
            type="hidden"
          ></input>

          <input name="_template" value="box" type="hidden" />

          <button type="submit" onClick={handleSubmit} disabled={isSubmiting}>
            Enviar
          </button>
        </ContactForm>
      </ContactMeContent>
    </ContactMeContainer>
  )
}
