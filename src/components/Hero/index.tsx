import { Ellipses } from '../background-components/Ellipses'
import { HalfEllipse } from '../background-components/HalfEllipse'
import {
  DescriptionContainer,
  HeroContainer,
  HeroInner,
  ImageContainer,
  ImageBackground,
  ImageDisplay,
  HeroContent,
  HeroButtonContainer,
} from './styles'

export function Hero() {
  return (
    <HeroContainer id="home">
      <Ellipses />
      <HeroInner
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delayChildren: 0.4, delay: 0.4 }}
      >
        <HeroContent>
          <DescriptionContainer>
            <h1>
              Hi! I&apos;m
              <br />
              Rafael H. de Almeida
              <HalfEllipse />
            </h1>
            <span>
              React front-end developer - WebXR Freelancer - Technology Driven
            </span>
          </DescriptionContainer>

          <ImageContainer>
            <ImageDisplay
              initial={{ scaleY: 0, scaleX: 0, originY: 1, x: 0 }}
              animate={{ scaleY: 1, scaleX: 1, transition: { delay: 0.4 } }}
              whileHover={{ x: -10, transition: { delay: 0 } }}
              transition={{
                type: 'spring',
                stiffness: 100,
              }}
            >
              <img src="me.png" alt=""></img>
            </ImageDisplay>
            <ImageBackground
              initial={{ opacity: 0, x: 0 }}
              whileHover={{
                x: 10,
                transition: { ease: 'easeOut' },
              }}
              animate={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
            />
          </ImageContainer>
        </HeroContent>
        <HeroButtonContainer>
          <a>More About Me</a>
        </HeroButtonContainer>
      </HeroInner>
    </HeroContainer>
  )
}
