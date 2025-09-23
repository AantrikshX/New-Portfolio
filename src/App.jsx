import React from "react";
import Section1 from "./components/section1";
import Section2 from "./components/section2"
import Section3 from "./components/section3"
import Nav from "./components/navbar"
const App =()=>{
    return(
        <>
        <Nav/>
        <Section1 />
        <Section2/>
        <Section3/>

        </>
    )
}

export default App