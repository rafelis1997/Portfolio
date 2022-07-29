import styled from 'styled-components'

export const AboutMeContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  padding: 4.5rem 0;

  color: ${(props) => props.theme['text-gray']};
  h1 {
    color: ${(props) => props.theme['gray-900']};
  }
`

export const AboutMeInner = styled.div`
  width: 100%;
  max-width: 90rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }

  @media (max-width: 600px) {
    padding: 0 3rem;
  }
`

export const AboutMeDescription = styled.div`
  display: flex;
  max-width: 560px;
  flex-direction: column;
  gap: 2rem;
  line-height: 28px;
  background: ${(props) => props.theme['gray-900']};
  padding: 4rem;
  border-radius: 24px;
`

export const AboutMeModelContainer = styled.div`
  min-width: 400px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 1rem 0;
  overflow: visible;

  position: relative;
  top: 0;
  left: 0;
  z-index: 9;

  canvas {
    overflow: visible;
    width: 400px;
    height: 400px;
    z-index: 11;
  }
`
