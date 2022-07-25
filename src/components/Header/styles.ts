import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 0;
  z-index: 99999;

  position: absolute;
  font-family: 'Poppins', sans-serif;
`

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90rem;
  margin: 0 auto;

  height: 6rem;
  width: 100%;
  margin: 0 auto;

  h1 {
    font-size: 1.72rem;
  }

  h1,
  a {
    font-weight: bold;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      padding-left: 0.5rem;

      border-left: 1px solid ${(props) => props.theme['text-gray']};
    }
  }
`
