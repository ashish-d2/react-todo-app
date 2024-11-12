import styles from "./TodoList.module.scss";

// imports
import TodoListItem from "./TodoListItem/TodoListItem";
import TodoListStatus from "./TodoListStatus/TodoListStatus";

const TodoList = function () {
  return (
    <div className={styles.todo_list}>
      <TodoListItem />

      <TodoListStatus />
    </div>
  );
};

export default TodoList;
