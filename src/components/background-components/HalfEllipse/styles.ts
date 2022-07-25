import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HalfEllipseContainer = styled(motion.div)`
  position: absolute;
  bottom: -243px;
  left: -160px;
  background-image: url('background-ellipse1.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  width: 18.44rem;
  height: 18.44rem;
`
