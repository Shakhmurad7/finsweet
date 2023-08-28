import Navbar from "../../Pages/Navbar"
import PageContainer from "../../PageContainer"
import "./Style.css"
import imgContent1 from "../../assets/img/pointer 1.svg"
import imgContent2 from "../../assets/img/pointer 1.png"
import imgContent3 from "../../assets/img/pointer 1 (2).png"
import imgContent4 from "../../assets/img/pointer 1 (1).png"
import imgProject1 from "../../assets/img/Card.png"
import imgProject02 from "../../assets/img/Rectangle 1313.png"
import imgProject03 from "../../assets/img/Card (1).png"
import imgSection from '../../assets/img/woman-writing-on-paper-3228878.png'
import HomeCard from "./HomeCard"
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgSwiper from '../../assets/img/woman-in-collared-shirt-774909.svg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Accardion from "./Accardion"
import AsideData from "./AsideData"





const Home =()=>{

    return(
        <>
        <PageContainer>
            <Navbar/>
                <div className="Big-container">
                    {/* ---content--- */}
                    <div className="content">
                        <div className="content-left">
                            <h2>How we work</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className="content-left-row">
                                <h4>Get in touch with us</h4>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="content-right">
                            <div className="content-right-row">
                                <div className="content-block">
                                    <img src={imgContent1}/>
                                    <h3>Strategy</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                                <div className="content-block">
                                    <img src={imgContent2}/>
                                    <h3>Wireframing</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                            </div>
                            <div className="content-right-row">
                                <div className="content-block">
                                    <img src={imgContent3}/>
                                    <h3>Design</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                                <div className="content-block">
                                    <img src={imgContent4}/>
                                    <h3>Development</h3>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---project--- */}
                    <div className="project">
                        <div className="project-top-text">
                            <h2>View our projects</h2>
                            <div className="project-top-text-row">
                                <p>View More</p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="project-container">
                            <div className="project-left">
                                <img src={imgProject1} />
                                <div className="project-block-on-container">
                                    <h2>Workhub office Webflow Webflow Design</h2>
                                    <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                    <div className="project-block-row-icon">
                                        <p>View project</p>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>

                            </div>
                            <div className="project-right">
                                <div className="projecr-block">
                                    <img src={imgProject02} />
                                    <div className="project-on-right-block">
                                        <h2>Unisaas Website Design</h2>
                                        <div className="project-block-row-icon">
                                        <p>View project</p>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                                    </div>
                                </div>
                                <div className="projecr-block1"><img src={imgProject03}  /></div>
                            </div>
                        </div>
                    </div>
                 </div>


                 <div className="Card-Big-Container">
                    <div className="Big-container">
                        <div className="card-item-top">

                                <div className="Card-top-text">
                                    <h3>Features</h3>
                                    <h2>Design that solves problems, one product at a time</h2>
                                 </div>

                        </div>
                        <HomeCard/>
                    </div>


                 </div>
                 <div className="Big-container">
                    <div className="Swiper-container">

                    <div className="Swiper-left-contente">
                        <h1>What our clients say about us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                    </div>
                    <Swiper
                          modules={[Navigation, Pagination,]}
                     spaceBetween={50}
                     slidesPerView={1}
                     navigation
                     pagination={{ clickable: true }}
                     loop={true}
                     onSlideChange={() => console.log('slide change')}
                     onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide><div className="Swiper-content">
                            <h1>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h1>
                            <div className="swiper-img">
                                <img src={imgSwiper}/>
                                <div className="swiper-text-row">
                                    <h3>Jenny Wilson</h3>
                                    <p>Vice President</p>
                                </div>
                            </div>
                                        </div>
                            </SwiperSlide>
                        <SwiperSlide><div className="Swiper-content">
                            <h1>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h1>
                            <div className="swiper-img">
                                <img src={imgSwiper}/>
                                <div className="swiper-text-row">
                                    <h3>Jenny Wilson</h3>
                                    <p>Vice President</p>
                                </div>
                            </div>
                                        </div></SwiperSlide>
                        <SwiperSlide><div className="Swiper-content">
                            <h1>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h1>
                            <div className="swiper-img">
                                <img src={imgSwiper}/>
                                <div className="swiper-text-row">
                                    <h3>Jenny Wilson</h3>
                                    <p>Vice President</p>
                                </div>
                            </div>
                                        </div></SwiperSlide>
                        <SwiperSlide><div className="Swiper-content">
                            <h1>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h1>
                            <div className="swiper-img">
                                <img src={imgSwiper}/>
                                <div className="swiper-text-row">
                                    <h3>Jenny Wilson</h3>
                                    <p>Vice President</p>
                                </div>
                            </div>
                                        </div></SwiperSlide>
                        </Swiper>
                    </div>

                {/* ----Accardion---- */}
                    <div className="accardion-container">
                        <div className="accardion-left">
                            <h2>Frequently asked questions</h2>
                            <p>Contact us for more info</p>
                        </div>
                        <div className="accardion-right">
                            <Accardion/>
                        </div>
                    </div>

                    {/* ---section--- */}
                    <section>
                        <div className="sectin-conrainer">
                            <div className="section-left">
                                <img src={imgSection}/>
                                <div className="sectio-left-position">
                                    <h2>Building stellar websites for early startups</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                                </div>
                            </div>
                            <div className="section-right">
                                <h2>Send inquiry</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <div className="input-section">
                                    <input type="text"  placeholder="Your Name"/>
                                    <input type="number" placeholder="Your Number"/>
                                    <input type="email"  placeholder="Email"/>
                                    <button>Send an Inquiry</button>
                                </div>
                                    <div className="section-right-row">
                                        <p>Get in touch with us</p>
                                        <i class="fa-solid fa-arrow-right"></i>
                                    </div>
                            </div>
                        </div>
                    </section>


                    {/* ----aside---- */}
                    <aside>
                        <div className="aside-top-text">
                            <h2 className="aside-top-text-h2">Our blog</h2>
                            <AsideData/>
                        </div>
                    </aside>

                 </div>
                 
        
        </PageContainer>
        </>


    )
}
export default Home