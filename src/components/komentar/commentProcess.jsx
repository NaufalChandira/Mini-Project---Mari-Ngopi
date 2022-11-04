import { useEffect } from "react";
import ListComment from "./listComment";
import { useSelector, useDispatch } from "react-redux";
import { fetchComment } from "../../store/features/commentSlice";

export default function CommentProcces(){
    const dispatch = useDispatch()
    const komentar = useSelector((state) => state.komentar.data)
    const componentStatus  = useSelector((state) => state.komentar.componentStatus)

    useEffect(() => {
        dispatch(fetchComment());
    },[componentStatus, dispatch])

    return(
        <>
            <div>
                <ul>
                    {komentar.map((comment) => (
                        <ListComment key={comment.id} comment={comment}/>
                    ))}
                </ul>
            </div>
        </>
    )
}