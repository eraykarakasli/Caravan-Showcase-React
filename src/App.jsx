import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Pages
import Home from "./pages/Home"
import Caravans from "./pages/Caravans"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Burstner from "./pages/Brand/Burstner";
import Fendt from "./pages/Brand/Fendt";
import Eriba from "./pages/Brand/Eriba";
import Kabe from "./pages/Brand/Kabe";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/karavanlar" element={<Caravans />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/karavanlar/burstner" element={<Burstner />} />
        <Route path="/karavanlar/fendt-caravan" element={<Fendt />} />
        <Route path="/karavanlar/hymer-eriba" element={<Eriba />} />
        <Route path="/karavanlar/kabe" element={<Kabe />} />


      </Routes>
    </Router>
  )
}

export default App
