import styled from 'styled-components'
import { motion } from 'framer-motion'

export const EllipseOneContainer = styled(motion.div)`
  position: absolute;
  bottom: 250px;
  right: 80px;
  background-image: url('Ellipse-3.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  width: 47px;
  height: 47px;

  @media (max-width: 496px) {
    bottom: 200px;
    right: 20px;
  }
`

export const EllipseTwoContainer = styled(motion.div)`
  position: absolute;
  bottom: 80px;
  right: 160px;
  background-image: url('Ellipse-4.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  width: 140px;
  height: 140px;

  @media (max-width: 496px) {
    bottom: 30px;
    right: 20px;
  }
`
