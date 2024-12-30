import PropTypes from 'prop-types';
import Pagination from './Pagination';
import { useState } from 'react';

const ProductsGrid = ({ products, currentPage, totalPages, onPageChange }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div
              className="card product-card"
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <div className="product-image-area py-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <button className="btn btn-primary btn-sm add-to-cart">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      {/* Popup */}
      {selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar no conteúdo
          >
            <button className="close-btn" onClick={closePopup}>
              ×
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="popup-img"
            />
            <h2>{selectedProduct.name}</h2>
            <p>
              Categoria: {selectedProduct.category}
              {selectedProduct.subcategory && ` > ${selectedProduct.subcategory}`}
            </p>
			<p>
				{selectedProduct.description}
			</p>
          </div>
        </div>
      )}
    </div>
  );
};

ProductsGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      subcategory: PropTypes.string,
    })
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default ProductsGrid;
