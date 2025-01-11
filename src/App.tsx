import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Search from "./pages/Search"
import AddHotel from "./pages/AddHotel"
import AddFlights from "./pages/AddFlights"
function App() {

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="/add-flight" element={<AddFlights />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
