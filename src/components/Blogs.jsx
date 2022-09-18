import React from "react";
import "../css/Blogs.css";
import TN from "../img/images.jpg";
import Blog from './Blog';
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';



const Blogs = () => {


const [blog, setBlog] = useState([]);
  

useEffect (()=>{

    async function getBlog(){
      try {
        const blog = await axios.get("http://127.0.0.1:8000/blogs/blogs/");
        console.log(blog.data);
        setBlog(blog.data);
      } catch (error) {
        console.log(error);
      }
    }
         getBlog();
   },[]);


//     function lineLimit()
//     {
//     var para = document.getElementsByClassName("description")[0];
//     var text = para.innerHTML;
//     para.innerHTML = "";
//     var words = text.split(" ");
//     for (let i = 0; i < 25; i++) {
//     para.innerHTML += words[i] + " ";
//     }
//     para.innerHTML += "...";
//     }

//     lineLimit();

    return(
     <>
       
     <div className="blog-container">

        <div className="blog-section">
 
 
        {blog.map((output, i)=>
            <Link className="blog" to="/blog" onClick={(e)=>{
                console.log("you clicked my boye");
                 return(<Blog title={this.output.blog_title} desp={this.output.blog_desp} img={this.output.blog_img}  category={this.output.blog_cat} date={this.output.blog_date}  />);
                 }}>
                <div className="blog-img">
                <img src={output.blog_img} alt="blog image" />
                </div>
                <div className="blog-content">
                    <h3>
                        {output.blog_title}
                    </h3>
                    <p className="description">
                     {output.blog_desp}   
                    </p>
                    <p className="category">
                     {output.blog_cat}
                    </p>
                    <span>
                        Date . {output.blog_date}
                    </span>
                </div>
            </Link>
        
        )}

            
        </div>
        <div className="ad-section comment-section"></div>

     </div>


     </>
    );


}

export default Blogs;