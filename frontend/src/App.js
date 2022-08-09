import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import PostalLookup from "./pages/PostalLookup";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/postal" element={<PostalLookup />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
