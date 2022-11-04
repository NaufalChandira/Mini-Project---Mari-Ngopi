import Header from "../../components/header";
import teras2 from "../../assets/jkt/teras/2.jpg";
import teras3 from "../../assets/jkt/teras/3.jpg";
import teras4 from "../../assets/jkt/teras/4.jpg";
import teras5 from "../../assets/jkt/teras/5.jpg";

export default function Teras() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">Teras Rumah Nenek</h1>
      </center>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <center>
              <img src={teras2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={teras3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={teras4} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={teras5} className="d-block img-crsl" alt="..." />
            </center>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
      <center>
        <h2 className="menu">Daftar Menu</h2>
      </center>
      <div className="row">
        <div className="col-sm-6">
          <div className="card bg-transparent home">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Kopiah Rp.23.000</p>
                <p>Kopinang Rp.30.000</p>
                <p>Cafe' Machiato Rp.35.000</p>
                <p>Kocok Oreo/Regal Rp.28.000</p>
                <p>Leci/lemon Squash Rp.22.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Nasi Goreng Se'i Sapi Rp.45.000</p>
                <p>Nasi Goreng Daun Jeruk Rp.38.000</p>
                <p>Donut Rp.25.000</p>
                <p>Lumpia Rp.25.000</p>
                <p>crispy Chicken Skin Rp.30.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <center>
        <h2 className="menu">Lokasi</h2>
        <br />
        <a
          href="https://g.page/terasrumahnenek?share"
          className="title-address"
        >
          Jl. Abdulrahman No.46, RT.12/RW.5, Cibubur, Kec. Ciracas, Jakarta, Daerah Khusus Ibukota Jakarta 13720
        </a>
      </center>
    </>
  );
}
