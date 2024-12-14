// style import
import styles from "./TodoListItem.module.scss";

// imports
import { ReactComponent as CrossIcon } from "./../../../../assets/images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "./../../../../assets/images/icon-check.svg";

// context import
import ThemeContext from "../../../../context/ThemeContext";
import { useTheme } from "../../../../context/ThemeContext";

// Component Props
type ComponentProps = {
  todoMessage: string;
  todoStatus: "active" | "completed";
};
// In order to mark a todo completed - the btn style is "completed_btn" and text style is "completed_text"
const TodoListItem: React.FC<ComponentProps> = function ({
  todoMessage,
  todoStatus,
}) {
  const { theme } = useTheme(ThemeContext);

  return (
    <>
      <div
        className={`${styles.todoList_item} ${
          theme === "dark" ? styles.todoList_item__dark : ""
        }`}
      >
        <div className={styles.todoAndBtnContainer}>
          <button
            className={`${styles.submit_btn} ${
              todoStatus === "completed" ? styles.completed_btn : ""
            }`}
          >
            <CheckIcon className={styles.checkIcon} />
          </button>
          <p
            className={`${
              todoStatus === "completed" ? styles.completed_text : ""
            }`}
          >
            {todoMessage}
          </p>
        </div>

        <CrossIcon className={styles.cross_icon} />
      </div>
      <hr
        className={`${styles.line} ${
          theme === "dark" ? styles.line__dark : ""
        }`}
      />
    </>
  );
};

export default TodoListItem;
