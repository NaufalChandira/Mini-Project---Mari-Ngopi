import Header from "../../components/header";
import talk2 from "../../assets/jkt/talk/2.jpg";
import talk3 from "../../assets/jkt/talk/3.jpg";
import talk4 from "../../assets/jkt/talk/4.jpg";

export default function Teras() {
  return (
    <>
      <Header />
      <center>
        <h1 className="title-ctlg">Talk Kopi</h1>
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
              <img src={talk2} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item active">
            <center>
              <img src={talk3} className="d-block img-crsl" alt="..." />
            </center>
          </div>
          <div className="carousel-item">
            <center>
              <img src={talk4} className="d-block img-crsl" alt="..." />
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
                <p>Tiramisu Latte Rp.13.000</p>
                <p>Pink Panther Rp.10.000</p>
                <p>Talk Kopi Rp.10.000</p>
                <p>Green Tea Rp.10.000</p>
                <p>Mango Breeze Rp.10.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home2">
            <div className="card-body">
              <div className="card-text menu-title">
                <p>Kentang Goreng Balado Rp.18.018</p>
                <p>Mix Platter Rp.31.531</p>
                <p>Singkong Goreng Balado Rp.14.414</p>
                <p>Tela-Tela Rp.16.216</p>
                <p>Indomie Goreng Telur Rp.16.000</p>
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
          href="https://g.page/talk-kopi-jaktim?share"
          className="title-address"
        >
          Jl. Raya Mabes Hankam No.45, RT.2/RW.2, Ceger, Kec. Cipayung, Kota
          Jakarta Timur, Daerah Khusus Ibukota Jakarta 13820
        </a>
      </center>
    </>
  );
}
