import React from 'react'
import classes from './Activity.module.css'
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaGooglePlusG} from "react-icons/fa"

 const  Activity=()=> {
  return (
    <div  >
        <div className={classes.rightDiv1} style={{display:'flex', justifyContent:'space-around', margin:'auto', padding:'24px',textAlign:'left'}} >
        <div style={{width:'100%', margin:'auto'}}  >
        <h3 className={classes.tourHeading} >Browse Tours By Activity</h3>
            <div className={classes.rightDivContent} >
            
            <div  >
            
                <ul>
                    <li><a className={classes.listTag} href="/">Outdoor Activites</a></li>
                    <li><a className={classes.listTag} href="/">Cultural & Thematic Tours</a></li>
                    <li><a className={classes.listTag} href="/">Family Friendly Tours</a></li>
                    <li><a className={classes.listTag} href="/">Holiday & Seasonal Tours</a></li>
            
                </ul>
                
            </div>
            <div style={{textAlign:'left', margin:'auto'}}>
                <ul>
                    <li><a className={classes.listTag} href="/">City Tours</a></li>
                    <li><a className={classes.listTag} href="/">Indulgence & Luxury Tours</a></li>
                    <li><a className={classes.listTag} href="/">Relaxation Tours</a></li>
                    <li><a className={classes.listTag} href="/">Wild & Adventure Tours</a></li>
                </ul>  
            </div>
        </div>
        
    </div>
    <div style={{width:'50%'}}  >
        <div >
        <h3 className={classes.tourHeading1}>Newsletter</h3>
        <p style={{color:'#999999'}}>Subscribe for updates & promotions</p>
        </div>
      <div>
          
          <form class="row g-3">
  <div class="col-auto">
   
    <input style={{backgroundColor:'#f2f2f2', padding:'12px'}} type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
  </div>
  
  <div class="col-auto">
    <button style={{padding:"10px"}} type="submit" class="btn btn-primary mb-3 ">Submit</button>
  </div>
</form>
         
<div className={classes.socialIcon}>
    
        <a className={classes.iconTag} href=""><FaFacebookF/></a>
        <a className={classes.iconTag} href=""><FaInstagram/></a>
        <a className={classes.iconTag} href=""><FaTwitter/></a>
        <a className={classes.iconTag} href=""><FaYoutube/></a>
        <a className={classes.iconTag} href=""><FaLinkedin/></a>
        <a className={classes.iconTag} href=""><FaGooglePlusG/></a>
    </div>
         
      </div>
    </div>
   
        </div>
        
    
</div>
  )
}
export default Activity;