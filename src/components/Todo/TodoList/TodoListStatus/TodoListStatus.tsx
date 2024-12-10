import { useState, useEffect } from "react";

import styles from "./TodoListStatus.module.scss";

import TodoListController from "../../TodoListController/TodoListController";

// props type
interface ComponentProps {
  theme: string;
}

// component
const TodoListStatus: React.FC<ComponentProps> = function ({ theme }) {
  // useState
  const [currScreenSize, setCurrScreenSize] = useState<number>(
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = function () {
      setCurrScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${styles.todoListStatus} ${
        theme === "dark" ? styles.dark : ""
      }`}
    >
      <p>5 items left</p>
      {currScreenSize >= 768 ? <TodoListController /> : ""}
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoListStatus;
