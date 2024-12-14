import styles from "./TodoList.module.scss";

// imports
import TodoListItem from "./TodoListItem/TodoListItem";
import TodoListStatus from "./TodoListStatus/TodoListStatus";
import TodoListEmpty from "../TodoListEmpty/TodoListEmpty";

// context import
import ThemeContext from "../../../context/ThemeContext";
import { useTheme } from "../../../context/ThemeContext";
import { useData } from "../../../context/DataContext";

const TodoList = function () {
  const { theme } = useTheme(ThemeContext);
  const { todos } = useData();

  console.log(todos, todos.length);

  // If todolist (todos) is empty then display TodoListEmpty message.
  return (
    <div
      className={`${styles.todo_list} ${
        theme === "dark" ? styles.todo_list_dark : ""
      }`}
    >
      {todos.length === 0 ? <TodoListEmpty theme={theme} /> : ""}

      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todoMessage={todo.text}
          todoStatus={todo.status}
        />
      ))}

      <TodoListStatus theme={theme} />
    </div>
  );
};

export default TodoList;
