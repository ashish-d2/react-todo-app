import styles from "./TodoListItem.module.scss";

// imports
import { ReactComponent as CrossIcon } from "./../../../../assets/images/icon-cross.svg";

const TodoListItem = function () {
  return (
    <div className={styles.todoList_item}>
      <div className={styles.todoBtnContainer}>
        <button className={styles.submit_btn}></button>
        <p>Jog around the park 3x</p>
      </div>

      <CrossIcon />
    </div>
  );
};

export default TodoListItem;
