import { createContext, ReactNode, useContext, useState } from "react";

// type
type Todo = {
  id: number;
  text: string;
  status: "active" | "completed";
};

interface DataContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  updateTodoStatus: (id: number, status: "completed" | "active") => void;
  deleteTodo: (id: number) => void;
}

// Create a context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Make a Provider function
const DataProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = function (text: string) {
    const newTodo: Todo = { id: Date.now(), text: text, status: "active" };

    setTodos((prev) => [...prev, newTodo]);
  };

  const updateTodoStatus = function (
    id: number,
    status: "completed" | "active"
  ) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
  };

  const deleteTodo = function (id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <DataContext.Provider
      value={{ todos, addTodo, updateTodoStatus, deleteTodo }}
    >
      {children}
    </DataContext.Provider>
  );
};

// custom hook to consume DataContext
const useData = function () {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

// exports
export { DataProvider, useData };
