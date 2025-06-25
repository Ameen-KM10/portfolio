import Particles from './Particles';
import DecryptedText from './DecryptedText'
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {useRef} from "react";

const Home = () => {

  const title = useRef()

  useGSAP(()=>{
    gsap.from(title.current, {
      scale:1,
      x:100,
      duration:1,
    })
  })

  return (
    <>
    {/* <div className="h-screen px-40 bg-bunker-950 flex flex-col justify-center items-start">
      <div ref={title} className="font-['SFpro-reg'] text-9xl text-amber-50 leading-5">Ameen KM</div>
      <div className="font-['JBmono-reg'] text-4xl text-white " style={{ marginTop: '4rem' }}>
        <DecryptedText
          text="Web Developer, Data Scientist"
          speed={30}
          sequential={true}
          maxIterations={10}
          animateOn="view"
          revealDirection="start"
        />
      </div>
    </div> */}
    {/* <div className='stack w-full'> */}
    <div className='h-screen px-40 bg-dark-purple relative flex flex-col items-center justify-center' >
      <div className='absolute h-screen w-screen' >
        <Particles
          particleColors={['#ffffff','#ffffff']}
          particleCount={300}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
          />
      </div>
      <div ref={title} className="font-['SFpro-reg'] text-9xl text-amber-50 leading-5 ">Ameen KM</div>
      <div className="font-['JBmono-reg'] text-4xl text-white " style={{ marginTop: '4rem' }}>
        <DecryptedText
          text="Web Developer, Data Scientist"
          speed={30}
          sequential={true}
          maxIterations={10}
          animateOn="view"
          revealDirection="start"
          />
      </div>
    </div>
{/* </div> */}
    </>
  )
}

export default Home