import { Link } from "react-router-dom";
import Work from "../NavbarMetodlar/Work/Work";

const Navbar = () => {

  return (
    <>
      <nav>
        <div className="Big-container">
          <div className="nav-container">
            <div className="nav-left">
              <h2>Building stellar websites for early startups</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <div className="nav-left-row">
              <Link to={"./Work"}> <h3> View our work</h3></Link>
                <div className="nav-left-icon-row">
                 <Link to={"./Pricing"}><h4>View Pricing</h4></Link> 
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="nav-right">
              <img src={"/img/Illustration.svg"} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
