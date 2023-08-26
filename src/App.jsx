import { Route, Routes } from "react-router"
import Home from "./NavbarMetodlar/HomePage/Home"
import About from "./NavbarMetodlar/AboutPage/About"
import Contact from "./NavbarMetodlar/ContactPage/Contact"



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
