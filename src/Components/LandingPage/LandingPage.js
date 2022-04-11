import React from 'react'
import classes from "./LandingPage.module.css"

 const LandingPage = () => {
  return (
    <div>
        <section className={classes.sectionContainer}> 
            <nav >
                <div className={classes.mainDiv}  >
                    <div style={{margin:'auto'}} >
                        <h1 className={classes.logoHeading}>Travel.co</h1>
                    </div>
                    <div style={{margin:"auto"}}>
                        <a className={classes.aTag}  href="">Home</a>
                        <a className={classes.aTag} href="">BLOG</a>
                        <a className={classes.aTag} href="">CONTACTS</a>
                        <a className={classes.aTag} href="">PAGE1</a>
                        
                        <a className={classes.aTag} href="">PAGE2</a>
                        
                    </div>
                </div>
            </nav>

            <div className={classes.landingText}>
                <div className={classes.lendingcontainer}>
                    <h1 className={classes.mainHeading}>Travel</h1>
                    <p className={classes.paraText}>Here are my favorite travel and adventure quotes, paired with images from my journeys around the world.</p>
                <div>
                <button className={classes.readButton}>Read more</button>
                </div>
                </div>
                
            </div>
        </section>
    </div>
  )
}
export default LandingPage;