import { Link } from "react-router-dom"

const Footer =()=>{
    return(
        <>
            <footer>
                <div className="Big-container">
                    <div className="footer-container">
                        <div className="footer-left">
                           <Link to={'/'}><h2>Finsweet</h2></Link> 
                            <p>We are always open to discuss your project and improve your online presence.</p>

                            <div className="footer-bottom">
                                <div className="footer-botton-block">
                                    <h3>Email me at</h3>
                                    <p>contact@website.com</p>
                                </div>
                                <div className="footer-botton-block">
                                    <h3>Call us</h3>
                                    <p>0927 6277 28525</p>
                                </div>
                            </div>

                        </div>

                        <div className="footer-right">
                            <h2>Lets Talk!</h2>
                            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>

                            <div className="footer-icon">
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
                <div className="Big-container">

                    <div className="footer-end">
                        <p>Copyright 2022, Finsweet.com</p>

                        <ul>
                        <a href={'/'}><li>Home</li></a>
                            <a href={'/About'}><li>About</li></a>
                            <a href={'/'}><li>Features</li></a>
                            <a href={'/'}><li>Pricing</li></a>
                            <a href={'/'}><li>FAQ</li></a>
                            <a href={'/'}><li>Blog</li></a>
                        </ul>

                    </div>
                </div>
        </>
    )
}
export default Footer