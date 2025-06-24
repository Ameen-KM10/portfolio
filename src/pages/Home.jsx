import React from 'react'
import DecryptedText from './DecryptedText'

const Home = () => {
  return (
    <>
    <div className="h-screen  flex justify-center items-center">
      <div className='text-8xl' style={{ marginTop: '4rem' }}>
        <DecryptedText
          text="This text animates when in view"
          speed={30}
          sequential={true}
          maxIterations={10}
          animateOn="view"
          revealDirection="start"
        />
</div>
        
    </div>
    </>
  )
}

export default Home