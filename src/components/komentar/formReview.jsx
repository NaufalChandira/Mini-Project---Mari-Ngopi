import { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../../store/features/commentSlice";

export default function FormKomentar() {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handlerOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput(name, value)
    }

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
<div className="content">
        <form onSubmit={handleOnSubmit}>
          <div className="form-input">
            <input
              type="text"
              placeholder="Nama"
              onChange={handlerOnChange}
              className="me-4 input-text"
              name="nama"
            />
            <input
              type="text"
              placeholder="Tempat"
              onChange={handlerOnChange}
              className="me-4 input-text"
              name="konten"
            />
            <input
              type="text"
              placeholder="Komentar"
              onChange={handlerOnChange}
              className="me-4 input-text"
              name="isi"
            />
          </div>
          <div className="button-design">
            <input type="submit" className="btn btn-form" />
          </div>
        </form>
      </div>
    )
}