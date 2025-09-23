import React from "react";
import Orb from "./Orb"
import TextType from "./TextType"
import RotatingText from './RotatingText'

const Section1 = () => {
    return (
        <section className=" welcome relative flex select-none  w-full bg-gradient-to-b from-black to-[#14225f]">
            <Orb/> 
            <div className=" absolute top-50 w-full text-center left-1/2 -translate-x-1/2">
                            <div className="text-center" ><h1 className=" Aantriksh text-white text-5xl  ">Hi,</h1></div>
                            <div className="text-center" ><h1 className=" mt-2 Aantriksh text-white text-5xl">I'm Aantriksh</h1></div>
                <TextType 
                                        text={[
                                                "Welcome to my space",
                                                "Where creative innovation meets design",
                                                "Building advanced web solutions",
                                                "Seamless user experience"
                                                ]}
                                        typingSpeed={75}
                                        pauseDuration={1500}
                                        showCursor={true}
                                        cursorCharacter="|"
                                        /></div>

            <div className=" MERN absolute top-110 flex left-5" >
                <h1 className="text-white text-4xl md-2" >Expertise in</h1>
                <RotatingText
                            texts={[ 'UI/UX', 'React', 'MERN','API']}
                            mainClassName="px-2 ml-1 sm:px-2 md:px-3 bg-gradient-to-r from-cyan-700 via-purple-800 to-pink-800 text-white overflow-hidden py-0.5 sm:py-0.5 md:py-2 justify-center items-end  rounded-lg"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.025}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2000}/>
            </div>
            <div className="absolute top-120 text-sm  left-6"><p className="text-white " >Available for Full time roles , freelance projects <br/>and collaborations</p></div>
        </section>
    );
};

export default Section1;