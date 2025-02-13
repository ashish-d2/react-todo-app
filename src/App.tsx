import { useContext } from "react";
import styles from "./App.module.scss";

// imports
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

// context
import ThemeContext from "./context/ThemeContext";
import { ThemeProvider } from "./context/ThemeContext";
import { DataProvider } from "./context/DataContext";

// Main function
function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <AppContent />
      </DataProvider>
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <div
        className={`${styles.app} ${
          theme === "light" ? styles.background_light : styles.background_dark
        }`}
      >
        <div
          className={`${styles.backgroundImg} ${
            theme === "light" ? styles.light : styles.dark
          }`}
        ></div>
        <main className={styles.main}>
          <Header />
          <Todo />
        </main>
      </div>
    </>
  );
}

export default App;
