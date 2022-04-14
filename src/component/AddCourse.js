import { Button } from "bootstrap";
import React, { useState } from "react";
import { Container, Form, FormGroup } from "reactstrap";
import { useEffect } from "react";
import axios from "axios";
import base_url from "../API/SpringBootApi";
import { toast } from "react-toastify";

const AddCourse=()=>{
  useEffect(()=>{document.title="Add Course"}, []);

const [course, setCourse] = useState([{}]);

//form handler function
const handleForm=(e)=>{
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
    // to remove default functionality
};

//creating function to post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`, data).then(
            (response) =>{
              //For Success
              console.log(response);
              console.log("success");
              toast.success("Course Addedd Successfully", {
                position:"bottom-center"});
              setCourse({ id: "", title: "", description: "" });
            },
            (error) => {
              //For Error
              console.log(error);
              console.log("error");
              toast.error("Something Went Wrong", {
                position:"bottom-center"
              });
              setCourse({ id: "", title: "", description: "" });
            }
          );
    };
    
    return(
        <div className="text-center container">
            <h1 className="text-center my-2">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup className="row">
                    <label for="courseID" className="row">Course ID</label>
                    <input
                      type="text"
                      placeholder="Enter Course Id"
                      name="courseId"
                      id="courseId" 
                      onChange={(e) => {
                          setCourse({ ...course, id:e.target.value});
                      }}
                    ></input>
                </FormGroup>
                <FormGroup className="row">
                    <label for="courseTitle" className="row">Course Title</label>
                    <input
                      type="text"
                      placeholder="Enter Course Title"
                      name="courseTitle"
                      id="courseTitle"
                      onChange={(e) => {
                        setCourse({ ...course, title:e.target.value});
                    }}
                    />
                </FormGroup>
                <FormGroup className="row">
                    <label for="courseDesc" className="row">Course Description</label>
                    <textarea placeholder="Enter Course Description" name="courseDesc" id="courseDesc" style={{height:150}} onChange={(e) => {
                          setCourse({ ...course, description:e.target.value});
                      }}/>
                </FormGroup>
                <FormGroup >
                    <button type="submit" className="btn btn-success">Add Course</button>
                    <button type="reset" className="btn btn-warning ml-10">Clear</button>
                </FormGroup>
            </Form>
        </div>
    );

};
export default AddCourse;
