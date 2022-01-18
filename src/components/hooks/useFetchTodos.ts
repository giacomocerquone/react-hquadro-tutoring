import { useState, useEffect } from "react";

interface ITodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

interface Params {}

const fetchIt = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: ITodo[] = await res.json();

    return data;
  } catch (e) {
    console.log("Error", e);
  }
};

const useFetchTodos = (params: Params) => {
  const [todos, setTodos] = useState<ITodo[]>();

  useEffect(() => {
    // IIFE
    (async () => {
      const todosRes = await fetchIt();
      setTodos(todosRes);
    })();
  }, []); // dependency array

  return { todos };
};

export default useFetchTodos;