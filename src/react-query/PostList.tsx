import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading......</p>;

  return (
    <>
      <select className="form-select mb-3"
        onChange={(event) => setUserId(parseInt(event.currentTarget.value))}
        value={userId?.toString()}
      >
        <option value=""></option>
        <option value="1">User1</option>
        <option value="2">User2</option>
        <option value="3">User3</option>
      </select>

      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
