import Header from "../../components/header";
import atelier2 from "../../assets/jkt/atelier/2.jpg";
import atelier3 from "../../assets/jkt/atelier/3.jpg";
import atelier4 from "../../assets/jkt/atelier/4.jpg";

export default function Tanatap() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">Atelier Coffee</h1>
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
              <img src={atelier2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={atelier3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={atelier4} className="d-block img-crsl" alt="..." />
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
                <p>Palmenzucker Rp.30.000</p>
                <p>Spainish Coffee Rp.30.000</p>
                <p>Chocolate Mint Rp.36.000</p>
                <p>Lotus Biscoff Rp.36.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Pink Skies Rp.36.000</p>
                <p>Blue Ocean Rp.30.000</p>
                <p>Lychee Tea Rp.26.500</p>
                <p>Blueberry Tea Rp.26.500</p>
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
          href="https://goo.gl/maps/YbLkztX6H1nnQUKX6"
          className="title-address"
        >
          Jl. Tanjung Duren Utara 2 No.452, RW.2, Tj. Duren Utara, Kec. Grogol
          petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470
        </a>
      </center>
    </>
  );
}
