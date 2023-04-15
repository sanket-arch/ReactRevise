import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blogdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error, isPending } = useFetch(
    "http://localhost:8000/blogs/" + id
  );
  const handleDelete = (e) => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{data.error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <p>{data.body}</p>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
};

export default Blogdetails;
