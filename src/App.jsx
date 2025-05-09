import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CartPage from './pages/CartPage';
import PrivacyPolicy from "./pages/Data";

const App = () => {
  const [cart, setCart] = useState([]);

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.product.id === product.id);

    if (existingProduct) {
      // Se o produto já está no carrinho, aumenta a quantidade
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Se o produto não está no carrinho, adiciona com quantidade 1
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  // Função para remover um produto do carrinho
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  // Função para atualizar a quantidade de um produto no carrinho
  const updateQuantity = (productId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
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
          element={<Products cart={cart} addToCart={addToCart} />}
        />
        <Route path="/dados" element={<PrivacyPolicy />} />
        <Route
          path="/carrinho"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;