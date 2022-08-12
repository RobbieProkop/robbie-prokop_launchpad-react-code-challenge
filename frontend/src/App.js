import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Universities from "./pages/Universities";
import PostalLookup from "./pages/PostalLookup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
import EditPostForm from "./pages/EditPostForm";
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/posts/:postId" element={<SinglePost />} /> */}
          <Route path="/:postId" element={<EditPostForm />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/postal" element={<PostalLookup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
