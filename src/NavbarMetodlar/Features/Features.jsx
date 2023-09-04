import React from 'react'
import PageContainer from '../../PageContainer'
import style from './Features.module.css'
import LogoIcon from '../AboutPage/LogoIcon'
import AboutCard from '../AboutPage/AboutCard'
import Accardion from '../HomePage/Accardion'
import styles from "../AboutPage/About.module.css";
import { Link } from 'react-router-dom'

function Features() {
  return (
    <PageContainer>

        ---NavBar---
        <div className={style['Navbar']}>
        <nav>
        <div className="Big-container">
          <div className="nav-container">
            <div className="nav-left">
              <h2>All the features you need</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="nav-left-row">
                <h3>View our work</h3>
                <div className={style['nav-left-row-icon']}>
                  <Link to={"/pricing"}><h4>View Pricing</h4></Link>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="nav-right">
              <img src={"./img/Feature Hero Illustration.svg"} />
            </div>
          </div>
        </div>
      </nav>
        </div>

    {/* ---LogoICon--- */}
        <LogoIcon/>


    {/* ---AboutCard--- */}
        <AboutCard/>


 {/* ----Section-card----- */}
    <div className={styles["section-center"]}>
            <div className="Big-container">
              <div className={styles["section-center-container"]}>
                <div className={styles["section-center-row"]}>
                  <div className={styles["section-center-left"]}>
                    <h3>Use Client-first </h3>
                    <h2>Top agencies and freelancers around the world use Client-first</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className={styles["section-center-right"]}>
                    <img
                      src={"./img/man-explaining-problems-to-faceless-psychologist-7176030.png"}
                    />
                  </div>
                </div>

                <div className={styles["section-center-row"]}>
                  <div className={styles["section-center-right"]}>
                    <img
                      src={"./img/a-man-working-in-a-call-center-8867431.png"}
                    />
                  </div>
                  <div className={styles["section-center-left"]}>
                    <h3>Free Revision Rounds </h3>
                    <h2>Get free Revisions and one week of free maintenance</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

    <div className={styles["section-center"]}>
            <div className="Big-container">
              <div className={styles["section-center-container"]}>
                <div className={styles["section-center-row"]}>
                  <div className={styles["section-center-left"]}>
                    <h3>24/7 Support</h3>
                    <h2>Working with us, you will be getting 24/7 priority support</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className={styles["section-center-right"]}>
                    <img
                      src={"./img/photo-of-man-holding-a-book-927022.png"}
                    />
                  </div>
                </div>

                <div className={styles["section-center-row"]}>
                  <div className={styles["section-center-right"]}>
                    <img
                      src={"./img/person-using-macbook-pro-3861964.png"}
                    />
                  </div>
                  <div className={styles["section-center-left"]}>
                    <h3>Quick Delivery</h3>
                    <h2>Guranteed 1 week delivery for standard five pager website</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> 

    {/* ---Accardion---- */}
    <div className="Big-container">
    <div className="accardion-container">
            <div className="accardion-left">
              <h2>Frequently asked questions</h2>
              <p>Contact us for more info</p>
            </div>
            <div className="accardion-right">
              <Accardion />
            </div>
    </div>
    </div> 

    </PageContainer>
  )
}

export default Features