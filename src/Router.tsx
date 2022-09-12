import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ContactMe } from './pages/ContactMe'
import { EmailSent } from './pages/ContactMe/EmailSend'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-me" element={<ContactMe />} />
        <Route path="/contact-me/email-sent" element={<EmailSent />} />
      </Route>
    </Routes>
  )
}
