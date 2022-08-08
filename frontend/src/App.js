import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import PostalLookup from "./pages/PostalLookup";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/postal" element={<PostalLookup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
