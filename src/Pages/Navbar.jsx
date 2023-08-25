import img1 from '../assets/img/Illustration.svg'
const Navbar =()=>{
    return(
        <>
        <nav>
            <div className="Big-container">
                <div className="nav-container">

                    <div className="nav-left">
                        <h2>Building stellar websites for early startups</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div className="nav-left-row">
                            <h3>View our work</h3>
                            <div className="nav-left-icon-row">
                                <h4>View Pricing</h4>
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>

                    <div className="nav-right">
                        <img src={img1}/>
                    </div>

                </div>
            </div>
        </nav>
        </>
    )
}
export default Navbar