import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
                OnlineNews App made By -{" "}
                <a href="https://github.com/GnanaDarphanMG" >
                    GnanaDarphanMG
                </a>
            </span>
            <hr style={{width: "90%"}}/>
            <div className="iconContainer">
             <a href="https://www.linkedin.com/in/gnanadarphan-mg-500964233/" >
             <i class="fa-solid fa-link fa-2x"></i>
                 </a>        
                <a href="https://github.com/GnanaDarphanMG">
                <i class="fa-brands fa-github fa-2x"></i>
                 </a>
                 <a href="https://twitter.com/GnanaDarphan_MG" >
                 <i class="fa-brands fa-twitter fa-2x"></i>
             </a>
      </div>
    </div>
  );
};

export default Footer;
