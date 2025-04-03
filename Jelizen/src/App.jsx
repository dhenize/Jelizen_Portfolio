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
      <Routes>
      <Route path = "/" element={<Header/>} />
        <Route path = "/" element={<Homepage/>} />
        <Route path = "/" element={<AboutUs/>} />
        <Route path = "/" element={<Members/>} />
        <Route path = "/" element={<Projects/>} />
        <Route path = "/" element={<ContactUs/>} />
      </Routes>
    </Router>
  );
}

export default App;