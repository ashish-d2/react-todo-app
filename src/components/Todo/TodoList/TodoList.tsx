import styles from "./TodoList.module.scss";

// imports
import TodoListItem from "./TodoListItem/TodoListItem";
import TodoListStatus from "./TodoListStatus/TodoListStatus";
import TodoListEmpty from "../TodoListEmpty/TodoListEmpty";

// context import
import ThemeContext from "../../../context/ThemeContext";
import { useTheme } from "../../../context/ThemeContext";
import { useData } from "../../../context/DataContext";

// dnd imports
import { SortableContext } from "@dnd-kit/sortable";

const TodoList = function () {
  const { theme } = useTheme(ThemeContext);
  const { filteredTodos } = useData();

  // If todolist (todos) is empty then display TodoListEmpty message.
  return (
    <div
      className={`${styles.todo_list} ${
        theme === "dark" ? styles.todo_list_dark : ""
      }`}
    >
      {filteredTodos.length === 0 ? <TodoListEmpty theme={theme} /> : ""}

      <SortableContext items={filteredTodos}>
        {filteredTodos.map((todo) => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            todoMessage={todo.text}
            todoStatus={todo.status}
          />
        ))}
      </SortableContext>

      <TodoListStatus theme={theme} />
    </div>
  );
};

export default TodoList;
