import React from 'react'
import PageContainer from '../../PageContainer'
import style from './Features.module.css'
import styles from '../AboutPage/About.module.css'
import LogoIcon from '../AboutPage/LogoIcon'
import AboutCard from '../AboutPage/AboutCard'
import Accardion from '../HomePage/Accardion'

function Features() {
  return (
    <PageContainer>

        {/* ---NavBar--- */}
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
                  <h4>View Pricing</h4>
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