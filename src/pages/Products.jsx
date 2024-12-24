import { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import ProductsGrid from '../components/productsGrid';

const Products = () => {
	const [products] = useState([
		{
			id: 1, name: 'AFO – Órtese Curta Articulada', category: 'Órteses para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/afo-curta-articulada-com-cinta-2.jpg'
		},
		{
			id: 2, name: 'AFO – Órtese Curta de Reação ao Solo', category: 'Órteses para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/afo-curta-reacao-2.jpg'
		},
		{
			id: 3, name: 'AFO – Órtese Curta Rígida', category: 'Órteses para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/AFO-curta-rigida-2.jpg'
		},

		{
			id: 4, name: 'AFO – Tutor Curto', category: 'Órteses para Membros Inferiores', subcategory: 'Órtese', image: '/img/products/tutor-curto-2.jpg'
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
			id:16, name: 'Espaldeira para postura', category: 'Órtese para Membro Superior', subcategory: 'Espaldeira', image: '/img/products/espalmadeira-2.jpg'
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
		}

		// ... more products
	]);
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [filters, setFilters] = useState({ category: '', subcategory: '' });

	// Função que será chamada pelo Filter para atualizar os filtros
	const handleFilterChange = (newFilters) => {
		setFilters(newFilters);
	};

	// Efeito para aplicar o filtro
	useEffect(() => {
		const { category, subcategory } = filters;

		// Filtra os produtos com base nos filtros aplicados
		const filtered = products.filter((product) => {
			const matchesCategory = category ? product.category === category : true;
			const matchesSubcategory = subcategory ? product.subcategory === subcategory : true;
			return matchesCategory && matchesSubcategory;
		});

		setFilteredProducts(filtered);
	}, [filters, products]); // Rerun effect when filters or products change

	return (
		<main>
			<div className="products-hero py-5">
				<h1 className="products-title">Produtos</h1>
			</div>

			<div className="p-5">
				{/* Componente de Filtro */}
				<Filter onFilterChange={handleFilterChange} />
				{/* Grid de Produtos Filtrados */}
				<ProductsGrid products={filteredProducts} />
			</div>
		</main>
	);
};

export default Products;
