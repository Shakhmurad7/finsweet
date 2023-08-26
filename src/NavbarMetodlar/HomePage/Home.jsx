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
import HomeCard from "./HomeCard"




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
                 
        
        </PageContainer>
        </>
    )
}
export default Home