import PropTypes from 'prop-types';

const ProductModal = ({ isOpen, product, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="modal-overlay">
			<div className="modal-content">
				<button className="close-btn" onClick={onClose} ><i className="fa-solid fa-x"></i></button>
				<img src={product.image} alt={product.name} className="modal-img" />
				<h2>{product.name}</h2>
				<p>{product.description || 'Sem descrição disponível.'}</p>
			</div>
		</div>
	);
};

ProductModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	product: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		description: PropTypes.string,
	}),
	onClose: PropTypes.func.isRequired,
};

export default ProductModal;
