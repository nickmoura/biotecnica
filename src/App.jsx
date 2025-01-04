import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PrivacyPolicy from "./pages/Data"

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/dados" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
