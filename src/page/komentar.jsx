import Header from "../components/header";
import CommentProcces from "../components/komentar/commentProcess";
import { Link } from "react-router-dom";

export default function Comment() {
  return (
    <>
      <Header />
      <center>
        <h2 className="form-title">Komentar</h2>
      </center>
      <br />
      <center>
      <div className="row ">
        <div className="col">
          <div className="card">
          <CommentProcces />
          </div>
        </div>
      </div>
      </center>
      <br />
      <Link to="/form">
        <button type="button" className="btn btn-success">
          Tambah Komentar
        </button>
      </Link>
    </>
  );
}