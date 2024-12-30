import { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    subcategory: '',
    priceRange: '',
    searchTerm: '',
  });

  const categories = {
    'Calçados Ortopédicos': [],
    'Órtese para Membro Superior': [
      'Cinta',
      'Cotoveleira',
      'Espaldeira',
      'Splints',
      'Suporte',
      'Tala',
      'Tipoia',
    ],
    'Órtese para Tronco': ['Colete'],
    'Órteses para Cabeça e Pescoço': ['Colar Cervical'],
    'Órteses para Membros Inferiores': [
      'AFO',
      'Estabilizadora de tornozelo',
      'Imobilizador',
      'Joelheira',
      'KAFO',
      'Mola / Walk On',
      'Órtese',
      'Suspensório',
      'Tutor',
    ],
    'Palmilhas Ortopédicas': ['Adulto', 'Infantil'],
    'Próteses': ['Prótese de Mama Externa', 'Próteses Oculares'],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };

    // Resetar subcategoria se a categoria for alterada
    if (name === 'category') {
      updatedFilters.subcategory = '';
    }

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="filters-area mb-4">
      <input
        type="text"
        name="searchTerm"
        value={filters.searchTerm}
        placeholder="Buscar produtos"
        className="product-search form-control"
        onChange={handleInputChange}
      />
      <select
        name="category"
        className="filter-dropdown form-select"
        value={filters.category}
        onChange={handleInputChange}
      >
        <option value="">Todas as categorias</option>
        {Object.keys(categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {filters.category && categories[filters.category].length > 0 && (
        <select
          name="subcategory"
          className="filter-dropdown form-select"
          value={filters.subcategory}
          onChange={handleInputChange}
        >
          <option value="">Todas as subcategorias</option>
          {categories[filters.category].map((subcategory) => (
            <option key={subcategory} value={subcategory}>
              {subcategory}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
