import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{
    return(
        
        <ListGroup>
            <Link className="list-group-item list-group-item-action" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" to="/about-us" >About Us</Link>
            <Link className="list-group-item list-group-item-action" to="/view-courses" >View Courses</Link>
            <Link className="list-group-item list-group-item-action" to="/add-course" >Add Course</Link>
            <Link className="list-group-item list-group-item-action" to="/contact-us" >Contact Us</Link>
        </ListGroup>  
    );

};
export default Menus;
