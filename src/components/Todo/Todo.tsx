import { useState, useEffect } from "react";

import styles from "./Todo.module.scss";

import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import TodoListController from "./TodoListController/TodoListController";

// context import
import { useData } from "../../context/DataContext";

// Dnd imports
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";

const Todo = function () {
  const { rearrangeTodos } = useData();
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

  // dnd on drag end
  const handleDragEnd = function (event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      rearrangeTodos(+active.id, +over.id);
    }
  };

  return (
    <div className={styles.todo}>
      <TodoForm />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <TodoList />
      </DndContext>

      {screenSize < 768 ? <TodoListController /> : ""}
    </div>
  );
};

export default Todo;
