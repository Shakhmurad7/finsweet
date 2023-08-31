import { Route, Routes } from "react-router"
import Home from "./NavbarMetodlar/HomePage/Home"
import About from "./NavbarMetodlar/AboutPage/About"
import Contact from "./NavbarMetodlar/ContactPage/Contact"
import Features from "./NavbarMetodlar/Features/Features"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Features" element={<Features/>}/>
      </Routes>
    </>
  )
}

export default App
