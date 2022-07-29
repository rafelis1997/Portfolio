import styled, { keyframes } from 'styled-components'

const anim = keyframes`

  0% {transform: translate(-200px, 0px);}
  50% {transform: translate(100px, -100px);}
  100% {transform: translate(-20px, 120px);}

`

const anim2 = keyframes`

  0% {transform: translate(0px, 0px);}
  50% {transform: translate(100px, -200px);}
  100% {transform: translate(-200px, -80px);}

`

export const BlobContainer = styled.div`
  width: 400px;
  height: 400px;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background: ${(props) => props.theme.yellow}; */

  position: absolute;

  animation: ${anim} 25s infinite alternate;
`

export const BlobContainer2 = styled(BlobContainer)`
  width: 120px;
  height: 120px;
  animation: ${anim2} 30s infinite alternate;
  mix-blend-mode: color-dodge;
`
