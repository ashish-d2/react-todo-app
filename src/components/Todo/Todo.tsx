import { useState, useEffect } from "react";

import styles from "./Todo.module.scss";

import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoListController from "./TodoListController/TodoListController";

const Todo = function () {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = function () {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.todo}>
      <TodoForm />
      <TodoList />

      {screenSize < 768 ? <TodoListController /> : ""}
    </div>
  );
};

export default Todo;
