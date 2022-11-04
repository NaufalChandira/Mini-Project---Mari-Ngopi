import Header from "../components/header"
import FormKomentar from "../components/komentar/formReview";
import AdminProcces from "../components/komentar/AdminProcess";

export default function Admin () {
    return (
        <>
        <Header/>
        <center>
        <h2 className="menu form-title-kmtr">Admin</h2>
        </center>
        <div className="content-form container" id="article">
                <FormKomentar/>
            </div>
            <br />
            <div className="list-form container">
                <AdminProcces/>
            </div>
        </>
    )
}