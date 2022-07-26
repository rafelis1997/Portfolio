import { AboutMe } from '../../components/AboutMe'
import { Frameworks } from '../../components/Frameworks'
import { Hero } from '../../components/Hero'
import { Portfolio } from '../../components/Porfolio'

export function Home() {
  return (
    <>
      <Hero />
      <Frameworks />
      <AboutMe />
      <Portfolio />
    </>
  )
}
