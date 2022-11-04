import { Link } from "react-router-dom";
import Header from "../components/header";
import tanatap from "../assets/jkt/tanatap/1.jpg";
import teras from "../assets/jkt/teras/1.jpg";
import nako from "../assets/jkt/nako/1.1.1.jfif";
import talk from "../assets/jkt/talk/1.jpg";
import kobain from "../assets/jkt/kobain/1.jpg";
import stuja from "../assets/jkt/stuja/logo.jpg";
import anemos from "../assets/jkt/anemos/1.jpg";
import atelier from "../assets/jkt/atelier/1.jpg";
import goodhand from "../assets/jkt/goodhand/1.jpg";

export default function Catalogue() {
  return (
    <>
      <Header />
      <div className="catalogue">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={tanatap} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/tanatap" className="title-ctlg1">Tanatap Coffee</Link>
                </h5>
                <p className="card-text">Ampera, Jakarta Selatan</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={teras} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/teras" className="title-ctlg1">Teras Rumah Nenek</Link>
                </h5>
                <p className="card-text">Cibubur, Jakarta Timur</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={nako} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/nako" className="title-ctlg1">Kopi Nako Kalisari</Link>
                </h5>
                <p className="card-text">Kalisari, Jakarta Timur</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={talk} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/talk" className="title-ctlg1">Talk Kopi</Link>
                </h5>
                <p className="card-text">Ceger, Jakarta Timur</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={kobain} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/kobain" className="title-ctlg1">Kobain Coffee</Link>
                </h5>
                <p className="card-text">Kuningan, Jakarta Selatan</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={stuja} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/stuja" className="title-ctlg1">Stuja Coffee</Link>
                </h5>
                <p className="card-text">Cipete, Jakarta Selatan</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={anemos} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/acre" className="title-ctlg1">The Acre</Link>
                </h5>
                <p className="card-text">Menteng, Jakarta Pusat</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={atelier} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/atelier" className="title-ctlg1">Atelier Coffee</Link>
                </h5>
                <p className="card-text">Tanjung Duren, Jakarta Barat</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={goodhand} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to="/goodhand" className="title-ctlg1">Goodhand Coffee</Link>
                </h5>
                <p className="card-text">Sunter, Jakarta Utara</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
