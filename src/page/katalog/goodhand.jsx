import Header from "../../components/header";
import goodhand2 from "../../assets/jkt/goodhand/2.jpg";
import goodhand3 from "../../assets/jkt/goodhand/3.jpg";
import goodhand4 from "../../assets/jkt/goodhand/4.jpg";
import goodhand5 from "../../assets/jkt/goodhand/5.jpg";

export default function Tanatap() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">Goodhand Coffee</h1>
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
              <img src={goodhand2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={goodhand3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={goodhand4} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={goodhand5} className="d-block img-crsl" alt="..." />
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
                <p>Espresso Rp.25.000</p>
                <p>Iced white Rp.36.000</p>
                <p>Affogato Rp.42.000</p>
                <p>Black Mamba Rp.42.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Mango Blaster Rp.40.000</p>
                <p>Matcha Rp.40.000</p>
                <p>Lychee Tea Rp.36.000</p>
                <p>Orange Juice Rp.50.000</p>
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
          href="https://goo.gl/maps/WzJKZaEjsXU561ua8"
          className="title-address"
        >
          Jalan Danau Sunter Utara Blok B-1B No. 24, RT.1/RW.10, Sunter Agung,
          Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14350
        </a>
      </center>
    </>
  );
}
