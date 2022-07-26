import { portfolioData } from '../../data/PortfolioData'
import { PortfolioCard } from './components/PortfolioCard'
import { PortfolioContainer, PortfolioInner, PortfolioContent } from './styles'

export function Portfolio() {
  return (
    <PortfolioContainer>
      <PortfolioInner>
        <h1>Portfolio</h1>
        <PortfolioContent>
          {portfolioData.content.projects.map((project) => (
            <PortfolioCard data={project} key={project.id} />
          ))}
        </PortfolioContent>
      </PortfolioInner>
    </PortfolioContainer>
  )
}
