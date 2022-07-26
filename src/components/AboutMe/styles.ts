import styled from 'styled-components'

export const AboutMeContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  padding: 4.5rem 0;

  background: ${(props) => props.theme['gray-900']};

  color: ${(props) => props.theme['text-gray']};
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
`

export const AboutMeModelContainer = styled.div`
  min-width: 400px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;

  background: ${(props) => props.theme['gray-400']};

  div {
    overflow: visible;
    width: 400px;
    height: 400px;
  }

  canvas {
    overflow: visible;
    width: 400px;
    height: 400px;
    border-radius: 100%;
  }
`
