import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showInput, setShowInput] = useState(false); // Estado para mostrar o input
  const [inputValue, setInputValue] = useState(''); // Valor do input

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 0;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (totalPages <= 1) return null;

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      setShowInput(false); // Esconde o input se a navegação foi feita
      setInputValue(''); // Reseta o valor do input
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const page = parseInt(inputValue, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      handlePageClick(page);
    } else {
      alert(`Digite um número entre 1 e ${totalPages}`);
    }
  };

  const renderButtons = () => {
    if (isMobile) {
      return (
        <>
          <button disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)}>
            Anterior
          </button>
          <button className="active">{currentPage}</button>
          {currentPage < totalPages && (
            <span onClick={() => setShowInput(true)} style={{ cursor: 'pointer' }}>
              {showInput ? (
                <form onSubmit={handleInputSubmit}>
                  <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ width: '50px' }}
                  />
                </form>
              ) : (
                '...'
              )}
            </span>
          )}
          {currentPage < totalPages && (
            <button onClick={() => handlePageClick(totalPages)}>{totalPages}</button>
          )}
          <button disabled={currentPage === totalPages} onClick={() => handlePageClick(currentPage + 1)}>
            Próximo
          </button>
        </>
      );
    }

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        i === currentPage || 
        i === currentPage - 1 || 
        i === currentPage + 1
      ) {
        pages.push(
          <button
            key={i}
            className={currentPage === i ? 'active' : ''}
            onClick={() => handlePageClick(i)}
          >
            {i}
          </button>
        );
      } else if (
        (i === 2 && currentPage > 4) || 
        (i === totalPages - 1 && currentPage < totalPages - 3)
      ) {
        if (!pages.includes('...')) {
          pages.push(
            <span
              key={`dots-${i}`}
              onClick={() => setShowInput(true)}
              style={{ cursor: 'pointer' }}
            >
              {showInput ? (
                <form onSubmit={handleInputSubmit}>
                  <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{ width: '50px' }}
                  />
                </form>
              ) : (
                '...'
              )}
            </span>
          );
        }
      }
    }

    return (
      <>
        <button disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)}>
          Anterior
        </button>
        {pages}
        <button disabled={currentPage === totalPages} onClick={() => handlePageClick(currentPage + 1)}>
          Próximo
        </button>
      </>
    );
  };

  return <div className="pagination">{renderButtons()}</div>;
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
