import { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ProductsGrid from '../components/productsGrid';
import Pagination from '../components/Pagination';


const Products = () => {
	const [products] = useState([
		{
			id: 1, name: 'AFO – Órtese Curta Articulada', category: 'Órteses para Membros Inferiores', subcategory: 'AFO', image: '/img/products/afo-curta-articulada-com-cinta-2.jpg', description: 'Indicada para estabilização da medial e lateral do tornozelo, permitindo o bloqueio da flexão plantar. Pode ser confeccionada sem bloqueio, com bloqueio da flexão plantar e dorsal livre.'
		},
		{
			id: 2, name: 'AFO – Órtese Curta de Reação ao Solo', category: 'Órteses para Membros Inferiores', subcategory: 'AFO', image: '/img/products/afo-curta-reacao-2.jpg'
		},
		{
			id: 3, name: 'AFO – Órtese Curta Rígida', category: 'Órteses para Membros Inferiores', subcategory: 'AFO', image: '/img/products/AFO-curta-rigida-2.jpg'
		},

		{
			id: 4, name: 'AFO – Tutor Curto', category: 'Órteses para Membros Inferiores', subcategory: 'AFO', image: '/img/products/tutor-curto-2.jpg'
		},
		{
			id: 5, name: 'Órtese Curta Articulada com Contorno', category: 'Órteses para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/afo-curta-articulada-com-cinta-425-2-300x300.jpg'
		},
		{
			id: 6, name: 'Órtese de Reciprocação (RGO – ARGO)', category: 'Órteses para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/ortese-reciprocacao-2.jpg'
		},
		{
			id: 7, name: 'Calçados Ortopédicos Femininos', category: 'Calçados Ortopédicos', image: '/img/products/afo-curta-articulada-1.jpg'
		},
		{
			id: 8, name: 'Calçados Ortopédicos Infantis', category: 'Calçados Ortopédicos', image: '/img/products/foto1001g-1.jpg'
		},
		{
			id: 9, name: 'Calçados Ortopédicos Masculinos', category: 'Calçados Ortopédicos', image: '/img/products/foto1110g-2.jpg'
		},
		{
			id: 10, name: 'Cinta Tennis Elbow', category: 'Órtese para Membro Superior', subcategory: 'Cinta', image: '/img/products/cinta-tennis-2.jpg'
		},
		{
			id: 11, name: 'Órtese Dinâmica para Punho', category: 'Órtese para Membro Superior', subcategory: 'Cinta', image: '/img/products/ortese-d-punho-2.jpg'
		},
		{
			id: 12, name: 'Tala para Punho com Dedos Livres', category: 'Órtese para Membro Superior', subcategory: 'Tala', image: '/img/products/tala-para-punho-2.jpg'
		},
		{
			id: 13, name: 'Tala para Punho Funcional', category: 'Órtese para Membro Superior', subcategory: 'Tala', image: '/img/products/tala-punho-funcional-2.jpg'
		},
		{
			id: 14, name: 'Tala para Punho Plana', category: 'Órtese para Membro Superior', subcategory: 'Tala', image: '/img/products/tala-punho-plana-2.jpg'
		},

		{
			id: 15, name: 'Cotoveleira em Neoprene', category: 'Órtese para Membro Superior', subcategory: 'Cotoveleira', image: '/img/products/cotoveleira-2.jpg'
		},
		{
			id: 16, name: 'Espaldeira para postura', category: 'Órtese para Membro Superior', subcategory: 'Espaldeira', image: '/img/products/espalmadeira-2.jpg'
		},

		{
			id: 17, name: 'Splints Adaptações', category: 'Órtese para Membro Superior', subcategory: 'Splint', image: '/img/products/splints-adaptacoes-2.jpg'
		},

		{
			id: 18, name: 'Splints para Estáticos – Posicionamento e Funcionais', category: 'Órtese para Membro Superior', subcategory: 'Splint', image: '/img/products/splints-elasticos-2.jpg'
		},

		{
			id: 19, name: 'Splints/Dedos Dinâmicos/Estáticos', category: 'Órtese para Membro Superior', subcategory: 'Splint', image: '/img/products/splints-dedos-2.jpg'
		},

		{
			id: 20, name: 'Suporte para Úmero', category: 'Órtese para Membro Superior', subcategory: 'Suporte', image: '/img/products/suporte-umero-2.jpg'
		},

		{
			id: 21, name: 'Tutor de Sarmiento de Úmero', category: 'Órtese para Membro Superior', subcategory: 'Suporte', image: '/img/products/tutor-samiento-3.jpg'
		},

		{
			id: 22, name: 'Tipoia Imobilizadora Dupla', category: 'Órtese para Membro Superior', subcategory: 'Tipoia', image: '/img/products/tipoia-imobilizadora-dupla-2.jpg'
		},

		{
			id: 23, name: 'Tipoia Imobilizadora Simples', category: 'Órtese para Membro Superior', subcategory: 'Tipoia', image: '/img/products/tutor-samiento-3.jpg'
		},

		{
			id: 24, name: 'Cinta Elástica Abdominal', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/Produto-sem-foto.jpg'
		},
		{
			id: 25, name: 'Colete de Bahler (Órtese de Hiperextensão)', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-bahler-2.jpg'
		},
		{
			id: 26, name: 'Colete de Boston Bivalvado', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-boston-2.jpg'
		},
		{
			id: 27, name: 'Colete de Boston Feminino', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-boston-feminino-2.jpg'
		},
		{
			id: 28, name: 'Colete de Jewett', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-jewette-2.jpg'
		},
		{
			id: 29, name: 'Colete de Milwalkee', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-miwalkee-2.jpg'
		},
		{
			id: 30, name: 'Colete de Milwalkee sem anel cervical', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-miwlakee-sem-2.jpg'
		},

		{
			id: 31, name: 'Colete de Putti', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-putti-2.jpg'
		},

		{
			id: 32, name: 'Colete de Putti Alto', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-puttialto-2.jpg'
		},

		{
			id: 33, name: 'Colete de Putti Baixo', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-putti-baixo-2.jpg'
		},

		{
			id: 34, name: 'Colete de Willians', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-willians-2.jpg'
		},

		{
			id: 35, name: 'Colete Knight', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-kning-2.jpg'
		},

		{
			id: 36, name: 'Colete Knight Taylor', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/colete-knight-taylor-2.jpg'
		},

		{
			id: 37, name: 'Colete T.L.S.O.', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/foto208g-2.jpg'
		},

		{
			id: 38, name: 'Compressor Torácico', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/cmpressor-toracico-2.jpg'
		},

		{
			id: 39, name: 'Faixa Torácica', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/Produto-sem-foto.jpg'
		},

		{
			id: 40, name: 'Imobilizador em Oito para Clavícula', category: 'Órtese para Tronco', subcategory: 'Colete', image: '/img/products/imobilizador-8-2.jpg'
		},

		{
			id: 41, name: 'Colar Cervical Bivalvado', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar cervical', image: '/img/products/colar-cervical-bivaldo-2.jpg'
		},

		{
			id: 42, name: 'Colar Cervical com Apoio Mentoniano', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar cervical', image: '/img/products/colar-cervical-meritoriano-2.jpg'
		},

		{
			id: 43, name: 'Colar Cervical de Espuma', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar cervical', image: '/img/products/colar-cervical-espuma-2.jpg'
		},

		{
			id: 44, name: 'Colar Cervical Minerva (Forestier)', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar cervical', image: '/img/products/colar-cervical-minerva-2.jpg'
		},

		{
			id: 45, name: 'Colar Cervical Tipo Thomas', category: 'Órtese para Cabeça e Pescoço', subcategory: 'Colar cervical', image: '/img/products/colar-cervical-thomas-2.jpg'
		},

		{
			id: 46, name: 'Imobilizador de Tornozelo', category: 'Órtese para Membros Inferiores', subcategory: 'Imobilizador', image: '/img/products/imobiliz-tornozelo-2.jpg'
		},
		{
			id: 47, name: 'Joelheira Artc/Cintas Cruzadas', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/imobiliz-tornozelo-2.jpg'
		},
		{
			id: 48, name: 'Joelheira em Neoprene Articulada', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/joelheira-articulada-2.jpg'
		},
		{
			id: 49, name: 'Joelheira em Neoprene com Orifício', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/joelheira-articulada-2.jpg'
		},
		{
			id: 50, name: 'Joelheira em Neoprene Articulada', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/joelheira-orificio-2.jpg'
		},
		{
			id: 51, name: 'KAFO – Tutor Longo Unilateral', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-402-2.jpg'
		},
		{
			id: 52, name: 'KAFO – Eletrônico E-Mag Control', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-404-2.jpg'
		},
		{
			id: 53, name: 'KAFO – Eletrônico Free Walk Unilateral', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-405-2.jpg'
		},
		{
			id: 54, name: 'KAFO – Tutor Longo Bilateral com Cinto Pélvico', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-401-2.jpg'
		},
		{
			id: 55, name: 'KAFO – Unilateral com Trava Suíca', category: 'Órtese para Membros Inferiores', subcategory: 'KAFO', image: '/img/products/kafo-401-2.jpg'
		},
		{
			id: 56, name: 'Mola de Codivilla', category: 'Órtese para Membros Inferiores', subcategory: 'Mola/Walk On', image: '/img/products/mola-codivilla-2.jpg'
		},
		{
			id: 57, name: 'Órtese Curta Articulada com Contorno', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/afo-curta-articulada-com-cinta-425-2.jpg'
		},
		{
			id: 58, name: 'Órtese Estabilizadora de Joelho', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese estabilizadora', image: '/img/products/ortese-estbilizadora-joelho-2.jpg'
		},
		{
			id: 59, name: 'Órtese Estabilizadora de Quadril', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese estabilizadora', image: '/img/products/Produto-sem-foto.jpg'
		},
		{
			id: 60, name: 'Órtese estabilizadora de tornozelo', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese estabilizadora', image: '/img/products/ortese-estabiliz-tornozelo-2.jpg'
		},
		{
			id: 60, name: 'Órtese Noturna/Genu Valgo/Varo', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/ortese-noturna-2.jpg'
		},
		{
			id: 61, name: 'Órtese Trilateral', category: 'Órtese para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/ortese-trilateral-2.jpg'
		},
		{
			id: 62, name: 'Suspensório de Pavlik', category: 'Órtese para Membros Inferiores', subcategory: 'Suspensório', image: '/img/products/suspensorio-pav-2.jpg'
		},
		{
			id: 63, name: 'Tira Sub Patelar', category: 'Órtese para Membros Inferiores', subcategory: 'Joelheira', image: '/img/products/tira-sub-patelar-2.jpg'
		},
		{
			id: 64, name: 'Tutor de Sarmiento para Fêmur Unilateral', category: 'Órtese para Membros Inferiores', subcategory: 'Tutor', image: '/img/products/tutor-samiento-femur-2.jpg'
		},
		{
			id: 65, name: 'Tutor de Sarmiento para Tíbia', category: 'Órtese para Membros Inferiores', subcategory: 'Tutor', image: '/img/products/tutor-s-tibia-2.jpg'
		},
		{
			id: 66, name: 'Tutor de Sarmiento para Ulna', category: 'Órtese para Membros Superiores', subcategory: 'Tutor', image: '/img/products/tutor-s-ulna-2.jpg'
		},
		{
			id: 67, name: 'Walk On órtese em fibra de carbono', category: 'Órtese para Membros Superiores', subcategory: 'Mola/Walk On', image: '/img/products/walk-on-2.jpg'
		},
		{
			id: 68, name: 'Palmilha com "U" Assimétrico', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-U-2.jpg'
		},
		{
			id: 69, name: 'Palmilha com Amortecedor de Calcâneo e Piloto', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-amortecedor-2.jpg'
		},
		{
			id: 70, name: 'Palmilha com Apoio Retrocapital (Piloto)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-apoio-2.jpg'
		},
		{
			id: 71, name: 'Palmilha com Arco de Cunha Medial no Retropé', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-arco-2.jpg'
		},
		{
			id: 72, name: 'Palmilha com Barra Metatarsal', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-barra-2.jpg'
		},
		{
			id: 73, name: 'Palmilha com Cunha Lateral no Retropé', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-c-cunha-lateral-3.jpg'
		},
		{
			id: 74, name: 'Palmilha com Cunha Pronadora do Antepé', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-c-cunha-lateral-1-2.jpg'
		},
		{
			id: 75, name: 'Palmilha com Cunha Pronadora do Antepé', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-c-cunha-lateral-1-2.jpg'
		},
		{
			id: 76, name: 'Palmilha com reforço no arco longitudinal', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-reforco-2.jpg'
		},
		{
			id: 77, name: 'Palmilha Dinâmica', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-dinamica-2.jpg'
		},
		{
			id: 78, name: 'Palmilha Helicoidal', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-helico-2.jpg'
		},
		{
			id: 79, name: 'Palmilha Valente - correção 1 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Infantil', image: '/img/products/palmilha-inf-1-2.jpg'
		},
		{
			id: 80, name: 'Palmilha Valente - correção 1 (adulta)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-adulto-1-2.jpg'
		},
		{
			id: 81, name: 'Palmilha Valente – Correção 2 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Infantil', image: '/img/products/Produto-sem-foto.jpg'
		},
		{
			id: 82, name: 'Palmilha Valente – Correção 2 (adulto)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-reforco-2.jpg'
		},
		{
			id: 83, name: 'Palmilha Valente – Correção 3 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-com-reforco-2.jpg', description: 'A Palmilha Valente – Correção 3 é indicada para a cunha pronadora do antepé com ¼ de esfera no navicular.'
		},
		{
			id: 84, name: 'Palmilha Valente – Correção 3 (adulta)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-adulto-3-2.jpg', description: 'Apoio acentuado da abóbada plantar, cunha varizante do retropé.'
		},
		{
			id: 85, name: 'Palmilha Valente – Correção 4 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-inf-4-2.jpg', description: 'A Palmilha Valente – Correção 4 é indicada para cunha varizante no retropé e pronadora do antepé com ¼ de esfera no navicular.'
		},
		{
			id: 86, name: 'Palmilha Valente – Correção 4 (adulto)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-adulto-4-2.jpg', description: 'Apoio acentuado da abóbada plantar, cunha varizante do retropé e cunha pronadora.'
		},
		{
			id: 87, name: 'Palmilha Valente – Correção 5 (infantil)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/Produto-sem-foto.jpg', description: 'Alertas para correção de adução do ente-pé no primeiro metatarso e no cuboide com apófise do calcâneo.'
		},
		{
			id: 88, name: 'Palmilha Valente – Correção 5 (adulto)', category: 'Palmilhas Ortopédicas', subcategory: 'Adulto', image: '/img/products/palmilha-adulto-5-2.jpg', description: 'A Palmilha Valente – Correção 5 é indicada para apoio da abóbada planar com “U” assimétrico no calcâneo e amortecedor.'
		},
		{
			id: 89, name: 'Maiôs pós-mastectomia', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/Maio-protese-mamaria-2.jpg', description: 'Desenvolvido especialmente para mulheres submetidas a operações de mastectomia.'
		},
		{
			id: 90, name: 'Prótese Mamária Gota 1', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/protese-mamaria-gota-2.jpg', description: 'Indicada para casos de cirurgia da mastectomia radical, com perda total do tecido . Complemento mamário de silicone simetricamente adaptável e maior textura.'
		},
		{
			id: 91, name: 'Prótese Mamária Gota 2', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/protese-mamaria-gota-802-2.jpg', description: 'Desenvolvida para pacientes de baixo poder aquisitivo e nos casos de mastectomia radical com perda total do tecido. Complemento mamário de silicone simetricamente adaptável sem pigmentação.'
		},
		{
			id: 92, name: 'Prótese Mamária Triangular 1', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/protese-mamaria-triangular-2.jpg', description: 'Pacientes com pouca perda de tecido. Desenvolvido para atender mulheres que sofrem de assimetria mamária, contribuindo na recuperação emocional e psicologia bem como na retomada de vida normal do corpo.'
		},
		{
			id: 93, name: 'Prótese Mamária Triangular 2', category: 'Próteses', subcategory: 'Prótese de Mama Externa', image: '/img/products/protese-mamaria-triangular-2.jpg', description: 'Pacientes com pouca perda de tecido. Complemento mamário de silicone simetricamente adaptável, anatomicamente desenvolvido para perfeito contato com o corpo e parte interna côncava para maior conforto.'
		},
		{
			id: 94, name: 'Soutien Pós Mastectomia', category: 'Próteses', subcategory: 'Próteses oculares', image: '/img/products/sutia-protese-mamaria-2.jpg', description: 'Modelo desenvolvido especialmente para mulheres submetidas a operações de mastectomia. Forrado internamente com algodão nos dois bojos.'
		},

		// ... more products
	]);
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [filters, setFilters] = useState({ category: '', subcategory: '' });
	const [currentPage, setCurrentPage] = useState(1);

	const handleFilterChange = (newFilters) => {
		setFilters(newFilters);
		setCurrentPage(1); // Reseta para a primeira página ao aplicar filtros
	};

	useEffect(() => {
		const { category, subcategory, searchTerm } = filters;
		const filtered = products.filter((product) => {
			const matchesCategory = category ? product.category === category : true;
			const matchesSubcategory = subcategory ? product.subcategory === subcategory : true;
			const matchesSearchTerm = searchTerm
				? product.name.toLowerCase().includes(searchTerm.toLowerCase())
				: true;

			return matchesCategory && matchesSubcategory && matchesSearchTerm;
		});
		setFilteredProducts(filtered);
	}, [filters, products]);

	const productsPerPage = window.innerWidth <= 768 ? 3 : 10;
	const paginatedProducts = filteredProducts.slice(
		(currentPage - 1) * productsPerPage,
		currentPage * productsPerPage
	);

	return (
		<main>
			<div className="products-hero py-5 px-4">
				<h1 className="products-title">Produtos</h1>
				<p className='products-subtitle'>Os produtos da Ortopedia Biotécnica oferecem soluções de alta qualidade para a reabilitação e o conforto dos clientes.</p>
				<p className='products-subtitle'>Clique ou toque em cada produto para saber mais.</p>
			</div>
			<div className="p-5">
				<Filter onFilterChange={handleFilterChange} />
				<ProductsGrid products={paginatedProducts} />
				<Pagination
					currentPage={currentPage}
					totalItems={filteredProducts.length}
					itemsPerPage={productsPerPage}
					onPageChange={(page) => setCurrentPage(page)}
				/>
			</div>
		</main>
	);
};

export default Products;