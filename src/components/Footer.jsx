import React from "react";
import "../css/Footer.css";
// import {FaFacebook, FaInstagram}  from 'react-icons/fa';
import FB from "../img/facebook.png";
import IG from "../img/instagram.png";
import FI from "../img/fiverr.png";
import LD from "../img/linkedin.png";
import footerLogo from "../img/logowhite.png";

const Footer =()=>{
//  const facebook ={color:"blue", background:"white", borderRadius:"50%", border:"none"};
    return(<>
    
    
    <div className="footer">

     <div className="social-icons">
     <a href="www.facebook.com" target="_blank"><img src={FB}  alt="facebook"   /></a>
     <a href="www.instagram.com" target="_blank"><img src={IG}  alt="instagram"   /></a>
     <a href="www.linkedin.com" target="_blank"><img src={LD}  alt="linkedin"   /></a>
     <a href="www.fiverr.com" target="_blank"><img src={FI}  alt="fiverr"   /></a>
    </div>
    

    <div className="footer-links">
       <a className="a" href="#">About</a>
       <a className="a" href="#">Privacy</a>
       <a className="a" href="#">Need Help?</a>
       <a className="a" href="#">Terms of Use</a>
    </div>


    <div className="footer-logo">
        <img src={footerLogo} alt="logo" />
    </div>




     <div className="official-rights">
         <p>All copyrights&copy; reserved by Quality World.  </p>
     </div>

    </div>
    
    
    </>
    );



    
}

export default Footer;