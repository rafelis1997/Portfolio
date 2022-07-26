import styled from 'styled-components'

interface InverseProps {
  isInverse: boolean
}

export const PortfolioCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;

  @media (max-width: 496px) {
    padding: 2rem 0;
  }
`

export const ProjectCard = styled.div<InverseProps>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16rem;

  padding: 4rem 2rem;
  padding-bottom: 6rem;
  border-radius: 24px;

  @media (max-width: 496px) {
    border-radius: 0;
  }

  background: ${(props) =>
    props.isInverse ? props.theme['gray-900'] : props.theme.yellow};

  color: ${(props) =>
    !props.isInverse ? props.theme['gray-900'] : props.theme['text-gray']};

  @media screen and (max-width: 1024px) {
    gap: 3rem;
    flex-direction: column-reverse;
  }

  box-shadow: ${(props) =>
    props.isInverse &&
    '0px 0.6px 1px -3px rgba(0, 0, 0, 0.034), 0px 1.5px 2.4px -3px rgba(0, 0, 0, 0.048), 0px 2.9px 4.5px -3px rgba(0, 0, 0, 0.06), 0px 5.1px 8px -3px rgba(0, 0, 0, 0.072), 0px 9.6px 15px -3px rgba(0, 0, 0, 0.086), 0px 23px 36px -3px rgba(0, 0, 0, 0.12);'};
`

export const ProjectCardContent = styled.div`
  width: 100%;
  max-width: 580px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`

export const ButtonContainer = styled.div<InverseProps>`
  display: flex;
  width: 100%;

  justify-content: center;
  align-items: center;
  gap: 8rem;

  a {
    cursor: pointer;
    padding: 1rem 2rem;

    font-weight: 900;

    border-radius: 16px;
    border: 5px solid
      ${(props) =>
        props.isInverse ? props.theme.yellow : props.theme['gray-900']};
    color: ${(props) =>
      props.isInverse ? props.theme.yellow : props.theme['gray-900']};

    box-shadow: 0px 8px 4px rgba(10, 10, 10, 0.25);
    transition: all 0.2s ease-in-out;

    &:hover {
      text-decoration: none;
      border-color: ${(props) =>
        props.isInverse
          ? props.theme['yellow-hover']
          : props.theme['gray-700']};
      transform: scale(0.95);
    }
  }

  a:first-child {
    text-decoration: none;
    background: ${(props) =>
      props.isInverse ? props.theme.yellow : props.theme['gray-900']};
    color: ${(props) =>
      props.isInverse ? props.theme['gray-900'] : props.theme['text-gray']};

    &:hover {
      background: ${(props) =>
        props.isInverse
          ? props.theme['yellow-hover']
          : props.theme['gray-700']};
      border-color: ${(props) =>
        props.isInverse
          ? props.theme['yellow-hover']
          : props.theme['gray-700']};
    }
  }

  @media (max-width: 1024px) {
    gap: 3rem;
    flex-direction: column;
  }
`
interface CommentImgProps {
  url: string
}

export const ProjectCardImageContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 300px;
  height: 253px;
`

export const ProjectCardImage = styled.div<CommentImgProps>`
  width: 300px;
  height: 253px;
  position: relative;

  border-radius: 24px;

  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;

  box-shadow: -8px 8px 4px rgba(52, 52, 52, 0.25);
`

export const PortfolioCardImageBackground = styled.div<InverseProps>`
  width: 300px;
  height: 253px;
  z-index: 1;

  border-radius: 24px;

  position: absolute;
  top: 20px;
  left: -20px;

  background: ${(props) =>
    props.isInverse ? props.theme['gray-200'] : props.theme['gray-900']};
`

export const CommentCard = styled.div<InverseProps>`
  padding: 2rem 2rem;
  padding-top: 6rem;

  background: ${(props) => (!props.isInverse ? props.theme['gray-900'] : '')};

  color: ${(props) =>
    props.isInverse ? props.theme['gray-900'] : props.theme['text-gray']};
`

export const CommentCardInner = styled.div`
  width: 80%;
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 3rem 0;

  border-top: 3px solid ${(props) => props.theme['gray-900']};
  border-bottom: 3px solid ${(props) => props.theme['gray-900']};

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 3rem;
  }
`

export const CommentCardContent = styled.div<InverseProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  max-width: 580px;

  svg {
    top: -50px;
    position: relative;
  }

  span {
    flex: 1;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0;
    padding-top: 1rem;
  }
`

export const CommentImg = styled.div<CommentImgProps>`
  width: 276px;
  height: 276px;

  border-radius: 100%;

  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`
