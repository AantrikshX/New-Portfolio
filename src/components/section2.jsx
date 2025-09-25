import React from 'react'
import Particles from './Particles';
import Skillcard from './skillcard'
import Mycard from './mycard'
import ScrollFloat from './ScrollFloat';
const section2 = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-[#14225f] relative to-black  w-full h-500' >
      <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={2500}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}/>
      <div className='absolute text-white select-none left-10 top-10 ' >
            <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.1}
                                      >
                  SKILLS
              </ScrollFloat></div>
      <div className='absolute flex flex-wrap justify-around top-30  ' id='skills' >
        <Skillcard 
        image="/htmlogo.png"
        head ="HTML" 
        about="Proficient in writing clean and accessible HTML to build well-structured web pages and ensure strong foundations for responsive."
        progress='100%'
        progw='w-22'
        progwbg='group-hover:bg-orange-500 group-active:bg-orange-500'
        hoverBorder = "group-hover:border-orange-500 group-active:border-orange-500"
        shadowColor = "group-hover:shadow-[0_0_25px_5px_rgba(249,115,22,0.8),inset_0_0_15px_rgba(249,115,22,0.8)] group-active:shadow-[0_0_25px_5px_rgba(249,115,22,0.8),inset_0_0_15px_rgba(249,115,22,0.8)]"
        hoverText = "group-hover:text-orange-500 group-active:text-orange-500"
        bgColor = "bg-[#101D53]"
        imgprop='scale-65 translate-y-1 group-hover:scale-70 group-active:scale-70'/>
        
        
        <Skillcard
        image='/csslogo.png'
        head="CSS"
        progress='100%'
        progw='w-22'
        progwbg="group-hover:bg-sky-500 group-active:bg-sky-500"
        about="Skilled in modern CSS, creating responsive layouts with Flexbox and Grid, using animations and clean, maintainable styling"
        hoverBorder="group-hover:border-sky-500 group-active:border-sky-500"
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(14,165,233,0.8),inset_0_0_15px_rgba(14,165,233,0.8)] group-active:shadow-[0_0_25px_5px_rgba(14,165,233,0.8),inset_0_0_15px_rgba(14,165,233,0.8)]"
        hoverText="group-hover:text-sky-500 group-active:text-sky-500"
        bgColor = "bg-[#101D53]"
        imgprop='scale-65 translate-y-1 group-hover:scale-70 group-active:scale-70 '/>

        <Skillcard
        image='/jslogo.png'
        head="JavaScript"
        progress='80%'
        progw='w-20'
        progwbg="group-hover:bg-yellow-500 group-active:bg-yellow-500"
        about="Skilled in JavaScript, creating dynamic and interactive web applications, event handling, and optimized performance across browsers"
        hoverBorder="group-hover:border-yellow-500 group-active:border-yellow-500"
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(234,179,8,0.8),inset_0_0_15px_rgba(234,179,8,0.8)] group-active:shadow-[0_0_25px_5px_rgba(234,179,8,0.8),inset_0_0_15px_rgba(234,179,8,0.8)]"
        hoverText="group-hover:text-yellow-500 group-active:text-yellow-500"
        bgColor="bg-[#0B1541]"
        imgprop='scale-65 translate-y-1 group-hover:scale-70 group-active:scale-70 '/>

        <Skillcard
        image='/gitlogo.png'
        head="GIT/GITHUB"
        progress='100%'
        progw='w-22'
        progwbg="group-hover:bg-orange-800 group-active:bg-orange-800"
        about="Experienced with Git and GitHub for collaborating through branches, pull requests, and ensuring smooth teamwork in modern development workflows"
        hoverBorder="group-hover:border-orange-800 group-active:border-orange-800"
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(148,163,184,0.8),inset_0_0_15px_rgba(148,163,184,0.8)] group-active:shadow-[0_0_25px_5px_rgba(148,163,184,0.8),inset_0_0_15px_rgba(148,163,184,0.8)]"
        hoverText ="group-hover:text-orange-800 group-active:text-orange-800"
        bgColor="bg-[#0B1541]"
        imgprop='scale-75 translate-y-1 group-hover:scale-80 group-active:scale-80 '/>

        <Mycard/>
        <Skillcard
        image ='/tailwindlogo.png'
        head="Tailwind"
        progress='90%'
        progw='w-21'
        progwbg="group-hover:bg-teal-400 group-active:bg-teal-400"
        about="Skilled in Tailwind CSS, building responsive and modern user interfaces, utility-first styling, and creating consistent, scalable designs with minimal code"
        hoverBorder='group-hover:border-teal-400 group-active:border-teal-400'
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(45,212,191,0.8),inset_0_0_15px_rgba(45,212,191,0.8)] group-active:shadow-[0_0_25px_5px_rgba(45,212,191,0.8),inset_0_0_15px_rgba(45,212,191,0.8)]"
        hoverText="group-hover:text-teal-400 group-active:text-teal-400"
        bgColor="bg-[#02051D]"
        imgprop='scale-65 translate-y-1 group-hover:scale-70 group-active:scale-70 '/>

        <Skillcard
        image='/tslogo.png'
        head='Typescript'
        progress='30%'
        progw='w-7'
        progwbg="group-hover:bg-blue-500 group-active:bg-blue-500"
        about=' Can use Typescript to develop scalable applications, ensuring type safety, and enhancing code with strong typing and modern features'
        hoverBorder='group-hover:border-blue-500 group-active:border-blue-500'
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(59,130,246,0.8),inset_0_0_15px_rgba(59,130,246,0.8)] group-active:shadow-[0_0_25px_5px_rgba(59,130,246,0.8),inset_0_0_15px_rgba(59,130,246,0.8)]"
        hoverText="group-hover:text-blue-500 group-active:text-blue-500"
        bgColor="bg-[#02051D]"
        imgprop='scale-65 translate-y-1 group-hover:scale-70 group-active:scale-70'/>
        <Skillcard
        image='/reactlogo.png'
        head='React'
        progress='70%'
        progw='w-17'
        progwbg="group-hover:bg-cyan-400 group-active:bg-cyan-400"
        about='Strong foundation in React, building reusable components, managing state efficiently, and creating fast, scalable, and interactive single-page applications'
        hoverBorder='group-hover:border-cyan-400 group-active:border-cyan-400'
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(6,182,212,0.8),inset_0_0_15px_rgba(6,182,212,0.8)] group-active:shadow-[0_0_25px_5px_rgba(6,182,212,0.8),inset_0_0_15px_rgba(6,182,212,0.8)]"
        hoverText="group-hover:text-cyan-400 group-active:text-cyan-400"
        bgColor="bg-[#01020E]"
        imgprop='scale-120 translate-y-2.5 group-hover:scale-125 group-active:scale-125'/> 
          <div id='skills2' ></div>
        <Skillcard
        image='/nodelogo.png'
        head='Node JS'
        progress='60%'
        progw='w-16'
        progwbg="group-hover:bg-green-600 group-active:bg-green-600"
        about='Proficient in Node.js, building scalable server-side applications, handling APIs, managing databases, and optimizing backend performance efficiently'
        hoverBorder='group-hover:border-green-600 group-active:border-green-600'
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(22,163,74,0.8),inset_0_0_15px_rgba(22,163,74,0.8)] group-active:shadow-[0_0_25px_5px_rgba(22,163,74,0.8),inset_0_0_15px_rgba(22,163,74,0.8)]"
        hoverText="group-hover:text-green-600 group-active:text-green-600"
        bgColor="bg-[#01020E]"
        imgprop='scale-65 translate-y-1 group-hover:scale-70 group-active:scale-70 '/> 

        <Skillcard
        image='/mongologo.png'
        head='Mongo DB'
        progress='50%'
        progw='w-12'
        progwbg="group-hover:bg-green-500 group-active:bg-green-500"
        about='Adept at MongoDB, designing flexible NoSQL databases, managing collections efficiently, ensuring data integrity, and optimizing query performance'
        hoverBorder='group-hover:border-green-500 group-active:border-green-500'
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(120,63,4,0.8),inset_0_0_15px_rgba(120,63,4,0.8)] group-active:shadow-[0_0_25px_5px_rgba(120,63,4,0.8),inset_0_0_15px_rgba(120,63,4,0.8)]"
        hoverText="group-hover:text-green-500 group-active:text-green-500"
        bgColor="bg-[#000103]"
        imgprop='scale-100 translate-y-1 group-hover:scale-105 group-active:scale-105'/> 

        <Skillcard
        image='/expresslogo.png'
        head='Express'
        progress='50%'
        progw='w-12'
        progwbg="group-hover:bg-white group-active:bg-white"
        about='Experienced in Express.js, building fast and scalable backend APIs, managing routing, middleware, and optimizing server performance efficiently'
        hoverBorder='group-hover:border-white group-active:border-white'
        shadowColor="group-hover:shadow-[0_0_25px_5px_rgba(100,116,139,0.8),inset_0_0_15px_rgba(100,116,139,0.8)] group-active:shadow-[0_0_25px_5px_rgba(100,116,139,0.8),inset_0_0_15px_rgba(100,116,139,0.8)]"
        hoverText="group-hover:text-gray-600 group-active:text-gray-600"
        bgColor="bg-[#000103]"
        imgprop='scale-65 translate-y-1 group-hover:scale-70 group-active:scale-70'/>

        </div>

    </div>
   

    </>
  )
}

export default section2