import React from "react";

const Blog =(props)=>{

    return(
<>
<h1>{props.title}</h1>
<p>{props.desp}</p>
<h3>{props.category}</h3>
<img src={props.img} alt="img" />
</>

    );


}

export default Blog;