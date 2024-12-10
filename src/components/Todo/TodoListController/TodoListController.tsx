import styles from "./TodoListController.module.scss";

// context import
import ThemeContext from "../../../context/ThemeContext";
import { useTheme } from "../../../context/ThemeContext";

const TodoListController = function () {
  const { theme } = useTheme(ThemeContext);

  return (
    <div
      className={`${styles.todoListController} ${
        theme === "dark" ? styles.dark : ""
      }`}
    >
      <button className={styles.active}>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

export default TodoListController;
