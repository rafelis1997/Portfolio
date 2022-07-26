import styled from 'styled-components'

interface InverseProps {
  isInverse: boolean
}

export const PortfolioCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ProjectCard = styled.div<InverseProps>`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16rem;

  padding: 4rem 2rem;
  padding-bottom: 6rem;

  background: ${(props) => (props.isInverse ? props.theme['gray-900'] : '')};

  color: ${(props) =>
    !props.isInverse ? props.theme['gray-900'] : props.theme['text-gray']};
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

    transition: all 0.2s ease-in-out;

    &:hover {
      text-decoration: none;
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
    }
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
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16rem;

  padding: 4rem 2rem;

  background: ${(props) => (!props.isInverse ? props.theme['gray-900'] : '')};

  color: ${(props) =>
    props.isInverse ? props.theme['gray-900'] : props.theme['text-gray']};
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
`

export const CommentImg = styled.div<CommentImgProps>`
  width: 276px;
  height: 276px;

  border-radius: 100%;

  background-image: ${(props) => `url(${props.url})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
