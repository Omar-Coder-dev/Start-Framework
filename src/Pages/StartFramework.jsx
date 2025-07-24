import './StartFramework.css';

export default function StartFramework() {
    return (
    <header className="vh-100 background-color text-white d-flex justify-content-center align-items-center">
      <div className="text-center">
        <img className="w-50" src={import.meta.env.BASE_URL + "/Images/avataaars.svg"} alt="" />
        <h1 className="text-uppercase fw-bold display-4 mb-3">Start Framework</h1>

        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="bg-white" style={{ height: '2px', width: '80px' }}></div>
          <div className="mx-3">
            <i className="fa-solid fa-star fs-4"></i>
          </div>
          <div className="bg-white" style={{ height: '2px', width: '80px' }}></div>
        </div>

        <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );

}
