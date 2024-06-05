import './App.css'

import {ContactShadows, Environment, OrbitControls} from '@react-three/drei'

import {Canvas} from '@react-three/fiber'
import Earth from '../public/Earth'
import { Suspense } from 'react'
import { TopSection } from './topSection/index'
import styled from "styled-components";

// import Footer from './Footer'

// import FrameAnimation from './FrameAnimation'
// import {motion} from 'framer-motion'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
const CanvasContainer=styled.div`
width:100%
height:100%
`;

function App() {
  // const [count, setCount] = useState(0)

  return (
    <CanvasContainer>
      <TopSection/>
            <Canvas>
               <ambientLight/>
               <OrbitControls />
               <Suspense fallback={null}>
                  <Earth/>
               </Suspense>
               <Environment preset='sunset'/>
               {/* <ContactShadows  opacity={10} scale={1} blur={1} far={10} resolution={256} color='#000000'/> */}
              {/* <Text/> */}
         </Canvas>
    </CanvasContainer>

  
  )
}

export default App
