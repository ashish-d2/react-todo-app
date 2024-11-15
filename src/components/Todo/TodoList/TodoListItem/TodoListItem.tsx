import styles from "./TodoListItem.module.scss";

// imports
import { ReactComponent as CrossIcon } from "./../../../../assets/images/icon-cross.svg";

const TodoListItem = function () {
  return (
    <>
      <div className={styles.todoList_item}>
        <div className={styles.todoAndBtnContainer}>
          <button className={styles.submit_btn}></button>
          <p>Jog around the park 3x</p>
        </div>

        <CrossIcon className={styles.cross_icon} />
      </div>
      <hr className={styles.line} />
    </>
  );
};

export default TodoListItem;
