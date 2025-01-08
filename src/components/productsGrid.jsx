import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal'; // Importe o componente do modal

const ProductsGrid = ({ products, addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para controlar o produto selecionado

  const handleAddToCart = (product) => {
    addToCart(product); // Adiciona o produto ao carrinho

    // Exibe o toast com o link "Ver Carrinho"
    toast.success(
      <div>
        {product.name} foi adicionado ao carrinho!{' '}
        <Link
          to="/carrinho"
          style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '900' }}
        >
          Ver Carrinho
        </Link>
      </div>,
      {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  const handleProductClick = (product) => {
    console.log('Produto clicado:', product); // Log para depuração
    setSelectedProduct(product); // Abre o modal com o produto selecionado
  };

  const closeModal = () => {
    console.log('Fechando modal'); // Log para depuração
    setSelectedProduct(null); // Fecha o modal
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div
            className="card product-card"
            onClick={() => handleProductClick(product)} // Abre o modal ao clicar no card
            style={{ cursor: 'pointer' }} // Muda o cursor para indicar que o card é clicável
          >
            <div className="product-image-area p-3">
              <img
                src={product.image}
                alt={product.name}
                className="product-img"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <button
                className="btn btn-primary btn-sm add-to-cart"
                onClick={(e) => {
                  e.stopPropagation(); // Impede que o clique no botão abra o modal
                  handleAddToCart(product);
                }}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal do Produto */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct} // Abre o modal se houver um produto selecionado
          product={selectedProduct} // Passa o produto selecionado para o modal
          onClose={closeModal} // Fecha o modal
        />
      )}
    </div>
  );
};

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsGrid;