import { AnimatePresence } from 'framer-motion'
import {
  Atom,
  Cube,
  FigmaLogo,
  FileCss,
  Graph,
  HardDrives,
  Leaf,
  Monitor,
  Sunglasses,
} from 'phosphor-react'
import { useState } from 'react'
import SassIcon from '../../assets/sassIcon.svg'
import ZapparIcon from '../../assets/zapparIcon.png'
import BlenderIcon from '../../assets/blenderIcon.svg'

import {
  FrameworksContainer,
  FrameworksContent,
  LabelsContainer,
  FrameworksIconsContainer,
  Label,
} from './styles'

const FrameworksData = [{}, {}]

export function Frameworks() {
  const [toggleActive, setToggleActive] = useState(1)

  function handleLabelClick(index: number) {
    setToggleActive(index)
  }

  return (
    <FrameworksContainer>
      <h1>Knowledge</h1>
      <FrameworksContent>
        <LabelsContainer>
          <Label
            isActive={toggleActive === 1}
            onClick={() => handleLabelClick(1)}
          >
            <Monitor size={48} />
            <span>FRONT-END</span>
          </Label>
          <Label
            isActive={toggleActive === 2}
            onClick={() => handleLabelClick(2)}
          >
            <HardDrives size={48} />
            <span>BACK-END</span>
          </Label>
          <Label
            isActive={toggleActive === 3}
            onClick={() => handleLabelClick(3)}
          >
            <Sunglasses size={48} />
            <span>AUGMENTED-REALITY</span>
          </Label>
        </LabelsContainer>

        <AnimatePresence exitBeforeEnter>
          {toggleActive === 1 && (
            <FrameworksIconsContainer
              key={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <Atom size={96} />
                <span>ReactJS</span>
              </div>
              <div>
                <FigmaLogo size={96} />
                <span>Figma</span>
              </div>
              <div>
                <img
                  src={SassIcon}
                  alt="Sass css system logo"
                  width={96}
                  height={96}
                />
                <span>Sass</span>
              </div>
              <div>
                <FileCss size={96} />
                <span>Styled-Components</span>
              </div>
              <div>
                <Cube size={96} weight="fill" />
                <span>Three.js</span>
              </div>
            </FrameworksIconsContainer>
          )}
          {toggleActive === 2 && (
            <FrameworksIconsContainer
              key={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <Leaf size={96} />
                <span>Node.js</span>
              </div>
              <div>
                <Graph size={96} />
                <span>GraphQL</span>
              </div>
            </FrameworksIconsContainer>
          )}
          {toggleActive === 3 && (
            <FrameworksIconsContainer
              key={3}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <img src={ZapparIcon} width={96} height={96} alt="" />
                <span>Zappar</span>
              </div>
              <div>
                <img
                  src="https://img.icons8.com/wired/100/000000/augmented-reality.png"
                  width={96}
                  height={96}
                  alt=""
                />
                <span>Ar.js</span>
              </div>
              <div>
                <img
                  src={BlenderIcon}
                  alt="blender 3d software"
                  width={96}
                  height={96}
                />
                <span>Blender</span>
              </div>
            </FrameworksIconsContainer>
          )}
        </AnimatePresence>
      </FrameworksContent>
    </FrameworksContainer>
  )
}
