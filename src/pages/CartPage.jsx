import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, clearCart }) => {
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('products', JSON.stringify(cart)); // Adiciona os produtos ao formulário

    try {
      const response = await fetch('https://formspree.io/f/seu-form-id', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        toast.success('Pedido enviado com sucesso!');
        clearCart(); // Limpa o carrinho após o envio
      } else {
        toast.error('Ocorreu um erro ao enviar o pedido.');
      }
    } catch {
      toast.error('Erro de rede ao enviar o pedido.');
    }
  };

  return (
    <main>
      <section className="cart-area p-5">
        <h1 className="mb-4">Carrinho de Compras</h1>
        {cart.length === 0 ? (
          <div className="empty-cart alert alert-info">
            <p className="empty-cart-text">Seu carrinho está vazio. <Link to="/produtos" className="back-to-products">Voltar para os produtos</Link></p>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-md-8">
                <h2>Itens no Carrinho</h2>
                <ul className="list-group">
                  {cart.map((item, index) => (
                    <li key={index} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5>{item.name}</h5>
                          <p className="mb-0">Categoria: {item.category}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-md-4">
                <h2>Finalizar Pedido</h2>
                <form onSubmit={handleFormSubmit}>
                  {/* Campos do formulário */}
                </form>
              </div>
            </div>
          </>
        )}
      </section>
      <ToastContainer /> {/* Container do Toastify */}
    </main>
  );
};

CartPage.propTypes = {
  cart: PropTypes.array.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default CartPage;