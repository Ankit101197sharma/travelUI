import React from 'react'
import classes from "./Jorney.module.css"
import {ImLocation} from "react-icons/im";

import {jorneyData} from "../../Data"
// import { FaLocation } from "react-icons/fa";

 function Jorney() {
  return (
    <div>
        <section className={classes.jorneySection}>
           
                <div>
                    <h2 className={classes.heading2}>Start Your Jorney</h2>
                    <p className={classes.text2}>The most searched countries in March</p>
                </div>
                <div  className={classes.mainDiv} >
        {jorneyData.map((item)=>{
          return(
            <div className={classes.imgGrid}  >
            <div className={classes.imgContainer}>
              <div className={classes.acard}>
              <img  className={classes.imgd} src={item.thumbnail} alt="fgs" />
                  <div style={{display:'flex', padding:'20px'}}>
                  
              <span className={classes.icon}><ImLocation/></span> 
           <p className={classes.heading} >{item.cityName}</p>
           
                  </div>
              
              </div>
         </div>
         </div>   
          )
        })}
            </div>
        </section>
        
    </div>

  )
}
export default Jorney;