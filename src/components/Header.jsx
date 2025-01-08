import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  const location = useLocation(); // Obtém o pathname e hash da URL atual.

  useEffect(() => {
    const links = document.querySelectorAll('[data-active-link]'); // Seleciona todos os links com o atributo.

    links.forEach((link) => {
      link.classList.remove('active'); // Remove a classe 'active' de todos os links.

      // Verifica se a URL atual combina com o atributo 'to' ou 'href' do link.
      const linkTo = link.getAttribute('to'); // Para <Link to="">
      const linkHref = link.getAttribute('href'); // Para <a href="">
      const currentPath = location.pathname + location.hash; // Caminho completo atual.

      if (linkTo === location.pathname || linkHref === currentPath) {
        link.classList.add('active'); // Adiciona a classe 'active' ao link correspondente.
      }
    });
  }, [location]); // Reexecuta sempre que a URL mudar.

  return (
    <header className="container-fluid position-relative">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand p-0">
          <img src="./img/biotecnica-logo-branco-cortado.png" alt="Logo" style={{ height: '50px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars" style={{ color: "var(--third-color)" }}></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link" data-active-link>
              Início
            </Link>
            <a href="/#about" className="nav-item nav-link" data-active-link>
              Sobre
            </a>
            <a href="/#why-choose" className="nav-item nav-link" data-active-link>
              Por que a Biotécnica?
            </a>
            <a href="/#rehab" className="nav-item nav-link" data-active-link>
              Processo
            </a>
            <a href="/#special" className="nav-item nav-link" data-active-link>
              Especialidades
            </a>
            <Link to="/produtos" className="nav-item nav-link" data-active-link>
              Produtos
            </Link>
            <Link to="/dados" className="nav-item nav-link" data-active-link>
              Dados
            </Link>
          </div>
          <a href="https://api.whatsapp.com/send?phone=5515996387470"
            className="navbar-schedule btn btn-primary rounded-pill py-2 px-4 flex-wrap flex-sm-shrink-0"
          >
            Agendar avaliação
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
