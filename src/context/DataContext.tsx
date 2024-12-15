import { createContext, ReactNode, useContext, useState } from "react";

// type
type Todo = {
  id: number;
  text: string;
  status: "active" | "completed";
};

interface DataContextType {
  todos: Todo[];
  filteredTodos: Todo[];
  addTodo: (text: string) => void;
  updateTodoStatus: (id: number, status: "completed" | "active") => void;
  deleteTodo: (id: number) => void;
  setFilterMethod: React.Dispatch<
    React.SetStateAction<"active" | "completed" | "all">
  >;
}

// Create a context
const DataContext = createContext<DataContextType | undefined>(undefined);

// Make a Provider function
const DataProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  // actual todo list
  const [todos, setTodos] = useState<Todo[]>([]);
  // state to cuntrol todo filter (all, active, completed). By default filter is "All".
  // setFilterMethod is passed to TodoListController compoenent
  const [filterMethod, setFilterMethod] = useState<
    "all" | "completed" | "active"
  >("all");

  // To add item in todo list
  const addTodo = function (text: string) {
    const newTodo: Todo = { id: Date.now(), text: text, status: "active" };

    setTodos((prev) => [...prev, newTodo]);
  };

  // function to update Todo list. It take (id and status) as an argument
  const updateTodoStatus = function (
    id: number,
    status: "completed" | "active"
  ) {
    const newStatus = status === "completed" ? "active" : "completed";

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  // function to delete todo item. It take "todo id" as an argument.
  const deleteTodo = function (id: number) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // FILTER METHODS
  // takes 'filterMethod' as argument and returns filter todos
  const getFilteredTodos = function (
    filterMethod: "all" | "completed" | "active"
  ) {
    if (filterMethod === "completed") {
      return todos.filter((todo) => todo.status === "completed");
    } else if (filterMethod === "active") {
      return todos.filter((todo) => todo.status === "active");
    }

    return todos;
  };

  // filterd Todos
  const filteredTodos = getFilteredTodos(filterMethod);

  return (
    <DataContext.Provider
      value={{
        todos,
        filteredTodos,
        addTodo,
        updateTodoStatus,
        deleteTodo,
        setFilterMethod,
      }}
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
