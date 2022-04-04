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

 const Course=({course})=>{
     return(
        <Card className="text-center my-auto">
           <CardSubtitle className="text-bold display-6" >{ course.title }</CardSubtitle>
           <CardText className="text-bold display-7">{ course.description }</CardText>
           <Container>
               <Button class="btn btn-primary mr-3">Update</Button>
               <Button color="danger outline ml-3">Delete</Button>
           </Container>

        </Card>
     );
}

 export default Course;