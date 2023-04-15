import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  // const {
  //   data: blogs,
  //   error,
  //   isPending,
  // } = useFetch("http://localhost:8000/blogs");
  // console.log(blogs);
  const data = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      {data.error && <div>{data.error}</div>}
      {data.isPending && <div>Loading...</div>}
      {data.data && <BlogList blogs={data.data} />}
    </div>
  );
};

export default Home;
