import styles from "./TodoForm.module.scss";

const TodoForm = function () {
  return (
    <form className={styles.todoForm}>
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
