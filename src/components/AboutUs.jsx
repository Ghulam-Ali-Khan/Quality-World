import React from "react";
import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { MyContext } from "./MyContext";
// import { AppContext } from "../Context";
import axios from 'axios';
import "../index.css";
const AboutUs = () =>{


// const history = useHistory();
const [name, setName] = useState("");
const [prof, setProf] = useState("");
const [comment, setComment] = useState("");



// const onInputChange = e =>{

//     setData({ ...user, [e.target.name]: e.target.value});

// };

const  AddTesto = async () =>{
    let formField = new FormData();

    formField.append('test_name', name);
    formField.append('test_profession', prof);
    formField.append('test_comment', comment);
    
    fetch('http://127.0.0.1:8000/api/testonomial/',{
        
        method: 'post', 
        body : JSON.stringify(formField),
        headers:{
               'Content-type':'application/json; charset=UTF-8',
        },
    })
}

// const onSubmit = async e =>{

//    e.preventDefault();

//    await axios.post("http://localhost:3000/testonomials", user);
//    setData({name:"",
//    prof:"",
//     des:"",});
//    alert('Data Inserted');

// };

return(

    <>
    <div className="test">
    
    
    <form method="POST" action="AboutUs.jsx" >
    {/* <input type="text" value={name}  name="name" id="name" placeholder="name" onChange={e => onInputChange(e)}  />
    <input type="text" value={prof} name="prof" id="prof" placeholder="profession" onChange={e => onInputChange(e)} />
    <input type="text" value={des} name="des" id="des" placeholder="Des" onChange={e => onInputChange(e)} /> */}


     <input type="text" value={name}  name="name" id="name" placeholder="name" onChange={(e)=>setName(e.target.value)}  />
    <input type="text" value={prof} name="prof" id="prof" placeholder="profession" onChange={(e)=>setProf(e.target.value)} />
    <input type="text" value={comment} name="des" id="des" placeholder="Des"  onChange={(e)=>setComment(e.target.value)}/>
    <input type="submit" value="Submit" onClick={AddTesto} />
    </form>

    </div>
    
    
    </>
)

}

export default AboutUs; 