import { useState } from "react"
import { Link } from "react-router-dom"
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
                            <Link to={'/'}><li>Home</li></Link>
                            <Link to={'/About'}><li>About</li></Link>
                            <Link to={'/'}><li>Features</li></Link>
                            <Link to={'/'}><li>Pricing</li></Link>
                            <Link to={'/'}><li>FAQ</li></Link>
                            <Link to={'/'}><li>Blog</li></Link>
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