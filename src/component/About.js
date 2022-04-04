import React from "react";
import { useEffect } from "react";

const About=()=>{
    useEffect(()=>{
        document.title="About Us"
      }, [] );
    
    return(
        <h1>This is About Page</h1>
    );
};
export default About;
