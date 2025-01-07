import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductsGrid = ({ products, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product); // Adiciona o produto ao carrinho

    // Exibe o toast com o link "Ver Carrinho"
    toast.success(
      <div>
        {product.name} foi adicionado ao carrinho!{' '}
        <Link to="/carrinho" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight:'900'}}>
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

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-3 mb-4" key={product.id}>
          <div className="card product-card">
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
                onClick={() => handleAddToCart(product)} // Chama a função handleAddToCart
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ProductsGrid.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsGrid;