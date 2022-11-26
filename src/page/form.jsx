import Header from "../components/header";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../store/features/commentSlice";

export default function Form() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handlerOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nama = formData.get("nama");
    const konten = formData.get("konten");
    const isi = formData.get("isi");
    let newToDoList = !input
      ? alert("Title can't be empty")
      : dispatch(createComment({ nama, konten, isi }));

    return newToDoList;
  };



  return (
    <>
      <Header />
      <center>
        <h2 className="menu form-title-kmtr">Masukan Komentar</h2>
      </center>
      <div className="content">
        <form onSubmit={handleOnSubmit}>
          <div className="form-input">
            <div className="input-group">
              <input
                type="text"
                placeholder="Nama"
                onChange={handlerOnChange}
                className="me-4 input-text form-control"
                name="nama"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <br />
            <select
              type="text"
              placeholder="Tempat"
              onChange={handlerOnChange}
              className="me-4 input-text form-select"
              name="konten"
              aria-label="Default select example"
            >
              <option selected>Open this select menu</option>
              <option>Teras Rumah Nenek</option>
              <option>Tanatap Coffee</option>
              <option>Kopi Nako Kalisari</option>
              <option>Talk Kopi</option>
              <option>Kobain Coffee</option>
              <option>Stuja Coffee</option>
              <option>The Acre</option>
              <option>Atelier Coffee</option>
              <option>Goodhand Coffee</option>
            </select>
            <br />
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Komentar"
                onChange={handlerOnChange}
                className="me-4 input-text form-control"
                name="isi"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
          </div>
          <div className="button-design">
            <input type="submit" className="btn btn-form" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

