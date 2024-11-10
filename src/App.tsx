import logo from "./logo.svg";
import "./App.scss";

// imports
import Header from "./components/Header/Header";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="app">
      <div className="background__light"></div>
      <main className="main main-background__light">
        <Header />
        <Todo />
      </main>
    </div>
  );
}

export default App;
