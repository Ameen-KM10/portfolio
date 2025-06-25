import React from 'react'
import DecryptedText from './DecryptedText'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useRef} from "react";

const Home = () => {

  const title = useRef()

  useGSAP(()=>{
    gsap.from(title.current, {
      scale:0,
      x:500,
      duration:1,
    })
  })

  return (
    <>
    <div className="h-screen  flex justify-center items-center">
      <div ref={title}>Ameen KM</div>
      {/* <div className='text-8xl' style={{ marginTop: '4rem' }}>
        <DecryptedText
          text="This text animates when in view"
          speed={30}
          sequential={true}
          maxIterations={10}
          animateOn="view"
          revealDirection="start"
        />
      </div> */}
        
    </div>
    </>
  )
}

export default Home