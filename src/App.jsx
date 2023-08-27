import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//Pages
import Home from "./pages/Home"
import Caravans from "./pages/Caravans"



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/karavanlar" element={<Caravans />} />



      </Routes>
    </Router>
  )
}

export default App
