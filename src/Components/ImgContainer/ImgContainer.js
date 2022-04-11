import React from 'react'
import classes from "./ImgContainer.module.css"
import {SiYourtraveldottv} from "react-icons/si"
import {ImLocation2} from "react-icons/im"

 function ImgContainer() {
  return (
      <section className={classes.imgSec}>
            <div className={classes.sheet1}>
                
                <div className={classes.sheet2}>
                <h1>WE Choose us</h1>
                <p className={classes.paraText0}>The gladdest moment in human life, me thinks, is a departure into unknown lands.</p>
                        <div style={{margin:'-10px'}}>
                            <div className={classes.uRow}>
                                <div className={classes.sizeImg}>
                                    <div className={classes.uRow}>
                                        <div className={classes.uImgBig}>
                                            <div className={classes.ImgCont}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.sizeImg}>
                                    <div className={classes.uCol}>
                                        <div className={classes.imgSize30}>
                                            <div className={classes.uRow}>
                                                <div className={classes.uImg2}>

                                                </div>
                                                <div className={classes.uImgText}>
                                                    <div className={classes.uCon1}>
                                                        <span className={classes.icon}><SiYourtraveldottv/></span>
                                                        <h4 className={classes.text4}>Passionate Travel</h4>
                                                        <p className={classes.paraText1}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={classes.imgSize30}>
                                            <div className={classes.uRow}>
                                            <div className={classes.uImgText}>
                                                    <div className={classes.uCon1}>
                                                        <span className={classes.icon}><ImLocation2/></span>
                                                        <h4 className={classes.text4}>Passionate Travel</h4>
                                                        <p className={classes.paraText1}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia</p>
                                                    </div>
                                                </div>
                                                <div className={classes.uImg3}>

                                                </div>
                                                

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
      </section>
    
  )
}
export default ImgContainer;