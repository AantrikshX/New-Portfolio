import React from 'react';

const ProjectCard = () => {
  return (
    <div className="w-75 h-85 mt-5 relative rounded p-5 border border-white/30 bg-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform duration-300">
      
      {/* Image */}
      <div className="w-full h-40 mb-1 rounded overflow-hidden border-2 border-white/30">
        <img src="/shrtlink.png" className="w-full h-full object-cover" alt="Shrt Link" />
      </div>

      {/* Title */}
      <h1 className="text-white text-2xl font-bold ">Shrt Link</h1>

      {/* Description */}
      <p className="text-white/80 text-sm tracking-tight">
        A modern redesign of the original link-shortening platform, sh-rt.link, showcasing improved UI/UX and functionality.
      </p>
      <a className='absolute mt-3 right-5' href="https://dancing-macaron-0f20bc.netlify.app/"><button className='text-white border bg-zinc-400 border-white rounded p-0.5' >Go to Web</button></a>
    </div>
  );
};

export default ProjectCard;
