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
			<div className="products-hero about">
				<h1 className="products-title">Produtos</h1>
			</div>

			<div className="py-5 px-3">
				{/* Componente de Filtro */}
				<Filter onFilterChange={handleFilterChange} />
				{/* Grid de Produtos Filtrados */}
				<ProductsGrid products={filteredProducts} />
			</div>
		</main>
	);
};

export default Products;
