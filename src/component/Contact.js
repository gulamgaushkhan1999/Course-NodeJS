import React from "react";
import { useEffect } from "react";

const Contact=()=>{
    useEffect(()=>{
        document.title="Contact Us"
      }, [] );
    
    return(
        <h1>This is contact page</h1>
    );
}
export default Contact;
