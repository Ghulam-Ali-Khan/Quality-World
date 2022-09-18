import React from "react";
import "../css/Home.css";
import "../css/Courses.css";
import BG from "../img/bg.jpg";
import TN from "../img/images.jpg";
import {useState, useEffect} from "react";
import axios from 'axios';
const Home = () =>{

const [testonomial, setTestonomial] = useState([]);

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

// const loadUsers = async () =>{

//   const result = await axios.get("http://localhost:7882/react-blogs/react-php.php"); 
//   setUser(result.data.phpcontent);

//   console.log(result.data.phpcontent);
// }

useEffect (()=>{

 async function getTestonomials(){
   try {
     const testonomial = await axios.get("http://127.0.0.1:8000/api/testonomial/");
     console.log(testonomial.data);
     setTestonomial(testonomial.data);
   } catch (error) {
     console.log(error);
   }
 }
      getTestonomials();
},[]);


return(
    <>
    
    <div className="header">
       
       {/* <div className="message">
          <h3>
              Quality makes you unique
          </h3>
         <span>Ghulam Ali</span>
       </div> */}


    </div>
    






    <div className="courses">
  <h1>Latest Courses</h1>
<div className="grid">

{course.map((output, i)=>
<>
{
i>=3 ? (
<></>
)   : (
  <div className="content">  

  <img src={output.course_img} alt="course" />
  <h3>{output.course_title}</h3>
  <div className="content-row">
  
  <a className='button' href={output.course_url}>View</a>
  
  <span>{output.course_price}</span>
  </div>
  
</div>
)}
  
</>  
  )}
</div>
</div>








<div className="latest-courses">
  <h1>Testonomials</h1>
<div className="test-row">
  
  {testonomial.map((output, i)=>
  
  <div className="testonomial">
    
    <h2>"</h2>
    <p>{output.test_comment}</p>
    <h5>{output.test_name}</h5>
    <h6>{output.test_profession}</h6>
  </div>
  )}

  
</div>

</div>

    </>
)

}

export default Home; 