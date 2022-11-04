import Header from "../../components/header";
import stuja2 from "../../assets/jkt/stuja/2.jpg";
import stuja3 from "../../assets/jkt/stuja/3.jpg";
import stuja4 from "../../assets/jkt/stuja/4.jpg";
import stuja5 from "../../assets/jkt/stuja/5.jpg";

export default function Teras() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">Stuja Coffee</h1>
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
              <img src={stuja2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={stuja3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={stuja4} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={stuja5} className="d-block img-crsl" alt="..." />
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
              <p>Kopi Susu Bumi Rp.35.000</p>
        <p>Kopi Karamel Blender Rp.48.000</p>
        <p>Iced Tea Rp.20.000</p>
        <p>Hot Cappuccino Rp.33.000</p>
        <p>hot Caffe Latte Rp.33.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
              <p>Kentang Goreng Rp.25.000</p>
        <p>Fettuccine Carbonara Rp.53.000</p>
        <p>Spaghetti Bolognese Rp.53.000</p>
        <p>Nasi Goreng Hongkong Rp.53.000</p>
        <p>Roti Lapis Rp.58.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <center>
        <h2 className="menu">Lokasi</h2>
        <br />
        <a href="https://g.page/stuja-coffeeshop-cipete?share" className="title-address">19, Jl. Cipete Raya No.18, RT.8/RW.3, Cipete Raya, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410</a>
      </center>
    </>
  );
}
