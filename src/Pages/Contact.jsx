import './Contact.css';

export default function Contact() {
  return (
    <section className="contact text-center py-5" id="contact">
      <div className="container">
        <h2 className="text-uppercase fw-bold fs-1">
          Contact Section
        </h2>
        <div className="divider d-flex align-items-center justify-content-center my-4">
          <div className="line bg-dark"></div>
          <i className="fa-solid fa-star mx-3 fs-3"></i>
          <div className="line bg-dark"></div>
        </div>

        <form className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="form-group mb-4 text-start">
            <input type="text" className="form-control border-0 border-bottom" placeholder="Name" />
          </div>
          <div className="form-group mb-4 text-start">
            <input type="text" className="form-control border-0 border-bottom" placeholder="Age" />
          </div>
          <div className="form-group mb-4 text-start">
            <input type="email" className="form-control border-0 border-bottom" placeholder="Email Address" />
          </div>
          <div className="form-group mb-4 text-start">
            <textarea className="form-control border-0 border-bottom" rows="4" placeholder="Message"></textarea>
          </div>
          <button type="submit" className="btn btn-success mt-3 px-5 py-2">Send</button>
        </form>
      </div>
    </section>
  );
}
