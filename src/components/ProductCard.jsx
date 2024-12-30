import PropTypes from 'prop-types';

const ProductCard = ({ product, onClick }) => (
  <div className="col-md-4 mb-4">
    <div className="card product-card" onClick={() => onClick(product)}>
      <div className="product-image-area py-3">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <button className="btn btn-primary btn-sm">Adicionar ao carrinho</button>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
