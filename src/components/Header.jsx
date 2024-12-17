import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
        <img src="./img/biotecnica-logo-branco-cortado.png" alt="Logo" style={{ height: '50px' }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Início
            </Link>
            <Link to="/about" className="nav-item nav-link">
              Sobre
            </Link>
            <Link to="/home#why-choose" className="nav-item nav-link">
              Por que a Biotécnica?
            </Link>
            <Link to="/home#rehab" className="nav-item nav-link">
              Processo
            </Link>
            <Link to="/home#special" className="nav-item nav-link">
              Especialidades
            </Link>
            <Link to="/produtos" className="nav-item nav-link">
              Produtos
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
