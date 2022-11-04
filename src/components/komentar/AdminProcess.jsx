import { useEffect } from "react";
import AdminCheck from "./AdminCheck";
import { useSelector, useDispatch } from "react-redux";
import { fetchComment } from "../../store/features/commentSlice";

export default function AdminProcces(){
    const dispatch = useDispatch()
    const listOfKomentar = useSelector((state) => state.komentar.data)
    const componentStatus  = useSelector((state) => state.komentar.componentStatus)

    useEffect(() => {
        dispatch(fetchComment());
    },[componentStatus, dispatch])

    return(
        <>
            <div>
                <ul>
                    {listOfKomentar.map((komentar) => (
                        <AdminCheck key={komentar.id} komentar={komentar}/>
                    ))}
                </ul>
            </div>
        </>
    )
}