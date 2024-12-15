import styles from "./TodoListController.module.scss";

// context import
import ThemeContext from "../../../context/ThemeContext";
import { useTheme } from "../../../context/ThemeContext";
import { useData } from "../../../context/DataContext";

const TodoListController = function () {
  const { theme } = useTheme(ThemeContext);
  const { setFilterMethod } = useData();

  return (
    <div
      className={`${styles.todoListController} ${
        theme === "dark" ? styles.dark : ""
      }`}
    >
      <button className={styles.active} onClick={() => setFilterMethod("all")}>
        All
      </button>
      <button onClick={() => setFilterMethod("active")}>Active</button>
      <button onClick={() => setFilterMethod("completed")}>Completed</button>
    </div>
  );
};

export default TodoListController;
