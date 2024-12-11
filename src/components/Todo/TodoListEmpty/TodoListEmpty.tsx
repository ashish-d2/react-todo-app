import styles from "./TodoListEmpty.module.scss";

// props
interface ComponentProps {
  theme: string;
}

const TodoListEmpty: React.FC<ComponentProps> = function ({ theme }) {
  return (
    <>
      <div
        className={`${styles.listEmpty} ${theme === "dark" ? styles.dark : ""}`}
      >
        <p className={styles.message}>List is empty...</p>
      </div>
      <hr
        className={`${styles.line} ${
          theme === "dark" ? styles.line__dark : ""
        }`}
      />
    </>
  );
};

export default TodoListEmpty;
