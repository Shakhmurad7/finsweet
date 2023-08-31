import React from 'react'
import styles from "./About.module.css";
function LogoIcon() {
  return (
    <div className={styles["page-container"]}>
    <div className={styles["page-row"]}>
      <h2>100.000+</h2>
      <p>Finsweet Users</p>
    </div>
    <img src={"./img/Logo 1.png"} />
    <img src={"./img/Logo 2.png"} />
    <img src={"./img/Logo 3.png"} />
    <img src={"./img/Logo 4.png"} />
    <img src={"./img/Logo 5.png"} />
  </div>
  )
}

export default LogoIcon