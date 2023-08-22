import { Route, Routes } from "react-router"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"



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
