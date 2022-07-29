import styled from 'styled-components'

export const FooterContainer = styled.section`
  width: 100%;
  padding: 2rem;
  padding-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme['gray-900']};

  h1 {
    font-size: 2.25rem;
  }

  .footerItemsContainer {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .socialMediaFooter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;

    a {
      text-decoration: none;
      color: ${(props) => props.theme['text-gray']};
    }

    a:visited {
      text-decoration: none;
      color: ${(props) => props.theme['text-gray']};
    }
  }

  span:last-child {
    font-size: 0.83rem;
  }
`
