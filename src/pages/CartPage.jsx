import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { aplicarMascaraCelular } from '../assets/js/whatsappMask';
import { useState } from 'react';
import { validateCheckoutForm } from '../assets/utils/validationForm';

const CartPage = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
    const [celular, setCelular] = useState("");

    const handleInputChange = (e) => {
        const valor = e.target.value;
        const valorFormatado = aplicarMascaraCelular(valor);
        setCelular(valorFormatado);
    };

	const handleSubmitCombined = async (event) => {
		event.preventDefault();
	
		// Valida o formulário
		if (!validateCheckoutForm()) return;
	
		const form = event.target;
		const formData = new FormData(form);
	
		// Adiciona os produtos formatados ao FormData na ordem correta
		const productDetails = cart
			.map((item) => `${item.product.name} (Quantidade: ${item.quantity})`)
			.join('\n');
		formData.append('Produtos', productDetails);
	
		try {
			const response = await fetch(form.action, {
				method: 'POST',
				body: formData,
				headers: {
					Accept: 'application/json',
				},
			});
	
			if (response.ok) {
				toast.success('Pedido enviado com sucesso!');
				clearCart(); // Limpa o carrinho
				form.reset(); // Reseta o formulário
			} else {
				toast.error('Ocorreu um erro ao enviar o pedido.');
			}
		} catch (error) {
			console.error("Erro ao enviar o formulário:", error);
			toast.error('Erro de rede ao enviar o pedido.');
		}
	};

    return (
        <main>
            <section className="cart-area p-5">
                <h1 className="mb-4">Carrinho de Compras</h1>
                {cart.length === 0 ? (
                    <div className="empty-cart alert alert-info">
                        <p className="empty-cart-text">
                            Seu carrinho está vazio.{' '}
                            <Link to="/produtos" className="back-to-products">
                                Voltar para os produtos
                            </Link>
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="cart-container row">
                            <div className="col-md-6">
                                <h2>Itens no Carrinho</h2>
                                <ul className="list-group">
                                    {/* Botão de Limpar Carrinho */}
                                    <button
                                        className="clear-cart btn-primary btn btn-sm mb-3"
                                        onClick={clearCart}
                                    >
                                        <i className='fa-solid fa-x'></i>
                                        Limpar Carrinho
                                    </button>
                                    {cart.map((item) => (
                                        <li key={item.product.id} className="list-group-item">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex align-items-center">
                                                    <img
                                                        src={item.product.image}
                                                        alt={item.product.name}
                                                        className="cart-product-image me-3"
                                                        style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                    />
                                                    <div>
                                                        <h5>{item.product.name}</h5>
                                                        <div className="d-flex align-items-center">
                                                            <button
                                                                className="minus-one btn btn-sm btn-outline-secondary"
                                                                onClick={() =>
                                                                    updateQuantity(
                                                                        item.product.id,
                                                                        Math.max(1, item.quantity - 1)
                                                                    )
                                                                }
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                type="number"
                                                                className="quantity form-control mx-2"
                                                                style={{ width: '60px', textAlign: 'center' }}
                                                                value={item.quantity}
                                                                onChange={(e) =>
                                                                    updateQuantity(
                                                                        item.product.id,
                                                                        Math.max(1, parseInt(e.target.value))
                                                                    )
                                                                }
                                                            />
                                                            <button
                                                                className="plus-one btn btn-sm btn-outline-secondary"
                                                                onClick={() =>
                                                                    updateQuantity(item.product.id, item.quantity + 1)
                                                                }
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => removeFromCart(item.product.id)}
                                                >
                                                    <i className="fas fa-trash"></i>{' '}
                                                    {/* Ícone de lixeira do Font Awesome */}
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="checkout-form rounded p-3 col-md-6">
                                <form id="checkout-form" onSubmit={handleSubmitCombined} method="POST" action='https://formspree.io/f/xgvvpdnz'>
                                    <h2 className="pt-3 pb-3">Finalizar Pedido</h2>
                                    <div className="row pt-3 pb-3 gy-3 gx-4">
                                        <div className="col-xl-6">
                                            <input
                                                type="text"
                                                className="form-control py-3 border-primary-input"
                                                placeholder="Seu nome"
                                                name="Nome"
                                            />
                                        </div>
                                        <div className="col-xl-6">
                                            <input
                                                type="email"
                                                className="form-control py-3 border-primary-input"
                                                placeholder="Seu e-mail"
                                                name="E-mail"
                                            />
                                        </div>
                                        <div className="col-xl-6">
                                            <input
                                                type="text"
                                                id="celular"
                                                className="form-control py-3 border-primary-input"
                                                placeholder="Seu telefone (WhatsApp)"
                                                name="WhatsApp"
                                                value={celular}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="col-xl-6">
                                            <input
                                                type="text"
                                                placeholder="Cidade"
                                                className="input-number form-control py-3 border-primary-input"
                                                name="Cidade"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control border-primary-input"
                                                name="Comentários adicionais"
                                                id="area-text"
                                                cols="30"
                                                rows="3"
                                                placeholder="Insira informações adicionais sobre seu pedido"
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="submit-cart btn btn-primary w-100 py-3 px-5"
                                            >
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                    <p className="agree-lgpd-checkout pb-3 fs-10">
                                        Ao clicar em &quot;enviar&quot;, você concorda com a política de privacidade
                                        disponível em nosso site.{' '}
                                        <a href="/LGPD" className="read-lgpd">
                                            Clique aqui para lê-la
                                        </a>
                                        .
                                    </p>
                                </form>
                            </div>
                        </div>
                    </>
                )}
            </section>
            <ToastContainer />
        </main>
    );
};

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
};

export default CartPage;