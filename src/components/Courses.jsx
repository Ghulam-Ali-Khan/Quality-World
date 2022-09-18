import React from 'react'
import "../css/Home.css";
import "../css/Courses.css";
import TN from "../img/images.jpg";
import {useState, useEffect} from "react";
import axios from 'axios';

const Courses = () =>{

const [course, setCourse] = useState([]);
  

useEffect (()=>{

    async function getCourse(){
      try {
        const course = await axios.get("http://127.0.0.1:8000/courses/courses/");
        console.log(course.data);
        setCourse(course.data);
      } catch (error) {
        console.log(error);
      }
    }
         getCourse();
   },[]);


return(
<>

<div className="courses">
  <h1>Quality World Courses</h1>
<div className="grid">

{course.map((output, i)=>
  <div className="content">
    <img src={output.course_img} alt="course" />
    <h3>{output.course_title}</h3>
    <div className="content-row">
    
    <a className='button' href={output.course_url}>View</a>
    
    <span>{output.course_price}</span>
    </div>
  </div>
  )}
</div>
</div>


</>
);



}

export default Courses;