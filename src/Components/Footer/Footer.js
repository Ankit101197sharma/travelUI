import React from "react";
// import { footer } from "../../Data";
import classes from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
 
  FaLinkedin,
  
} from "react-icons/fa";

function Footer() {
  return (
      <>
    <section className={classes.footerSec}>
      <div className={classes.footerContent}>
              <div>
                <div>
                  <h3 className={classes.footerHeading}>Travel.co</h3>
                </div>
                <div>
                <div className={classes.socialIcon1}>
                  <a className={classes.iconTag} href="">
                    <FaFacebookF />
                  </a>
                  <a className={classes.iconTag} href="">
                    <FaInstagram />
                  </a>
                  <a className={classes.iconTag} href="">
                    <FaTwitter />
                  </a>

                  <a className={classes.iconTag} href="">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
                <div className={classes.footerText}>
                  <p>Travel makes one modest. You see what a tiny place you occupy in the world.</p>
                </div>
              </div>
              
          
       
      </div>
    </section>
    <div className={classes.footer2}>
           <p><a href="/">website Templates </a> 
             created with <a href="/">website Builder Software</a></p> 
    </div>
    </>
  );
}
export default Footer;
