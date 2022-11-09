import Header from "../components/header";
import logo from "../assets/kopi.jpg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="row header-home">
        <div className="col-sm-6">
          <div className="card bg-transparent home">
            <div className="card-body">
              <h5 className="card-title title-text">Kopi</h5>
              <p className="card-text">
                Kopi adalah minuman hasil seduhan biji kopi yang telah disangrai
                dan dihaluskan menjadi bubuk. Kopi merupakan salah satu
                komoditas di dunia yang dibudidayakan lebih dari 50 negara. Dua
                spesies pohon kopi yang dikenal secara umum yaitu Kopi Robusta
                (Coffea canephora) dan Kopi Arabika (Coffea arabica). Pemrosesan
                kopi sebelum dapat diminum melalui proses panjang, yaitu dari
                pemanenan biji kopi yang telah matang baik dengan cara mesin
                maupun dengan tangan kemudian dilakukan pemrosesan biji kopi dan
                pengeringan sebelum menjadi kopi gelondong. Proses selanjutnya,
                yaitu penyangraian dengan tingkat derajat yang bervariasi.
                Setelah penyangraian, biji kopi digiling atau dihaluskan menjadi
                bubuk kopi sebelum kopi dapat diminum.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card bg-transparent home1">
            <div className="card-body">
              <img src={logo} alt="" className="img-logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
