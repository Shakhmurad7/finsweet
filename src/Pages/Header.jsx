import { useState } from "react"
const Header =()=>{
    const [menu , setmenu] = useState(false)
    return(
        <>
            <header>
                <div className="Big-container">

                <div className="header-container">

                    <div className="header-top-left">
                        <h2>Finsweet </h2>
                    </div>

                    <div className={`header-top-right ${menu? `header-top-right`:`active`}`}>
                        <ul>
                            <a href={'/'}><li>Home</li></a>
                            <a href={'/About'}><li>About</li></a>
                            <a href={'/'}><li>Features</li></a>
                            <a href={'/'}><li>Pricing</li></a>
                            <a href={'/'}><li>FAQ</li></a>
                            <a href={'/'}><li>Blog</li></a>
                        </ul>

                        <a className="tage-a" href={"/Contact"}>Contact</a>
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