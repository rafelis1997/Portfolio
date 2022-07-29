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
  max-width: 92rem;
  padding: 0 2rem;

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
    text-decoration: none;
    color: ${(props) => props.theme['text-gray']};

    &:hover {
      transform: scale(1.1);
    }

    a:visited {
      text-decoration: none;
      color: ${(props) => props.theme['text-gray']};
    }
  }
`
interface NavProps {
  active: boolean
}

export const NavMenu = styled.div<NavProps>`
  nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    .menuItems {
      display: flex;
      justify-content: flex-start;
      align-self: center;
      text-align: center;
      gap: 1rem;
    }

    .socialMedia {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      padding-left: 0.5rem;

      border-left: 1px solid ${(props) => props.theme['text-gray']};
    }
    .sandwichContainer {
      display: none;
    }

    @media (max-width: 768px) {
      width: 100%;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-self: flex-start;

      color: ${(props) => props.theme['gray-900']};

      transition: all 0.2s ease-in-out;

      .menuItems {
        display: ${(props) => (props.active ? 'flex' : 'none')};
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-self: center;
        text-align: center;
        gap: 1rem;

        a {
          color: ${(props) => props.theme['gray-900']};
        }

        a:visited {
          text-decoration: none;
          color: ${(props) => props.theme['gray-900']};
        }

        .socialMedia {
          border: none;
          padding: 0;
        }
      }

      svg {
        display: block;
      }

      .sandwichContainer {
        border: none;
        display: flex;
        width: 100%;
        justify-content: ${(props) => (props.active ? 'flex-end' : 'center')};

        :hover {
          transform: scale(1);
        }

        svg:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    display: flex;
    justify-content: center;

    top: 0rem;
    right: 0rem;

    width: ${(props) => props.active && '50vw'};
    height: ${(props) => props.active && '100vh'};

    padding: 2rem;

    color: ${(props) => props.active && props.theme['gray-900']};
    background: ${(props) => props.active && props.theme.yellow};
  }
`
