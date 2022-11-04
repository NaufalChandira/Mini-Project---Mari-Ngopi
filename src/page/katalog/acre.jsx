import Header from "../../components/header";
import anemos2 from "../../assets/jkt/anemos/2.jpg";
import anemos3 from "../../assets/jkt/anemos/3.jpg";
import anemos4 from "../../assets/jkt/anemos/4.jpg";

export default function Tanatap() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">The Acre</h1>
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
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <center>
              <img src={anemos2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={anemos3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={anemos4} className="d-block img-crsl" alt="..." />
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
                <p>Ice Lychee Tea Rp.55.000</p>
                <p>Virgin Mojito.75.000</p>
                <p>Caramel Cold Brew Rp.65.000</p>
                <p>Cappucino Rp.48.000</p>
                <p>Ginger Tea Rp.65.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Crepes Salted Caramel Rp.85.000</p>
                <p>Tiramisu Rp.90.000</p>
                <p>Chicken Teriyaki Rp.165.000</p>
                <p>Salmon Teriyaki Rp.245.000</p>
                <p>Nachos Rp.80.000</p>
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
          href="https://goo.gl/maps/ZspEVTUdFX79pdP5A"
          className="title-address"
        >
          Jl. HOS. Cokroaminoto No.100, RT.2/RW.5, Menteng, Kec. Menteng, Kota
          Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10310
        </a>
      </center>
    </>
  );
}
