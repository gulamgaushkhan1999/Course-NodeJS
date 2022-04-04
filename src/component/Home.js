import React from "react";
import { useEffect } from "react";



const Home=()=>{
    useEffect(()=>{
        document.title="Home"
      }, [] );
    
    return(
        
        <div className="container-fluid bg-success text-light p-2">
            <div className="container bg-dark p-5 text-center">
                 <h1>Are you Intresting To Learn New Technology??</h1>
                 <hr />
                 <h2>This Is Right Place</h2>
                 
             </div>
         </div>
        


    );
}
export default Home;
