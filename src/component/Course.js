import axios from "axios";
import React from "react";
import { 
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
 } from "reactstrap";
import base_url from "../API/SpringBootApi";
import { toast } from "react-toastify";

 const Course=({course, update })=>{   
     const deleteCourse=(id) =>{
        axios.delete(`${base_url}/courses/${id}`).then(
           (response)=>{
            toast.success("Courses has been Deleted", {
              position:"bottom-center"
            });
            update(id);
           },
           (error)=>{
            toast.error("Course not Deleted", {
               position:"bottom-center"
             });

           }
        )
     }
     return(
        <Card className="text-center my-auto">
           <CardSubtitle className="text-bold display-6" >{ course.title }</CardSubtitle>
           <CardText className="text-bold display-7">{ course.description }</CardText>
           <Container>
               <Button class="btn btn-primary mr-3">Update</Button>
               <Button color="danger outline ml-3" onClick={() =>{
                  deleteCourse(course.id);
               }}
               >Delete</Button>
           </Container>

        </Card>
     );
}

 export default Course;