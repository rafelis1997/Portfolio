import { motion } from 'framer-motion'
import styled from 'styled-components'

export const FrameworksContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4.5rem 0;
  gap: 2rem;

  h1 {
    color: ${(props) => props.theme['gray-900']};
  }
`

export const FrameworksContent = styled.div`
  width: 100%;
  max-width: 90rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 32px;
  border: 5px solid ${(props) => props.theme['gray-900']};
  padding: 15px;
`

export const LabelsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  border-radius: 24px;
  padding: 1rem;

  background: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-900']};
`
interface LabelsProps {
  isActive: boolean
}

export const Label = styled.a<LabelsProps>`
  text-align: center;
  flex: 1;
  height: 100%;
  font-weight: 700;
  padding: 1rem 0;

  border-radius: 12px;

  cursor: pointer;

  background: ${(props) =>
    props.isActive ? props.theme['gray-900'] : props.theme['gray-200']};
  color: ${(props) =>
    props.isActive ? props.theme['text-gray'] : props.theme['gray-900']};

  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${(props) =>
      props.isActive ? props.theme['gray-700'] : props.theme['gray-400']};
  }
`

export const FrameworksIconsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;

  color: ${(props) => props.theme['gray-900']};

  padding: 8rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`
