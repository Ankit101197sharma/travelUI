import React from "react";
import classes from "./TourDiscount.module.css";

const TourDiscount = () => {
  return (
    <div>
      <section className={classes.discountSec}>
        <div className={classes.textItem}>
          <div className={classes.textItem1}>
            <h2 className={classes.titleText}>Discount 30% - 40%</h2>
            <p className={classes.cardText}>
              Curabitur blandit tempus porttitor. Maecenas faucibus mollis
              interdum. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit.
            </p>
            <button className={classes.btn}>See tours</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TourDiscount;
