function renderPagination(currentPage, totalPages) {
	const paginationContainer = document.getElementById('pagination');
	paginationContainer.innerHTML = ''; // Limpa o container
  
	// Função auxiliar pra criar botões
	const createButton = (text, isActive = false, isDisabled = false) => {
	  const button = document.createElement('button');
	  button.textContent = text;
	  button.className = isActive ? 'active' : '';
	  button.disabled = isDisabled;
	  button.addEventListener('click', () => {
		if (!isDisabled) renderPagination(Number(text), totalPages);
	  });
	  return button;
	};
  
	// Adiciona botão "Anterior"
	paginationContainer.appendChild(
	  createButton('Anterior', false, currentPage === 1)
	);
  
	// Lógica pra exibir botões dinâmicos
	for (let i = 1; i <= totalPages; i++) {
		if (
		  i === 1 || // Primeira página
		  i === totalPages || // Última página
		  i === currentPage || // Página atual
		  i === currentPage - 1 || // Página antes da atual
		  i === currentPage + 1 // Página depois da atual
		) {
		  paginationContainer.appendChild(createButton(i, i === currentPage));
		} else if (
		  i === 2 && currentPage > 4 || // Adiciona reticências no início
		  i === totalPages - 1 && currentPage < totalPages - 3 // Reticências no final
		) {
		  const dots = document.createElement('span');
		  dots.textContent = '...';
		  paginationContainer.appendChild(dots);
		}
	  }
  
	// Adiciona botão "Próximo"
	paginationContainer.appendChild(
	  createButton('Próximo', false, currentPage === totalPages)
	);
  }
  
  // Inicializa paginação
  renderPagination(1, 10); // Troque "10" pelo número total de páginas
  