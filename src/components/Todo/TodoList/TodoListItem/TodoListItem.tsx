// style import
import styles from "./TodoListItem.module.scss";

// imports
import { ReactComponent as CrossIcon } from "./../../../../assets/images/icon-cross.svg";
import { ReactComponent as CheckIcon } from "./../../../../assets/images/icon-check.svg";

// context import
import ThemeContext from "../../../../context/ThemeContext";
import { useTheme } from "../../../../context/ThemeContext";
import { useData } from "../../../../context/DataContext";

// dnd import
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Component Props
type ComponentProps = {
  id: number;
  todoMessage: string;
  todoStatus: "active" | "completed";
};
// In order to mark a todo completed - the btn style is "completed_btn" and text style is "completed_text"
const TodoListItem: React.FC<ComponentProps> = function ({
  id,
  todoMessage,
  todoStatus,
}) {
  const { theme } = useTheme(ThemeContext);
  const { updateTodoStatus, deleteTodo } = useData();

  // On btn click toggle todo status
  const handleStatusChangeBtnClick = function (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
    status: "completed" | "active"
  ) {
    event.stopPropagation();
    updateTodoStatus(id, status);
  };

  // On btn click delete Todo
  const handleDeleteBtnClick = function (id: number) {
    deleteTodo(id);
  };

  // dnd draggable element
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        className={`${styles.todoList_item} ${
          theme === "dark" ? styles.todoList_item__dark : ""
        }`}
      >
        <div className={styles.todoAndBtnContainer}>
          <button
            className={`${styles.submit_btn} ${
              todoStatus === "completed" ? styles.completed_btn : ""
            }`}
            onClick={(event) =>
              handleStatusChangeBtnClick(event, id, todoStatus)
            }
            onTouchStart={(event) => event.stopPropagation()}
            onMouseDown={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
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

        <CrossIcon
          className={styles.cross_icon}
          onClick={() => handleDeleteBtnClick(id)}
          onTouchStart={(event) => event.stopPropagation()}
          onMouseDown={(event) => event.stopPropagation()}
          onPointerDown={(event) => event.stopPropagation()}
        />
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
