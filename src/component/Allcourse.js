import React, { useState,useEffect } from "react";
import Course from './Course.js';
import base_url from "../API/SpringBootApi.js";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse=()=>{

  useEffect(()=>{
    document.title="All Courses"
  }, []
);

//function to call server
const getAllCoursesFromServer  = () => {
  axios.get(`${base_url}/courses`).then(
    (response) =>{
      //For Success
      console.log(response);
      toast.success("Courses has been loades", {
        position:"bottom-center"
      });
    },
    (error) => {
      //For Error
      console.log(error);
      toast.error("Something wrong", {
        position:"bottom-center"
      });
    }
  );
  return Response;
};
//Calling Loading course function
useEffect(() => {
  getAllCoursesFromServer()
  }, []
);


// const [courses,setCourses]=useState([
   
//   ] 
// );
const [courses,setCourses]=useState([
  { title:"Spring", description:"Spring framework for java" },
  { title:"Django", description:"Django framework for python" },
  { title:"Laravel", description:"Laravel framework for PHP" }
] 
);

  return(
      <div>
          <h3>All Courses</h3>
          <p>List of courses are as follows</p>
          {
              courses.length > 0 ?  courses.map((item)=><Course key={item.id} course={item} />)  : "No Course"
              // response['data'].length > 0 ?  response['data'].map((item)=><Course key={item.id} course={item.title} />)  : "No Course"
            }
      </div>

  );
};

export default Allcourse;