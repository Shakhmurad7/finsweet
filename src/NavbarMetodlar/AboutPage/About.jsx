import PageContainer from "../../PageContainer";
import data from "../HomePage/data";
import styles from "./About.module.css";
import AboutCard from "./AboutCard";
import LogoIcon from "./LogoIcon";

const About = () => {
  return (
    <>
      <PageContainer>
        <div className="Big-container">
          <div className={styles.content}>
            <div className={styles["content-left"]}>
              <h3>About us</h3>
              <h2>Our designs solve problems</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className={styles[`content-right`]}>
              <img
                src={"public/img/group-of-people-sitting-indoors-3184360.png"}
              />
            </div>
          </div>

          <div className={styles["content-bottom"]}>
            <div className={styles["content-container-bottom"]}>
              <div className={styles["content-bottom-left"]}>
                <h3>Who we are</h3>
                <h2>Goal focussed</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className={styles["content-bottom-right"]}>
                <h2>Continuous improvement</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <img
              src={
                "./img/man-in-blue-jacket-looking-at-white-board-7413916.png"
              }
            />
          </div>
        </div>

        <section>
          <div className={styles["Big-container"]}>
            <div className={styles["section-top"]}>
              <h2 className={styles["section-top-h2"]}>
                The process we follow
              </h2>

              <div className={styles["section-block-container"]}>
                <div className={styles["section-block"]}>
                  <div className={styles["section-block-top-row"]}>
                    <div className={styles["section-block-item"]}></div>
                    <div className={styles["section-block-border"]}></div>
                  </div>
                  <h2>Planning</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>

                <div className={styles["section-block"]}>
                  <div className={styles["section-block-top-row"]}>
                    <div className={styles["section-block-item"]}></div>
                    <div className={styles["section-block-border"]}></div>
                  </div>
                  <h2>Planning</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>

                <div className={styles["section-block"]}>
                  <div className={styles["section-block-top-row"]}>
                    <div className={styles["section-block-item"]}></div>
                    <div className={styles["section-block-border"]}></div>
                  </div>
                  <h2>Planning</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>

                <div className={styles["section-block"]}>
                  <div className={styles["section-block-top-row"]}>
                    <div className={styles["section-block-item"]}></div>
                    <div className={styles["section-block-border"]}></div>
                  </div>
                  <h2>Planning</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["section-center"]}>
            <div className="Big-container">
              <div className={styles["section-center-container"]}>
                <div className={styles["section-center-row"]}>
                  <div className={styles["section-center-left"]}>
                    <h3>Our Mission </h3>
                    <h2>Inspire, Innovate, Share</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className={styles["section-center-right"]}>
                    <img
                      src={"./img/a-man-standing-in-an-office-7792811.png"}
                    />
                  </div>
                </div>

                <div className={styles["section-center-row"]}>
                  <div className={styles["section-center-right"]}>
                    <img
                      src={"./img/photo-of-women-at-the-meeting-3810789.png"}
                    />
                  </div>
                  <div className={styles["section-center-left"]}>
                    <h3>Our Mission </h3>
                    <h2>Laser focus</h2>
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

          <AboutCard/>

        </section>

        <div className="Big-container">
                <LogoIcon/>
        </div>

        <aside>
          <div className="Big-container">
            <div className={styles["aside-top-text"]}>
              <h2>Meet our team</h2>
            </div>
            <div className={styles["aside-team-container"]}>
              <div className={styles["aside-team-block"]}>
                <div className={styles["aside-img"]}>
                  <img
                    src={
                      "./img/man-in-black-suit-holding-a-calling-card-3785104.png"
                    }
                  />
                  <div className={styles["aside-hover"]}>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
                <h2>John Smith</h2>
                <p>CEO</p>
              </div>
              <div className={styles["aside-team-block"]}>
                <div className={styles["aside-img"]}>
                  <img
                    src={
                      "./img/man-in-white-shirt-wearing-blue-bucket-hat-6626874.png"
                    }
                  />
                  <div className={styles["aside-hover"]}>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
                <h2>Simon Adams</h2>
                <p>CTO</p>
              </div>
              <div className={styles["aside-team-block"]}>
                <div className={styles["aside-img"]}>
                  <img src={"./img/serious-man-3760373.png"} />
                  <div className={styles["aside-hover"]}>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
                <h2>Paul Jones</h2>
                <p>Design Lead</p>
              </div>
              <div className={styles["aside-team-block"]}>
                <div className={styles["aside-img"]}>
                  <img
                    src={
                      "./img/transgender-model-touching-forehead-in-neon-light-7613875.png "
                    }
                  />
                  <div className={styles["aside-hover"]}>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
                <h2>Sara Hardin </h2>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
        </aside>
      </PageContainer>
    </>
  );
};
export default About;
