// import React from 'react'

// const Skillcard = ({
//   head,
//   about,
//   borderColor = "border-zinc-500",
//   textColor = "text-zinc-500",
//   bgColor = "bg-[#17194E]",
//   hoverBorder,
//   hoverText ,
//   shadowColor 
// }) => {
//   return (
//     <div>
//       <div
//         className={`
//           relative card border-2 rounded-xl w-40 h-58
//           ${borderColor} ${textColor} ${hoverBorder} ${hoverText} ${shadowColor}
//         `}
//       >
//         {/* Top small box */}
//         <div
//           className={`
//             absolute ${bgColor} top-[-25px] left-1/2 -translate-x-1/2 border-1 w-12 h-14 rounded-4xl
//             ${borderColor} ${textColor} ${hoverBorder} ${hoverText} ${shadowColor}
//           `}
//         ></div>

//         {/* Title */}
//         <div className="absolute top-10 left-1/2 -translate-x-1/2">
//           <h1 className="select-none">{head}</h1>
//         </div>

//         {/* About */}
//         <div className="absolute top-17 left-1 text-center">
//           <p className="select-none text-sm">{about}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skillcard;

const Skillcard = ({
  head,
  about,
  progress,
  borderColor = "border-zinc-500",
  textColor = "text-zinc-500",
  bgColor,
  hoverBorder,
  hoverText ,
  image,
  progw,
  progwbg,
  imgprop,
  shadowColor 
}) => {
  return (
    <div className="group" >
      {/* parent has group */}
      <div
        className={`
          relative card mt-6 border-2 rounded-xl w-40 h-70 
          ${borderColor} ${textColor} ${hoverBorder} ${hoverText} ${shadowColor}
        `}
      >
        {/* Top small box reacts to parent hover */}
        <div
          className={`
            absolute ${bgColor} top-[-25px] left-1/2 -translate-x-1/2 border-1 w-12 h-14 rounded-4xl
            ${borderColor} ${textColor} ${hoverBorder} ${hoverText} ${shadowColor}
          `}
        > <img src={`${image}`} className={`${imgprop} `}   /> </div>

        {/* Title */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2">
          <h1 className="select-none">{head}</h1>
        </div>

        {/* About */}
        <div className="absolute top-19 left-1 text-center">
          <p className="select-none text-sm">{about}</p>
        </div>
        <div className=  "progress absolute flex  bottom-6 left-2 " >
          <h2 className={`${textColor} ${hoverText} `} >{progress}</h2>
          <div className="h-5 w-23 absolute left-11 border-2 rounded border-zinc-500 bg-zinc-500/20 group-hover:border-green-500 group-active:border-green-500  " ><div className={`h-4 rounded-xs absolute ${progw}  ${progwbg} ${shadowColor}`} ></div></div>
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
