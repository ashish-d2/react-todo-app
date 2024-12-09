import styles from "./TodoForm.module.scss";

// importing context
import ThemeContext from "../../../context/ThemeContext";
import { useTheme } from "../../../context/ThemeContext";

const TodoForm = function () {
  const { theme } = useTheme(ThemeContext);

  console.log(theme);
  return (
    <form
      className={`${styles.todoForm} ${
        theme === "light" ? "" : styles.todoForm_dark
      }`}
    >
      <button type="submit" className={styles.submit_btn}></button>
      <input
        type="text"
        className={styles.todo_input_field}
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default TodoForm;
