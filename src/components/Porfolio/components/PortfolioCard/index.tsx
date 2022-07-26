import { Quotes } from 'phosphor-react'
import { ProjectProps } from '../../../../data/PortfolioData'
import {
  PortfolioCardContainer,
  ProjectCard,
  ProjectCardContent,
  ButtonContainer,
  ProjectCardImageContainer,
  PortfolioCardImageBackground,
  CommentCard,
  CommentCardContent,
  CommentImg,
  ProjectCardImage,
  CommentCardInner,
} from './style'

interface PortfolioCardProps {
  data: ProjectProps
}

export function PortfolioCard({ data }: PortfolioCardProps) {
  return (
    <PortfolioCardContainer>
      <ProjectCard isInverse={data.isInverse}>
        <ProjectCardContent>
          <span>{data.description}</span>
          <ButtonContainer isInverse={data.isInverse}>
            <a href={data.primaryButton.goTo} target="_blank" rel="noreferrer">
              {data.primaryButton.title}
            </a>

            {data.secondaryButton && (
              <a
                href={data.secondaryButton.goTo}
                target="_blank"
                rel="noreferrer"
              >
                {data.secondaryButton.title}
              </a>
            )}
          </ButtonContainer>
        </ProjectCardContent>
        <ProjectCardImageContainer>
          <ProjectCardImage url={data.imgUrl} />
          <PortfolioCardImageBackground isInverse={data.isInverse} />
        </ProjectCardImageContainer>
      </ProjectCard>

      {data.comment && (
        <CommentCard isInverse={!data.isInverse}>
          <CommentCardInner>
            <CommentCardContent isInverse={!data.isInverse}>
              <Quotes size={96} />
              <span>{data.comment.text}</span>
            </CommentCardContent>
            <CommentImg url={data.comment.commentImgUrl} />
          </CommentCardInner>
        </CommentCard>
      )}
    </PortfolioCardContainer>
  )
}
