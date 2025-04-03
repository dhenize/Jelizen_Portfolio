import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Members from "./Pages/Members";
import Projects from "./Pages/Projects";
import ContactUs from "./Pages/ContactUs";


function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path = "/" element={<Homepage/>} />
        <Route path = "/about" element={<AboutUs/>} />
        <Route path = "/members" element={<Members/>} />
        <Route path = "/project" element={<Projects/>} />
        <Route path = "/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;