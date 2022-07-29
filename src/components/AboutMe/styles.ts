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
  gap: 15rem;
  padding: 0 4rem;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 3rem;
  }

  @media (max-width: 600px) {
    padding: 0 3rem;
  }

  @media (max-width: 496px) {
    padding: 0 0;
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
  @media (max-width: 496px) {
    border-radius: 0;
  }

  box-shadow: 0px 1.2px 1px -3px rgba(0, 0, 0, 0.034),
    0px 2.9px 2.4px -3px rgba(0, 0, 0, 0.048),
    0px 5.5px 4.5px -3px rgba(0, 0, 0, 0.06),
    0px 9.8px 8px -3px rgba(0, 0, 0, 0.072),
    0px 18.4px 15px -3px rgba(0, 0, 0, 0.086),
    0px 44px 36px -3px rgba(0, 0, 0, 0.12);
`

export const AboutMeModelContainer = styled.div`
  min-width: 400px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: visible;

  position: relative;
  top: 0;
  left: 0;
  z-index: 9;

  canvas {
    overflow: visible;
    max-width: 400px;
    width: 100%;
    height: 600px;
    z-index: 11;
  }

  @media (max-width: 500px) {
    min-width: 300px;
    width: 100%;
  }
`
