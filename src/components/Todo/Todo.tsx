import styles from "./Todo.module.scss";

import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoListController from "./TodoListController/TodoListController";

const Todo = function () {
  return (
    <div className={styles.todo}>
      <TodoForm />
      <TodoList />
      <TodoListController />
    </div>
  );
};

export default Todo;
