import { Canvas } from '@react-three/fiber'
import { ModelAvatar } from '../../assets/ModelAvatar'
import { Blob } from './components/Blob'
import {
  AboutMeContainer,
  AboutMeDescription,
  AboutMeInner,
  AboutMeModelContainer,
} from './styles'

export function AboutMe() {
  return (
    <AboutMeContainer>
      <h1>About Me</h1>
      <AboutMeInner>
        <AboutMeDescription>
          <p>
            Front-end developer, I love to learn and develop my skills every
            time I find something is interesting. Today I’m currently working
            actively on WebXR world but hope to expand my horizons to React
            development.
          </p>{' '}
          <p>
            I’m changing my carreer as graduated mechanical engineer to enter on
            the web development area. I’ve worked on big companies like Volvo
            Trucks and Renault as engineer, there I was able to improve my soft
            skills and team work.
          </p>
        </AboutMeDescription>
        <AboutMeModelContainer>
          <Blob />
          <Canvas
            camera={{ fov: 40, near: 0.1, far: 1000, position: [0, 1.5, 8.6] }}
          >
            <ambientLight />
            <ModelAvatar position={[0, -2.8, 0]} />
          </Canvas>
        </AboutMeModelContainer>
      </AboutMeInner>
    </AboutMeContainer>
  )
}
