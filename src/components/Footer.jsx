const Footer = () => {
	return (
		<footer className="container-fluid footer wow fadeIn" data-wow-delay="0.2s">
			<div className="footer-line row g-5">
				<div className="col-md-6 col-lg-6 col-xl-3 footer-social-container">
					<div className="footer-item d-flex flex-column footer-social-area">
						<a href="/" className="navbar-brand p-0">
							<img src="./img/biotecnica-logo-branco-cortado.png" alt="Logo" style={{ height: '65px' }} />
						</a>
						<p>Confira nossas redes sociais:</p>
						<div className="d-flex align-items-center social-btn-area">
							<a className="social-btn-footer btn-square btn btn-primary rounded-circle mx-1"
								href="https://api.whatsapp.com/send?phone=5515996387470"><i
									className="fab fa-whatsapp"></i></a>
							<a className="social-btn-footer btn-square btn btn-primary text-white rounded-circle mx-1"
								href="https://www.facebook.com/ortopediabiotecnica"><i
									className="fab fa-facebook-f"></i></a>
							<a className="social-btn-footer btn-square btn btn-primary text-white rounded-circle mx-1"
								href="https://www.instagram.com/ortopediabiotecnica"><i
									className="fab fa-instagram"></i></a>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-lg-6 col-xl-4 contact-area">
					<div className="footer-item d-flex flex-column">
						<h4 className="contact-info-header mb-4 text-white">Entre em contato</h4>
						<a href="https://maps.app.goo.gl/R8YNTPuoatUjkdPP9"><i className="fa fa-map-marker-alt"></i>
							<span>Rua Cônego Januário Barbosa, 218 - CEP 18030-075 - Sorocaba/SP</span></a>
						<a href="mailto:vendas@ortopediabiotecnica.com.br"><i className="fas fa-envelope"></i>
							vendas@ortopediabiotecnica.com.br</a>
						<a href="tel:1532330616"><i className="fas fa-phone-alt"></i> (15) 3233-0616</a>
					</div>
				</div>
			</div>
			<div className="signature g-5">
				<p>© {new Date().getFullYear()} Biotecnica Próteses e Órteses LTDA - CNPJ 50.023.129/0001-93. Todos os direitos reservados.</p>
				<p>Criado por <a href="https://www.nickmoura.dev">Nick Moura</a></p>
			</div>
		</footer>
	);
};

export default Footer;