import styles from "./TodoListController.module.scss";

// context import
import ThemeContext from "../../../context/ThemeContext";
import { useTheme } from "../../../context/ThemeContext";
import { useData } from "../../../context/DataContext";

const TodoListController = function () {
  const { theme } = useTheme(ThemeContext);
  const { filterMethod, setFilterMethod } = useData();

  return (
    <div
      className={`${styles.todoListController} ${
        theme === "dark" ? styles.dark : ""
      }`}
    >
      <button
        className={`${filterMethod === "all" ? styles.active : ""}`}
        onClick={() => setFilterMethod("all")}
      >
        All
      </button>
      <button
        className={`${filterMethod === "active" ? styles.active : ""}`}
        onClick={() => setFilterMethod("active")}
      >
        Active
      </button>
      <button
        className={`${filterMethod === "completed" ? styles.active : ""}`}
        onClick={() => setFilterMethod("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TodoListController;
