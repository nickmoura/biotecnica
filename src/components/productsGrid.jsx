import PropTypes from 'prop-types'; // Importa PropTypes
import Pagination from './Pagination';

const ProductsGrid = ({ products, currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card product-card">
              <div className="product-image-area py-3">
				<img
				  src={product.image}
				  alt={product.name}
				  className="product-img"
				/>
			  </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
				<button className='btn add-to-cart btn-primary btn-sm add-to-cart'>Adicionar ao carrinho</button>
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
    </div>
  );
};

// Definição de PropTypes
ProductsGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default ProductsGrid;
