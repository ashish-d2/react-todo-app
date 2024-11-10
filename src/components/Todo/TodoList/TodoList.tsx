import styles from "./TodoList.module.scss";

// imports
import TodoListItem from "./TodoListItem/TodoListItem";

const TodoList = function () {
  return (
    <div className={styles.todo_list}>
      <TodoListItem />
    </div>
  );
};

export default TodoList;
