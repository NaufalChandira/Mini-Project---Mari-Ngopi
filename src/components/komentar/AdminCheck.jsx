import { useDispatch } from "react-redux"
import { deleteComment } from "../../store/features/commentSlice"

export default function AdminCheck(komentar){
    const dispatch = useDispatch();
    return (
        <>
            <div className="list-admin" data-aos="flip-left">
                <div>
                    <div className="komentar">
                        <p className="nama-komentar">{komentar.komentar.nama}</p>
                    </div>
                    <div className="komentar">
                        <p className="isi-komentar">{komentar.komentar.konten}</p>
                    </div>
                    <div className="komentar">
                        <p className="isi-komentar">{komentar.komentar.isi}</p>
                    </div>
                </div>
                <div className="action komentar">
                    <i className="fa-solid fa-trash" onClick={() => dispatch(deleteComment(komentar.komentar.id))}></i>
                </div>
            </div>
        </>
    )
}