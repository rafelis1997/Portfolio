import styled, { keyframes } from 'styled-components'


 const anim = keyframes`
   from {
     border-radius: 24% 76% 35% 65% / 27% 36% 65% 73%;
     transform: translate(-200px, 0px) rotate(0deg);
   }
   to {
     border-radius: 87% 53% 28% 86% / 40% 65% 46% 57%;
     transform: translate(-8px, -40px) rotate(-90deg);;
   }
 `

const anim2 = keyframes`
   from {
     
     border-radius: 87% 53% 28% 86% / 40% 65% 46% 57%;
     transform: translate(-100px, -200px) rotate(0deg);
   }
   to {
     border-radius: 24% 76% 35% 65% / 27% 36% 65% 73%;
     transform: translate(-25px, -100px) rotate(-90deg);;
   }
 `

export const BlobContainer = styled.div`

  width: 200px;
  height: 200px;
  bottom: 0;
  right: 0;
  display: flex;
  
  
  
  background: ${(props) => props.theme.yellow};
  
  position: absolute;
  
  animation: ${anim} 15s infinite alternate;
`

export const BlobContainer2 = styled(BlobContainer)`
  width:120px;
  height:120px;
  background: ${(props) => props.theme['gray-900']};
  animation: ${anim2} 15s infinite alternate;
  mix-blend-mode: color-dodge;
`