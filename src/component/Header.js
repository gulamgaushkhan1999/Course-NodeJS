import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name,title }) {
    return (
        /*
        <div style={ {background:"green", width:900} }>
            <h1> {title} </h1>
            <p>
                This is my header component for learning purpose 
            </p>
            <p>
               <h3>  My Name is {name} </h3>
            </p>
        </div>
       */
        <div>
            <Card className="my-2 bg-warning container-fluid">  
                <CardBody>
                      <h1 className="text-center my-2 display-4">Welcome to AV Industries</h1>
                </CardBody>
            </Card>
        </div>
     
    );
}
export default Header;




