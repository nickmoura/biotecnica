import { useState } from "react";
import { aplicarMascaraCelular } from "../assets/js/whatsappMask";


const Home = () => {

	const [celular, setCelular] = useState("");

	const handleInputChange = (e) => {
		const valor = e.target.value;
		const valorFormatado = aplicarMascaraCelular(valor);
		setCelular(valorFormatado);
	};

	return (
		<main>
			{/* About Start */}
			<section id="about">
				<div className="container-fluid about py-5">
					<div className="container py-5">
						<div className="row g-5 align-items-center justify-content-center">
							<div className="hero-text rounded col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
								<div className="section-title text-start">
									<h1 className="display-3 mb-4 main-title">Inovação e Cuidado em Reabilitação</h1>
									<p className="about-text mb-4"> Desde 1992, a Ortopedia Biotécnica se dedica a
										transformar vidas por meio da reabilitação física.
										Com mais de 30 anos de experiência, somos
										especializados na fabricação de próteses e
										órteses sob medida, utilizando a tecnologia para
										atender às necessidades individuais de cada
										paciente.</p>
									<p className="about-text mb-4"> Além de nossa expertise em próteses e órteses,
										oferecemos diversos de produtos ortopédicos e
										materiais de auxílio à locomoção, como muletas,
										andadores, cadeiras de rodas, entre outros.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* About End */}
			{/* Feature Start */}
			<section id="why-choose">
				<div className="container-fluid feature py-5">
					<div className="container py-5">
						<div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
							<h2 className="display-3 mb-4 main-title">Por que escolher a Biotécnica?</h2>
						</div>
						<div className="row g-4 justify-content-center">
							<div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
								<div className="why-choose-item row-cols-1 feature-item p-4">
									<div className="col-12">
										<div className="feature-icon mb-4">
											<div className="p-3 d-inline-flex rounded why-choose-icon-area">
												<i className="why-choose-icon fas fa-solid fa-user-nurse fa-4x"></i>
											</div>
										</div>
										<div className="feature-content d-flex flex-column">
											<h5 className="why-choose-title mb-4">Atendimento personalizado</h5>
											<p className="why-choose-text mb-0">Na Biotécnica, oferecemos atendimento personalizado
												focado nas suas
												necessidades, garantindo próteses e órteses feitas sob medida.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
								<div className="why-choose-item row-cols-1 feature-item p-4">
									<div className="col-12">
										<div className="feature-icon mb-4">
											<div className="p-3 d-inline-flex rounded">
												<i className="why-choose-icon fas fa-solid fa-stopwatch fa-4x"></i>
											</div>
										</div>
										<div className="feature-content d-flex flex-column">
											<h5 className="why-choose-title mb-4">Agilidade</h5>
											<p className="why-choose-text mb-0">A Biotécnica é reconhecida por sua celeridade no
												processo de
												fabricação de próteses, garantindo rapidez sem comprometer a qualidade.</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
								<div className="why-choose-item row-cols-1 feature-item p-4">
									<div className="col-12">
										<div className="feature-icon mb-4">
											<div className="p-3 d-inline-flex rounded">
												<i className="why-choose-icon fas fa-solid fa-dollar-sign fa-4x"></i>
											</div>
										</div>
										<div className="feature-content d-flex flex-column">
											<h5 className="why-choose-title mb-4">O melhor custo-benefício</h5>
											<p className="why-choose-text mb-0">As soluções de mobilidade da Biotécnica são
												acessíveis e
												reconhecidas reconhecidas por seu alto padrão, unindo qualidade e preço justo.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
								<div className="why-choose-item row-cols-1 feature-item p-4">
									<div className="col-12">
										<div className="feature-icon mb-4">
											<div className="p-3 d-inline-flex rounded">
												<i className="why-choose-icon fas fa-solid fa-star fa-4x"></i>
											</div>
										</div>
										<div className="feature-content d-flex flex-column">
											<h5 className="why-choose-title mb-4">Exclusividade</h5>
											<p className="why-choose-text mb-0">A Biotécnica sabe que cada um de nós possui
												características
												pessoais, logo, nossas próteses unem personalização e
												funcionalidade.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Feature End */}

			{/* Process Start */}
			<section id="rehab" className="container-fluid team py-5">
				<div className="container py-5">
					<div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
						<h2 className="display-3 mb-4 main-title">Processo de reabilitação Biotécnica</h2>
						<p className="text-discover mb-0">Descubra nosso processo e o que ele tem de especial.</p>
					</div>
					<div className="row g-4 justify-content-center">
						<div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
							<div className="team-item process-step">
								<div className="icon-container team-img h-100">
									<i className="fas fa-regular fa-star fa-4x process-icon"></i>
								</div>
								<div className="team-content text-center p-4">
									<h5>Avaliação</h5>
									<ul className="rehab-list mb-0">
										<li className="rehab-list-item">Conhecer o paciente</li>
										<li className="rehab-list-item">Avaliar suas características físicas e suas possibilidades
										</li>
										<li className="rehab-list-item">Propor um plano de reabilitação</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
							<div className="team-item process-step">
								<div className="icon-container team-img h-100">
									<i className="fas fa-regular fa-hand-point-right fa-4x process-icon"></i>
								</div>
								<div className="team-content text-center p-4">
									<h5>Indicação</h5>
									<ul className="rehab-list mb-0">
										<li className="rehab-list-item">Propor os melhores componentes para a prótese</li>
										<li className="rehab-list-item">Confecção do molde e medidas</li>
										<li className="rehab-list-item">Confecção do encaixe provisório</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
							<div className="team-item process-step">
								<div className="icon-container team-img h-100">
									<i className="fas fa-solid fa-rocket fa-4x process-icon"></i>
								</div>
								<div className="team-content text-center p-4">
									<h5>Treinamento</h5>
									<ul className="rehab-list mb-0">
										<li className="rehab-list-item">Alinhamento da prótese</li>
										<li className="rehab-list-item">Início do treino de marcha</li>
										<li className="rehab-list-item">Realizar ajustes de acordo com a necessidade</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
							<div className="team-item process-step">
								<div className="icon-container team-img h-100">
									<i className="fas fa-solid fa-truck fa-4x process-icon"></i>
								</div>
								<div className="team-content text-center p-4">
									<h5>Entrega</h5>
									<ul className="rehab-list mb-0">
										<li className="rehab-list-item">Realizar a confecção do encaixe definitivo</li>
										<li className="rehab-list-item">Acompanhar o paciente</li>
										<li className="rehab-list-item">Realizar manutenções periódicas</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/*  Process End */}
			{/*  Testimonial start
			<div className="container-fluid testimonial py-5 wow zoomInDown" data-wow-delay="0.1s">
				<div className="container py-5">
					<div className="section-title mb-5">
						<div className="sub-style">
							<h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
						</div>
						<h1 className="display-3 mb-4">What Clients are Say</h1>
					</div>
					<div className="testimonial-carousel owl-carousel">
						<div className="testimonial-item">
							<div className="testimonial-inner p-5">
								<div className="testimonial-inner-img mb-4">
									<img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt="">
								</div>
								<p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
									nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed
									voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
								</p>
								<div className="text-center">
									<h5 className="mb-2">John Abraham</h5>
									<p className="mb-2 text-white-50">New York, USA</p>
									<div className="d-flex justify-content-center">
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="testimonial-item">
							<div className="testimonial-inner p-5">
								<div className="testimonial-inner-img mb-4">
									<img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt="">
								</div>
								<p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
									nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed
									voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
								</p>
								<div className="text-center">
									<h5 className="mb-2">John Abraham</h5>
									<p className="mb-2 text-white-50">New York, USA</p>
									<div className="d-flex justify-content-center">
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
									</div>
								</div>
							</div>
						</div>
						<div className="testimonial-item">
							<div className="testimonial-inner p-5">
								<div className="testimonial-inner-img mb-4">
									<img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt="">
								</div>
								<p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
									nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed
									voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
								</p>
								<div className="text-center">
									<h5 className="mb-2">John Abraham</h5>
									<p className="mb-2 text-white-50">New York, USA</p>
									<div className="d-flex justify-content-center">
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
										<i className="fas fa-star text-secondary"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
         Testimonial End */}
			{/* Book Appointment Start */}
			<section id="special" className="container-fluid appointment py-5">
				<div className="container py-5">
					<div className="special-area row g-5 align-items-center">
						<div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
							<div className="section-title text-start">
								<h2 className="main-title display-4 mb-4">Especialidades</h2>
								<div className="row g-4">
									<div className="col-sm-6">
										<div className="d-flex flex-column h-100">
											<div className="mb-4">
												<h5 className="mb-3"><i className="fa fa-check text-primary me-2"></i> Especialização
												</h5>
												<p className="special-text mb-0">Somos especialistas na fabricação de próteses
													ortopédicas, próteses realistas de silicone e na comercialização de
													equipamentos que promovem a mobilidade e o bem-estar. Oferecemos desde
													muletas e andadores até cadeiras de rodas e outros dispositivos de auxílio,
													garantindo que nossos produtos atendam às necessidades específicas de cada
													paciente.
												</p>
											</div>
											<div className="mb-4">
												<h5 className="mb-3"><i className="fa fa-check text-primary me-2"></i> Experiência e <em>Know How</em>
												</h5>
												<p className="special-text mb-0">Possuímos uma sólida trajetória na reabilitação
													física, tendo como diferencial está na capacidade de desenvolver soluções
													personalizadas que atendam as necessidades individuais sempre prezando pelo
													conforto e qualidade do produto.</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="video h-100">
											<img src="./img/biotec_mascote (1).png" className="img-fluid rounded w-100 h-100"
												style={{ objectFit: "cover" }} alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
							<div className="appointment-form rounded py-4 px-5">
								<p className="contact-us fs-4 text-uppercase">Entre em contato</p>
								<h2 className="display-5 mb-4">Agende sua avaliação!</h2>
								<form id="contact-form" action="https://formspree.io/f/mqakkdvg" method="POST">
									<div className="row gy-3 gx-4">
										<div className="col-xl-6">
											<input type="text" className="form-control py-3 border-primary-input"
												placeholder="Seu nome" name="Nome" />
										</div>
										<div className="col-xl-6">
											<input type="email" className="form-control py-3 border-primary-input"
												placeholder="Seu e-mail" name="E-mail" />
										</div>
										<div className="col-xl-6">
											<input type="text"
												id="celular"
												className="form-control py-3 border-primary-input"
												placeholder="Seu telefone (WhatsApp)"
												name="WhatsApp"
												value={celular}
												onChange={handleInputChange} />
										</div>
										<div className="col-xl-6">
											<input type="number" placeholder="Idade do paciente"
												className="input-number form-control py-3 border-primary-input" name="Idade" />
										</div>
										<div className="col-xl-6">
											<select className="form-select py-3 border-primary-input" name="Motivo">
												<option selected disabled>Motivo do contato</option>
												<option value="Agendamento">Agendamento</option>
												<option value="Duvida">Dúvida</option>
												<option value="Elogio">Elogio</option>
												<option value="Sugestão">Sugestão</option>
												<option value="Reclamação">Reclamação</option>
											</select>
										</div>
										<div className="col-xl-6">
											<select className="form-select py-3 border-primary-input" name="Produto">
												<option selected disabled>Tipo de produto</option>
												<option value="Protese">Prótese</option>
												<option value="Ortese">Órtese</option>
												<option value="Outros">Outros</option>
											</select>
										</div>
										<div className="col-12">
											<textarea className="form-control border-primary-input" name="text" id="area-text"
												cols="30" rows="2" placeholder="Escreva aqui"></textarea>
										</div>
										<div className="col-12">
											<button onClick="handleSubmit()" type="submit"
												className="submit-contact btn btn-primary w-100 py-3 px-5">Enviar</button>
											<p className="agree-lgpd fs-10">Ao clicar em &quot;enviar&quot;, você concorda com a política de privacidade disponível em nosso site. <a href="/LGPD">Clique aqui para lê-la</a>.</p>

										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>

			</section>
			{/* Book Appointment Start */}
		</main>
	)
};

export default Home;
