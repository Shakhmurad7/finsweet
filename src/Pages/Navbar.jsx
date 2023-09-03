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
                <a href={"./Work"}> <h3> View our work</h3> </a>
                <div className="nav-left-icon-row">
                 <a href={"/Pricing"}><h4>View Pricing</h4></a> 
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
