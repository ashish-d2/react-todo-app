import styles from "./TodoListController.module.scss";

const TodoListController = function () {
  return (
    <div className={styles.todoListController}>
      <button className={styles.active}>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

export default TodoListController;
