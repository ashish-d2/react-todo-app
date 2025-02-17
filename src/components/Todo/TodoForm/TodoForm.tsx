import styles from "./TodoForm.module.scss";
import { useRef } from "react";

// importing context
import ThemeContext from "../../../context/ThemeContext";
import { useTheme } from "../../../context/ThemeContext";
import { useData } from "../../../context/DataContext";

const TodoForm = function () {
  const { theme } = useTheme(ThemeContext);
  const { addTodo } = useData();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmitBtnClick = function (event: React.FormEvent) {
    event.preventDefault();

    if (inputRef.current) {
      // getting data from input field and then adding it to Todo list
      // after adding resetting input field with and empty string
      // when input data is empty then clicking on submit btn does not submit

      const data = inputRef.current.value;

      // if input field is empty
      if (!data) {
        return;
      }

      addTodo(data);
      inputRef.current.value = "";
      console.log(data);
    }
  };

  return (
    <form
      className={`${styles.todoForm} ${
        theme === "light" ? "" : styles.todoForm_dark
      }`}
    >
      <button
        type="submit"
        className={styles.submit_btn}
        onClick={(e) => handleSubmitBtnClick(e)}
        aria-label="Submit Button"
      ></button>
      <input
        type="text"
        className={styles.todo_input_field}
        placeholder="Create a new todo..."
        ref={inputRef}
      />
    </form>
  );
};

export default TodoForm;
