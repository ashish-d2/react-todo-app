import styles from "./Todo.module.scss";

import TodoForm from "./TodoForm/TodoForm";

const Todo = function () {
  return (
    <div className={styles.todo}>
      <TodoForm />
    </div>
  );
};

export default Todo;
