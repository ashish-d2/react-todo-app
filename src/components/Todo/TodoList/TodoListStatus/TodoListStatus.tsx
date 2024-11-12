import styles from "./TodoListStatus.module.scss";

const TodoListStatus = function () {
  return (
    <div className={styles.todoListStatus}>
      <p>5 items left</p>
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoListStatus;
