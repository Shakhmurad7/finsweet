import React from 'react'
import styles from "./About.module.css";
import data from "../HomePage/data";
function AboutCard() {
  return (
    <div className={styles["section-end"]}>
    <div className={styles["section-end-top-text"]}>
      <h2>The benefits of working with us</h2>
    </div>
    <div className="section-end-card">
      <div className="Card-container">
        {data.slice(0, 3).map(({ id, imge, text, item }) => {
          return (
            <div className={styles["card-about"]}>
              <img src={`/img/${imge}`} />
              <h2>{item}</h2>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default AboutCard