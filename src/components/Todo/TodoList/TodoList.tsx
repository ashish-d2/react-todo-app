import styles from "./TodoList.module.scss";

// imports
import TodoListItem from "./TodoListItem/TodoListItem";
import TodoListStatus from "./TodoListStatus/TodoListStatus";
import TodoListEmpty from "../TodoListEmpty/TodoListEmpty";

// context import
import ThemeContext from "../../../context/ThemeContext";
import { useTheme } from "../../../context/ThemeContext";

const TodoList = function () {
  const { theme } = useTheme(ThemeContext);

  return (
    <div
      className={`${styles.todo_list} ${
        theme === "dark" ? styles.todo_list_dark : ""
      }`}
    >
      <TodoListItem />
      {/* <TodoListEmpty theme={theme} /> */}

      <TodoListStatus theme={theme} />
    </div>
  );
};

export default TodoList;
