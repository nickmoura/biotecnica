import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: "",
    subcategory: "",
    searchTerm: "",
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1025);

  const categories = {
    "Calçados Ortopédicos": [],
    "Órtese para Membro Superior": [
      "Cinta",
      "Cotoveleira",
      "Espaldeira",
      "Splints",
      "Ombreira",
      "Suporte",
      "Tala",
      "Tipoia",
    ],
    "Órtese para Tronco": ["Colete"],
    "Órteses para Cabeça e Pescoço": ["Colar Cervical"],
    "Órteses para Membros Inferiores": [
      "AFO",
      "Estabilizadora de tornozelo",
      "Imobilizador",
      "Joelheira",
      "KAFO",
      "Mola / Walk On",
      "Órtese",
      "Suspensório",
      "Tutor",
    ],
    "Palmilhas Ortopédicas": ["Adulto", "Infantil"],
    "Próteses": ["Prótese de Mama Externa", "Próteses Oculares"],
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1025);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };

    // Resetar subcategoria se a categoria for alterada
    if (name === "category") {
      updatedFilters.subcategory = "";
    }

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleCategoryClick = (category) => {
    const updatedFilters = { ...filters, category, subcategory: "" };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSubcategoryClick = (subcategory) => {
    const updatedFilters = { ...filters, subcategory };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleClearFilters = () => {
    const clearedFilters = { category: "", subcategory: "", searchTerm: "" };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="filters-area mb-4">
      {/* Botão de Limpar Filtro (primeiro item) */}
      <button
        className="clear-filters btn btn-primary btn-sm mb-3"
        onClick={handleClearFilters}
      >
        Limpar Filtros
      </button>

      <input
        type="text"
        name="searchTerm"
        value={filters.searchTerm}
        placeholder="Buscar produtos"
        className="product-search form-control"
        onChange={handleInputChange}
      />

      {/* Tela menor: Exibe dropdowns */}
      {isMobile ? (
        <>
          <select
            name="category"
            className="filter-dropdown form-select mt-2"
            value={filters.category}
            onChange={handleInputChange}
          >
            <option value="">Selecione uma categoria</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {filters.category && categories[filters.category].length > 0 && (
            <select
              name="subcategory"
              className="filter-dropdown form-select mt-2"
              value={filters.subcategory}
              onChange={handleInputChange}
            >
              <option value="">Selecione uma subcategoria</option>
              {categories[filters.category].map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          )}
        </>
      ) : (
        // Tela maior: Exibe lista de categorias e subcategorias
        Object.keys(categories).map((category) => (
          <div key={category} className="category-group mt-3">
            <strong
              className="category-item"
              onClick={() => handleCategoryClick(category)}
              style={{ cursor: "pointer" }} // Torna o texto clicável
            >
              {category}
            </strong>
            {categories[category].length > 0 && (
              <ul className="subcategory-list">
                {categories[category].map((subcategory) => (
                  <li key={subcategory}>
                    <button
                      className="subcategory-item"
                      onClick={() => handleSubcategoryClick(subcategory)}
                    >
                      {subcategory}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      )}
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;