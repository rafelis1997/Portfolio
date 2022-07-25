import { EllipseOneContainer, EllipseTwoContainer } from './styles'

export function Ellipses() {
  return (
    <>
      <EllipseOneContainer
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 150, delay: 2 }}
      />
      <EllipseTwoContainer
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: 'spring', stiffness: 150, delay: 2 }}
      />
    </>
  )
}
