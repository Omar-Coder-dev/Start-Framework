export default function About() {
  return (
    <header className="vh-100 background-color text-white d-flex justify-content-center align-items-center">
      <div className="text-center container">
        <h1 className="text-uppercase fw-bold display-4 mb-3">
          About Component
        </h1>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="bg-white" style={{ height: "2px", width: "80px" }}></div>
          <div className="mx-3">
            <i className="fa-solid fa-star fs-4"></i>
          </div>
          <div className="bg-white" style={{ height: "2px", width: "80px" }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5 mx-2">
            <p className="fs-6">
              Freelancer is a free bootstrap theme created by Route. The download
              includes the complete source files including HTML, CSS, and JavaScript
              as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5 mx-2">
            <p className="fs-6">
              Freelancer is a free bootstrap theme created by Route. The download
              includes the complete source files including HTML, CSS, and JavaScript
              as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
