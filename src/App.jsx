import { Route, Routes } from "react-router"
import Home from "./NavbarMetodlar/Home"
import About from "./NavbarMetodlar/About"
import Contact from "./NavbarMetodlar/Contact"



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
