import React, { useState,useEffect } from "react";
import Course from './Course.js';
import base_url from "../API/SpringBootApi.js";
import axios from "axios";
import { toast } from "react-toastify";

const Allcourse=()=>{

  useEffect(()=>{
    document.title="All Courses";

  }, []
);

//function to call server
const getAllCoursesFromServer  = () => {
  axios.get(`${base_url}/courses`).then(
    (response) =>{
      //For Success
      console.log(response.data);
      toast.success("Courses has been loaded", {
        position:"bottom-center"
      });
      setCourses(response.data);
      // data is set to useState hooks 
    },
    (error) => {
      //For Error
      console.log(error);
      toast.error("Something went wrong", {
        position:"bottom-center"
      });
    }
  );
  return Response;
};
//Calling Loading course function
useEffect(() => {
  getAllCoursesFromServer()  
  // empty array use for useEffect work for component mount did only not component did update 
  }, []                  
);

// one by one data is came from database and stored into useState hooks
const [courses,setCourses]=useState([]);

// this method is basically use for deleting the course from Allcourse component at a same time
const updateCourses=(id)=>{
  setCourses(courses.filter((c) =>c.id != id));
}

// const [courses,setCourses]=useState([
//   { title:"Spring", description:"Spring framework for java" },
//   { title:"Django", description:"Django framework for python" },
//   { title:"Laravel", description:"Laravel framework for PHP" }
// ] 
// );

  return(
      <div>
          <h3>All Courses</h3>
          <p>List of courses are as follows</p>
          {
              courses.length > 0 ?  courses.map((item)=><Course key={item.id} course={item} update={updateCourses} />)  : "No Course"
              // response['data'].length > 0 ?  response['data'].map((item)=><Course key={item.id} course={item.title} />)  : "No Course"
            }
      </div>

  );
};

export default Allcourse;