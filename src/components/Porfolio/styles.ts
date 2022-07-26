import styled from 'styled-components'

export const PortfolioContainer = styled.section`
  display: flex;
  width: 100%;
  padding: 4.5rem 0;

  color: ${(props) => props.theme['gray-900']};
`

export const PortfolioInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
`

export const PortfolioContent = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`
