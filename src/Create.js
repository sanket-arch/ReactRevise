import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("sanket");
  const [ispending, setIspending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title: title,
      body: body,
      author: author,
    };
    setIspending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setTitle("");
      setAuthor("sanket");
      setBody("");
      setIspending(false);
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <label>Blog Body:</label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          required
        />
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="sanket">sanket</option>
          <option value="mario">mario</option>
          <option value="pita">pita</option>
          <option value="lamb">lamb</option>
        </select>
        {!ispending ? (
          <button>Add Blog</button>
        ) : (
          <button disabled>Adding Blog...</button>
        )}
      </form>
    </div>
  );
};

export default Create;
