import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePosts = () => {
  const fetchPosts = () => {
    
    const result = axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);

    return result;
  };

  return useQuery<Post[], Error>({
    queryKey: ["Posts"],
    queryFn: fetchPosts,
    staleTime: 1*60*1000, //1 min
  });
};

export default usePosts;
