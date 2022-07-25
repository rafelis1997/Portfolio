import { HalfEllipseContainer } from './styles'

export function HalfEllipse() {
  return (
    <HalfEllipseContainer
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      whileHover={{ rotate: 450, transition: { duration: 1 } }}
      transition={{ ease: 'easeInOut', duration: 2, delay: 0.2 }}
    />
  )
}
