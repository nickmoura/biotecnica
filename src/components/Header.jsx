import { Link } from "react-router-dom";

const Header = () => {

  const changeActivatedLink = function (currentElement) {
    const activatedElement = document.querySelector('[data-active-link].active');

    if (!activatedElement) return;

    activatedElement.classList.remove('active');
    currentElement.target.classList.add('active');
  };

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
          <span className="fa fa-bars" style={{color: "var(--third-color)"}} ></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link active" data-active-link onClick={changeActivatedLink}>
              Início
            </Link>
            <a href="/#about" className="nav-item nav-link" data-active-link onClick={changeActivatedLink}>
              Sobre
            </a>
            <a href="/#why-choose" className="nav-item nav-link" data-active-link onClick={changeActivatedLink}>
              Por que a Biotécnica?
            </a>
            <a href="/#rehab" className="nav-item nav-link" data-active-link onClick={changeActivatedLink}>
              Processo
            </a>
            <a href="/#special" className="nav-item nav-link" data-active-link onClick={changeActivatedLink}>
              Especialidades
            </a>
            <Link to="/produtos" className="nav-item nav-link" data-active-link onClick={changeActivatedLink}>
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
