import { Route, Routes } from "react-router"
import Home from "./NavbarMetodlar/HomePage/Home"
import About from "./NavbarMetodlar/AboutPage/About"
import Contact from "./NavbarMetodlar/ContactPage/Contact"
import Features from "./NavbarMetodlar/Features/Features"
import Pricing from "./NavbarMetodlar/Pricing/Pricing"
import Work from "./NavbarMetodlar/Work/Work"
import Blog from "./NavbarMetodlar/Blog/Blog"
import Single from "./NavbarMetodlar/Blog-Single/Single"
import FAQ from "./NavbarMetodlar/Faq/FAQ"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Features" element={<Features/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Single" element={<Single/>}/>
        <Route path="/Faq" element={<FAQ/>}/>
      </Routes>
    </>
  )
}

export default App
