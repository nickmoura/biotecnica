const links = document.querySelectorAll('.nav-link');

// Função para verificar o hash e ativar o link correto
function setActiveLink() {
  const currentHash = window.location.hash || '#'; // Pega o hash da URL ou o início (#)
  
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    }
  });
}

// Chama a função quando o hash muda (ao clicar no link)
window.addEventListener('hashchange', setActiveLink);

// Chama a função ao carregar a página para verificar o hash inicial
window.addEventListener('load', setActiveLink);
