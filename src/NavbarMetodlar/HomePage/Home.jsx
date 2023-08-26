import Navbar from "../../Pages/Navbar"
import PageContainer from "../../PageContainer"
import "./Style.css"
import imgContent1 from "../../assets/img/pointer 1.svg"
import imgContent2 from "../../assets/img/pointer 1.png"
import imgContent3 from "../../assets/img/pointer 1 (2).png"
import imgContent4 from "../../assets/img/pointer 1 (1).png"

const Home =()=>{
    return(
        <>
        <PageContainer>
            <Navbar/>
                <div className="Big-container">
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
                 </div>
        </PageContainer>
        
        </>
    )
}
export default Home