import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize: number = 10;
  const [currentPage, setcurrentPage] = useState<number>(1);
  const { data: posts, error, isLoading } = usePosts({ pageSize, currentPage });

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading......</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button disabled={currentPage === 1} className="btn btn-primary my-2" onClick={() => setcurrentPage(currentPage - 1)}>Previous</button>
      <button className="btn btn-primary my-2 ms-1" onClick={() => setcurrentPage(currentPage + 1)}>Next</button>
    </>
  );
};

export default PostList;
