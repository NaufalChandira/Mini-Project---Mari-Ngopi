import Header from "../../components/header";
import nako2 from "../../assets/jkt/nako/2.png";
import nako3 from "../../assets/jkt/nako/3.png";
import nako4 from "../../assets/jkt/nako/4.png";

export default function Teras() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">Kopi Nako Kalisari</h1>
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
              <img src={nako2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={nako3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={nako4} className="d-block img-crsl" alt="..." />
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
                <p>Es Kopi Nako Rp.23.000</p>
                <p>Mango Lassie Rp.29.000</p>
                <p>Avocado Coffee Rp.29.000</p>
                <p>Ice Latte Rp.29.000</p>
                <p>Ice Matcha Latte Rp.29.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Tahu Cabe Garam Rp.20.000</p>
                <p>Nasi Mangkok Kambing Rp.29.000</p>
                <p>Cuanki Rp.24.000</p>
                <p>Nasi Merem Melek Dori Rp.37.000</p>
                <p>Pisang Nako Rp.25.000</p>
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
          href="https://goo.gl/maps/qL1dczzWUMMXfsXE7"
          className="title-address"
        >
          Jl. Puskesmas No.10, RW.3, Kalisari, Kec. Ps. Rebo, Kota Jakarta
          Timur, Daerah Khusus Ibukota Jakarta 13790
        </a>
      </center>
    </>
  );
}
