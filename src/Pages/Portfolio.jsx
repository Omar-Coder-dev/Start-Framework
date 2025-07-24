import { useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, img: "Images/log-cabin.png", bg: "bg-danger-subtle" },
    { id: 2, img: "Images/cake.png", bg: "bg-info" },
    { id: 3, img: "Images/tent.png", bg: "bg-dark text-white" },
    { id: 4, img: "Images/log-cabin.png", bg: "bg-danger-subtle" },
    { id: 5, img: "Images/cake.png", bg: "bg-info" },
    { id: 6, img: "Images/tent.png", bg: "bg-dark text-white" },
  ];
  return (
    <div className="container text-center mt-5 my-5">
      <h1 className="text-uppercase fw-bold fs-1 mb-3">portfolio component</h1>

      <div className="d-flex justify-content-center align-items-center mb-3">
        <div
          className="bg-black"
          style={{ height: "2px", width: "80px" }}
        ></div>
        <div className="mx-3">
          <i className="fa-solid fa-star fs-4 "></i>
        </div>
        <div
          className="bg-black"
          style={{ height: "2px", width: "80px" }}
        ></div>
      </div>

      {/* Portfolio Grid */}
      <div className="row g-4">
        {items.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div
              className={`position-relative rounded overflow-hidden portfolio-item ${item.bg}`}
              role="button"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.img}
                alt="portfolio"
                className="img-fluid w-100 object-fit-cover"
                style={{ height: "250px" }}
              />
              <div className="portfolio-overlay">
                <i className="fas fa-plus fa-3x text-white"></i>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "#c2dbfe75" }}
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.img}
              alt="Full view"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      )}
    </div>
  );
}
