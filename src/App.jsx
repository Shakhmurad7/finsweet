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
import WorkSingle from "./NavbarMetodlar/Work/WorkSingle"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/features  " element={<Features/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/work/:id" element={<WorkSingle/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/single" element={<Single/>}/>
        <Route path="/faq" element={<FAQ/>}/>
      </Routes>
    </>
  )
}

export default App
