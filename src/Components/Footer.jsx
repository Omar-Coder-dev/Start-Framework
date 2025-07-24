import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer className=" fs-5 footer-top text-white text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-3 fs-4">LOCATION</h5>
              <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-3 fs-4">AROUND THE WEB</h5>
              <div className="d-flex justify-content-center gap-3">
                <a className="btn btn-outline-light rounded-circle" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light rounded-circle" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light rounded-circle" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-outline-light rounded-circle" href="#"><i className="fab fa-dribbble"></i></a>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase mb-3 fs-4">ABOUT FREELANCER</h5>
              <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom bg-black text-white text-center py-3 fs-5">
        <p>Copyright © Your Website 2024</p>
      </div>
    </>
  );
}
