import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Pages
import Home from "./pages/Home"
import Caravans from "./pages/Caravans"
import About from "./pages/About";
import Contact from "./pages/Contact";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/karavanlar" element={<Caravans />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />


      </Routes>
    </Router>
  )
}

export default App
