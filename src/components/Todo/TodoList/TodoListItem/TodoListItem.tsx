import { useState } from "react";

// style import
import styles from "./TodoListItem.module.scss";

// imports
import { ReactComponent as CrossIcon } from "./../../../../assets/images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "./../../../../assets/images/icon-check.svg";

// In order to mark a todo completed - the btn style si completed_btn and text style is completed_text

const TodoListItem = function () {
  return (
    <>
      <div className={styles.todoList_item}>
        <div className={styles.todoAndBtnContainer}>
          <button className={`${styles.submit_btn}`}>
            <CheckIcon />
          </button>
          <p>Jog around the park 3x</p>
        </div>

        <CrossIcon className={styles.cross_icon} />
      </div>
      <hr className={styles.line} />
    </>
  );
};

export default TodoListItem;
