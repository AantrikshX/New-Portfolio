

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
  id,
  shadowColor 
}) => {
  return (
    <div className={`group select-none`} id={`${id}`} >
      {/* parent has group */}
      <div
        className={`
          relative card mt-9 border-2 rounded-xl w-40  h-70 lg:w-100 lg:h-70
          ${borderColor}  ${textColor} ${hoverBorder} ${hoverText} ${shadowColor}
        `}
      >
        {/* Top small box reacts to parent hover */}
        <div
          className={`
            absolute ${bgColor} top-[-25px] left-1/2 -translate-x-1/2 border-1 w-12 h-14 rounded-4xl lg:w-15 lg:h-18 
            ${borderColor} ${textColor} ${hoverBorder} ${hoverText} ${shadowColor}
          `}
        > <img src={`${image}`} className={`${imgprop} `}   /> </div>

        {/* Title */}
        <div className="absolute lg:text-2xl top-10 lg:top-12 left-1/2 -translate-x-1/2">
          <h1 className="select-none">{head}</h1>
        </div>

        {/* About */}
        <div className="absolute top-19 lg:top-24 left-1 text-center">
          <p className="select-none lg:text-[18px] text-sm">{about}</p>
        </div>
        <div className=  "progress absolute flex lg:left-20  bottom-6 left-2 " >
          <h2 className={`${textColor} ${hoverText} `} >{progress}</h2>
          <div className="h-5 w-23 lg:w-46   absolute left-11 border-2 rounded border-zinc-500 bg-zinc-500/20 group-hover:border-green-500 group-active:border-green-500  " ><div className={`h-4 rounded-xs lg:h-[17px] overflow-hidden absolute ${progw}  ${progwbg} ${shadowColor}`} ></div></div>
        </div>
      </div>
    </div>
  );
};

export default Skillcard;
