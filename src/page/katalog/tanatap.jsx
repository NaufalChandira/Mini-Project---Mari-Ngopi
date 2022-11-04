import Header from "../../components/header";
import tanatap2 from "../../assets/jkt/tanatap/2.jpg";
import tanatap3 from "../../assets/jkt/tanatap/3.jpg";
import tanatap4 from "../../assets/jkt/tanatap/4.jpg";
import tanatap5 from "../../assets/jkt/tanatap/5.jpg";

export default function Tanatap() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">Tanatap Coffee</h1>
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
              <img src={tanatap2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={tanatap3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={tanatap4} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={tanatap5} className="d-block img-crsl" alt="..." />
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
                <p>Kopi Susu Gula Aren Rp.39.000</p>
                <p>Vanilka Rp.39.000</p>
                <p>Earl Grey Milk Tea Rp.42.000</p>
                <p>Oreo Rp.65.000</p>
                <p>Pinky Winky Rp.52.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Tempeh Katsu Rp.32.000</p>
                <p>Tanatap Pisang Goreng Rp.32.000</p>
                <p>Rendang Fried Rice Rp.59.000</p>
                <p>Tanatap Signature Bowl Rp.49.000</p>
                <p>Bobo Ramen Stir Fry Rp.60.000</p>
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
          href="https://goo.gl/maps/GgCB493R2jZXhsQx6"
          className="title-address"
        >
          Jl. Ampera Raya No.129, Ragunan, Kec. Ps. Minggu, Kota Jakarta
          Selatan, Daerah Khusus Ibukota Jakarta 12560
        </a>
      </center>
    </>
  );
}
