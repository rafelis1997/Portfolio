import {
  ContactForm,
  ContactMeContainer,
  ContactMeContent,
  MailImage,
} from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

interface Inputs {
  nameCompany: string
  email: string
  text: string
  _next: string
  _template: string
}

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
          <textarea name="content" id="tname" rows={4} wrap="soft" required />

          <input
            name="_next"
            value="https://rafael-almeida.vercel.app/#/contact-me/email-sent"
            type="hidden"
          ></input>

          <input name="_template" value="box" type="hidden" />

          <button type="submit">Enviar</button>
        </ContactForm>
      </ContactMeContent>
    </ContactMeContainer>
  )
}
