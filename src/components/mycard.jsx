import React from 'react'
import PixelCard from './PixelCard';

const mycard = () => {
  return (
    <>
    <div className=' flex relative  w-full justify-center mt-3' >
        

        
                <div  className='  w-80 h-60 rounded-xl bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-950 shadow-xl/50 ' >
                    <PixelCard variant="default">
                        <div className=' absolute right-5 w-25 h-40 top-5  rounded-2xl' ><img src="/mymodelfinal.png" className='translate-y-2 translate-x-1 scale-110 z-10' alt="model" /></div>
                        <div className='absolute right-7 top-48 rounded-4xl w-20 h-8 border border-zinc-500' >
                            <div className='absolute w-2 h-2 bg-green-600 top-[12px] left-[15px] border border-white rounded-4xl ' ></div>
                            <div className='absolute  text-zinc-400 text-xs top-[8px] right-[16px]' > Online </div>
                        </div>
                        <div className='name absolute top-5 left-5 text-zinc-300 text-3xl ' > Aantriksh </div>
                        <div className='fullstack text-zinc-400 absolute text-xs top-14 left-8' >Full Stack Developer</div>
                        <div className='absolute roboto w-30 h-10 bg-zinc-500 text-zinc-300 flex items-center rounded-2xl justify-center left-5 bottom-10 ' >
                            <a className='flex justify-center items-center' href="https://t.me/JSONbhai"><div>CONTACT</div>
                            <div className=' heavy text-2xl mb-1' >↗</div></a>
                        </div>
                    </PixelCard>
                </div>
        

         </div>
    </>
  )
}

export default mycard