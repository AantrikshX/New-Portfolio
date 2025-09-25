import React from 'react'
import ShinyText from './ShinyText';
import Card from './projectcard'
import LightRays from './LightRays';
const section3 = () => {
  return (
    <>
    <div className='bg-gradient-to-b relative select-none from-black to-zinc-800 w-full h-200' >
      <div id='Projects'  className='text-white absolute left-6 top-10 ' >
        <ShinyText 
                text="PROJECTS" 
                disabled={false} 
                speed={4} 
                className='custom-class' 
        /></div>
        <div className='absolute h-120 top-40 ' >
          <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={3}
          lightSpread={2}
          rayLength={3}
         followMouse={true}
         mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0.05}
          className="custom-rays"
           />
</div>





      <div className='scrollcontainer no-scrollbar absolute w-full  h-120 flex justify-start items-center overflow-x-auto border-2 border-white   top-40 ' >
        <div className='flex gap-40 ml-7' >

          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>
    </div>
    </>
  )
}

export default section3
