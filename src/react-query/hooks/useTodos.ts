import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  }

const useTodos = () =>{
    const fetchTodos = () => {
        const result = axios
          .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
          .then((res) => res.data);
        return result;
    }

    return useQuery<Todo[],Error>({
        queryKey:['Todos'],
        queryFn: fetchTodos,
    })
}

export default useTodos;