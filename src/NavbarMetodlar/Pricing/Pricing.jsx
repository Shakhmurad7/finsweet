import React from 'react'
import PageContainer from '../../PageContainer'
import style from './Pricing.module.css'
import Accardion from '../HomePage/Accardion'

function Pricing() {
  return (
    <PageContainer>
        <section>
            <div className={style['section-top-text']}>
                <h2>Our Pricing Plans</h2>
                <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
            </div>

<div className="Big-container">

            <div className={style["section-container"]}>
                <div className={style["sectino-block"]}>
                    <div className={style["section-row-text"]}>
                        <h2>$299</h2>
                        <p>Per Design</p>
                    </div>
                    <div className={style["section-text-center"]}>
                        <h3>Landing Page </h3>
                        <p>When you’re ready to go beyond prototyping in Figma, </p>
                    </div>
                    <div className={style["section-end-container"]}>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>All limited links</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Own analytics platform</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Chat support</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img className={style["img-color"]} src={"./img/Pointer.svg"}/>
                            <p className={style["p-color"]}>Optimize hashtags</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img className={style["img-color"]} src={"./img/Pointer.svg"}/>
                            <p className={style["p-color"]}>Unlimited users</p>
                        </div>
                    </div>

                <div className={style["section-a-tag"]}>
                    <a href="">
                     Get started
                    </a>
                </div>
                </div>


                <div className={style["sectino-block"]}>
                    <div className={style["section-row-text"]}>
                        <h2>$399</h2>
                        <p>Multi Design</p>
                    </div>
                    <div className={style["section-text-center"]}>
                        <h3>Website Page </h3>
                        <p>When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help. </p>
                    </div>
                    <div className={style["section-end-container"]}>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>All limited links</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Own analytics platform</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Chat support</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Optimize hashtags</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Unlimited users</p>
                        </div>
                    </div>

                <div className={style["section-a-tag"]}>
                    <a href="">
                     Get started
                    </a>
                </div>
                </div>


                <div className={style["sectino-block"]}>
                    <div className={style["section-row-text"]}>
                        <h2>$499 +</h2>
                        <p>Per Design</p>
                    </div>
                    <div className={style["section-text-center"]}>
                        <h3>Complex Project </h3>
                        <p>When you’re ready to go beyond prototyping in Figma,  </p>
                    </div>
                    <div className={style["section-end-container"]}>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>All limited links</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Own analytics platform</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Chat support</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Optimize hashtags</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Unlimited users</p>
                        </div>
                        <div className={style["section-end-text"]}>
                            <img src={"./img/Pointer.svg"}/>
                            <p>Assist and Help</p>
                        </div>
                    </div>

                <div className={style["section-a-tag"]}>
                    <a href="">
                     Get started
                    </a>
                </div>
                </div>
            </div>
</div>
<div/>
        </section>


    {/* -----accardion----- */}
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

export default Pricing