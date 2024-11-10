import styles from "./Todo.module.scss";

import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

const Todo = function () {
  return (
    <div className={styles.todo}>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
