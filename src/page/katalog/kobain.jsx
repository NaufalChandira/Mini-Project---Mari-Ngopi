import Header from "../../components/header";
import kobain2 from "../../assets/jkt/kobain/2.jpg";
import kobain3 from "../../assets/jkt/kobain/3.jpg";
import kobain4 from "../../assets/jkt/kobain/4.jpg";
import kobain5 from "../../assets/jkt/kobain/5.jpg";

export default function Teras() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">Kobain Coffee</h1>
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
              <img src={kobain2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={kobain3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={kobain4} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={kobain5} className="d-block img-crsl" alt="..." />
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
                <p>Chocolate Ice Rp.24.000</p>
                <p>Red Velvet Rp.24.000</p>
                <p>Mango Ice Rp.24.000</p>
                <p>Strawberry Rose Rp.27.000</p>
                <p>Lime Squash Rp.27.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Kopi Koba Cheese Cake Ice Rp.24.000</p>
                <p>Kopi Koba Aren Ice Rp.24.000</p>
                <p>Kopi Koba Klepon Ice Rp.24.000</p>
                <p>Caramel Latte Rp.30.000</p>
                <p>Cappucino Ice Rp.24.000</p>
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
          href="https://goo.gl/maps/ZfZtkTZJCy1FpgBJ6"
          className="title-address"
        >
          Mall Kuningan City, Jl. Prof. DR. Satrio No.18, Kuningan, Kecamatan
          Setiabudi, Daerah Khusus Ibukota Jakarta 12940
        </a>
      </center>
    </>
  );
}
