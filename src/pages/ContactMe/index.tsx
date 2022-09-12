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
  //   text: string
  _next: string
  _template: string
}

export function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>()

  const contactFormSubmit: SubmitHandler<Inputs> = (data, e) => {
    fetch('https://formsubmit.co/ajax/rafaelheros80@gmail.com', {
      method: 'POST',
      mode: 'no-cors',

      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: 'FormSubmit',
        message: "I'm from Devro LABS",
        // eslint-disable-next-line prettier/prettier
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      // eslint-disable-next-line prettier/prettier
      .catch((error) => console.log(error));

    // const headers = {
    //   'Content-Type': 'text/plain',
    // }

    // await axios.post('https://formsubmit.co/rafaelheros80@gmail.com', {
    //   ...data,
    //   headers,
    // })
    // axios.defaults.headers.post['Content-Type'] = 'application/json'
    // axios
    //   .post('https://formsubmit.co/ajax/rafaelheros80@gmail.com', {
    //     name: 'FormSubmit',
    //     message: "I'm from Devro LABS",
    //   })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error))
    // console.log(data)
  }

  return (
    <ContactMeContainer>
      <ContactMeContent>
        <MailImage>
          <img src="Mail-bro.svg" alt="" />
        </MailImage>

        <ContactForm onSubmit={handleSubmit(contactFormSubmit)}>
          <h1>Contact Form</h1>

          <label htmlFor="fname">Name/Company:</label>
          <input
            {...register('nameCompany', {
              required: true,
            })}
            autoFocus
            id="fname"
            type="text"
          />
          <label htmlFor="lname">Email:</label>
          <input
            {...register('email', {
              required: true,
            })}
            id="lname"
            type="email"
          />
          {/* <label htmlFor="tname">Content:</label>
          <textarea
            {...register('text', {
              required: true,
            })}
            id="tname"
            rows={4}
            wrap="soft"
          /> */}

          <input
            {...register('_next')}
            value="https://rafael-almeida.vercel.app/#/contact-me/email-sent"
            type="hidden"
          ></input>

          <input {...register('_template')} value="box" type="hidden" />

          <button type="submit">Enviar</button>
        </ContactForm>
      </ContactMeContent>
    </ContactMeContainer>
  )
}
