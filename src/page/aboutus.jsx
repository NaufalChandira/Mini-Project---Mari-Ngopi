import {Link} from "react-router-dom"
import Header from "../components/header"
import Profile from "../assets/profile.jpg"

export default function AboutUs () {
    return (
        <>
        <Header/>
        <div className="about">
        <center>
        <img src={Profile} alt="" srcset="" />
        <br />
        <h1>Naufal Hadi Chandira</h1>
        <br />
        <h3>Universitas Gunadarma</h3>
        <br />
        <i className="bi bi-instagram">@naufalchand_</i>
        <br />
        <i className="bi bi-linkedin">Naufal Hadi Chandira</i>
        <br />
        <i className="bi bi-envelope">hadinaufal11@gmail.com</i>
        <br />
        <Link to="/admin">Admin</Link>
        </center>
        </div>
        </>
    )
}