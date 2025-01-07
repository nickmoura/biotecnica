import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from './pages/CartPage';
import PrivacyPolicy from "./pages/Data";

const App = () => {
  // Estado para gerenciar o carrinho
  const [cart, setCart] = useState([]);

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    setCart([...cart, product]); // Adiciona o produto ao carrinho
  };

  // Função para limpar o carrinho
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route
          path="/produtos"
          element={<Products cart={cart} addToCart={addToCart} />} // Passando cart e addToCart
        />
        <Route path="/dados" element={<PrivacyPolicy />} />
        <Route
          path="/carrinho"
          element={<CartPage cart={cart} clearCart={clearCart} />} // Passando cart e clearCart
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;