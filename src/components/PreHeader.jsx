
const PreHeader = () => {
  return (
    <div className="pre-header container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
        <div className="col-lg-8 text-center text-lg-start mb-lg-0">
          <div className="d-flex flex-wrap">
            <a
              href="https://maps.app.goo.gl/R8YNTPuoatUjkdPP9"
              className="text-light me-4"
            >
              <i className="fas fa-map-marker-alt text-primary me-2"></i>Rua
              Cônego Januário Barbosa, 218
            </a>
            <a href="tel:153233-0616" className="text-light me-4">
              <i className="fas fa-phone-alt text-primary me-2"></i>(15)
              3233-0616
            </a>
            <a
              href="mailto:vendas@ortopediabiotecnica.com.br"
              className="text-light me-0"
            >
              <i className="fas fa-envelope text-primary me-2"></i>
              vendas@ortopediabiotecnica.com.br
            </a>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div className="d-flex align-items-center justify-content-end">
            <a
              href="https://api.whatsapp.com/send?phone=5515996387470"
              className="btn btn-light social-icon-btn btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.facebook.com/ortopediabiotecnica"
              className="btn btn-light social-icon-btn btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/ortopediabiotecnica/"
              className="btn btn-light social-icon-btn btn-square border rounded-circle nav-fill me-3"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
