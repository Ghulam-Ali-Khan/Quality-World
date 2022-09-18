import React from 'react';
import Logo from "../img/Logo3.png";
import "../css/NavBar.css"
import { useState} from 'react';
import { Link } from 'react-router-dom';
// import"../../node_modules/bootstrap/dist/css/bootstrap.min.css"


const NavBar = () =>{
const [show, changeShow] = useState("flex");



return(<>

            <div className="nav">

                <div className="res-nav">
                <div className="logo"><img src={Logo} alt="logo" /></div>
                
                
                <div class="res-icon" onClick = {(e)=>{if(show==="none"){changeShow("flex")} else{changeShow("none")}}} >
                <i class="fa fa-bars"></i>
                 </div>
                
                </div>

    
 
                            
       <div className="links" style={{display:show}} >
       <Link className="link" to="/" >Home</Link>
       <Link className="link" to="/courses">Courses</Link>
       <Link className="link" to="/blogs">Blogs</Link>
       <Link className="link" to="/about" >About</Link>
      </div>


 
           
              
                
                
            </div>    
        
        
        
        
        
    </>);


}


export default NavBar;