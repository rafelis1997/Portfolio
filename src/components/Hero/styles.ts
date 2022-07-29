import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroContainer = styled.section`
  width: 100%;
  background: ${(props) => props.theme['gray-900']};
  height: 100vh;

  padding: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`

export const HeroInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 2rem;
  margin: 2rem;
`

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 4rem;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;

  span {
    max-width: 400px;
    width: fit-content;
    text-shadow: -16px 16px 4px rgba(52, 52, 52, 0.25);
  }

  h1 {
    position: relative;
    font-size: 2.875rem;
    text-shadow: -16px 16px 4px rgba(52, 52, 52, 0.25);
  }
`

export const ImageContainer = styled(motion.div)`
  position: relative;
  width: 460px;
  height: 414px;
  top: 0;
  left: 0;
`

export const ImageDisplay = styled(motion.div)`
  background: ${(props) => props.theme.yellow};
  z-index: 2;
  top: 0;
  right: 0;
  width: 23.75rem;
  position: absolute;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  box-shadow: -16px 16px 4px rgba(52, 52, 52, 0.25);

  img {
    width: 100%;
  }
`

export const ImageBackground = styled(motion.div)`
  position: absolute;
  bottom: -50px;
  left: -10px;
  background: ${(props) => props.theme['gray-200']};

  width: 423px;
  height: 307px;

  border-radius: 32px;
`

export const HeroButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  a {
    font-family: 'Poppins', sans-serif;
    padding: 2rem 4rem;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme['gray-900']};
    font-weight: 900;
    border-radius: 32px;
    cursor: pointer;
    box-shadow: 0px 16px 4px rgba(10, 10, 10, 0.25);

    transition: background, transform 0.2s ease-in-out;

    &:hover {
      background: ${(props) => props.theme['yellow-hover']};
      transform: scale(0.95);
    }
  }
`
