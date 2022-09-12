import styled from 'styled-components'

export const ContactMeContainer = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  padding: 0 2rem;
  background: ${(props) => props.theme['gray-900']};
`

export const ContactMeContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  max-width: 92rem;
  margin: 0 auto;
  margin-top: 5rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 32px;

  box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    100px 100px 80px rgba(0, 0, 0, 0.07);

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 5rem;
    padding: 1.5rem;
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 460px) {
    margin-top: 5rem;
    padding: 0.5rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`

export const MailImage = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 32px;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  background: ${(props) => props.theme.yellow};
  border-right: 8px solid ${(props) => props.theme['gray-700']};

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  @media (max-width: 1024px) {
    width: 250px;
    border: none;
    img {
      height: 250px;
      width: 250px;
      object-fit: contain;
    }
  }

  @media (max-width: 460px) {
    width: 200px;
    border: none;
    img {
      height: 200px;
      width: 200px;
      object-fit: contain;
    }
  }
`

export const ContactThanks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1.5rem;
  color: ${(props) => props.theme['gray-900']};
  font-weight: bold;

  img {
    width: 80%;
  }
`
