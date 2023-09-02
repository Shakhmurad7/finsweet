import { useState } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
const Header =()=>{
    const [menu , setmenu] = useState(false)
    return(
        <> 
            <header>
                <div className="Big-container">

                <div className="header-container">

                    <div className="header-top-left">
                        <Link to={'/'}><h2>Finsweet</h2></Link> 
                    </div>

                    <div className={`header-top-right ${menu? `header-top-right`:`active`}`}>
                        <ul>
                            <NavLink to={'/'}><li>Home</li></NavLink>
                            <NavLink to={'/About'}><li>About</li></NavLink>
                            <NavLink to={'/Features'}><li>Features</li></NavLink>
                            <NavLink to={'/Pricing'}><li>Pricing</li></NavLink>
                            <NavLink to={'/'}><li>FAQ</li></NavLink>
                            <NavLink to={'/Blog'}><li>Blog</li></NavLink>
                            <NavLink to={'/Work'}><li>Work</li></NavLink>
                        </ul>

                        <Link  className="tage-a" to={"/Contact"}>Contact</Link>
                    </div>

                        <div className="menu-icon" onClick={()=> setmenu(!menu)}>
                            {menu ? <i class="fa-solid fa-xmark"></i> :<i class="fa-solid fa-bars"></i>}
                            
                        </div>
                </div>


                </div>

            </header>
        </>
    )
}
export default Header