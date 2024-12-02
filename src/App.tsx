import logo from "./logo.svg";
import "./App.scss";

// imports
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

// context
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <div className="backgroundImg__light"></div>
        <main className="main">
          <Header />
          <Todo />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
