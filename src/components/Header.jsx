import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <img src="/img/logo-biotecnica-original-cortado.png" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Início
            </Link>
            <Link to="/about" className="nav-item nav-link">
              Sobre
            </Link>
            <Link to="/home#why-choose" className="nav-item nav-link">
              Por que nos escolher?
            </Link>
            <Link to="/#rehab" className="nav-item nav-link">
              Processo de reabilitação
            </Link>
            <Link to="/#special" className="nav-item nav-link">
              Especialização e <em className="know-how">Know-How</em>
            </Link>
            <Link to="/produtos" className="nav-item nav-link">
              Produtos
            </Link>
          </div>
          <Link
            to="/#special"
            className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
          >
            Agendar avaliação
          </Link>
        </div>
      </nav>

    </header>
  );
};

export default Header;
