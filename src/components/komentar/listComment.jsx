export default function ListComment({ comment }) {
  return (
    <>
          <div className="card-body">
            <h2>{comment.nama}</h2>
              <h5 className="card-title">{comment.konten}</h5>
              <p className="card-text">{comment.isi}</p>
            </div>
    </>
  );
}
