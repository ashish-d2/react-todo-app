import { createContext, useState, ReactNode, useContext } from "react";

// context type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// creating context
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// provider function type

// provider function
const ThemeProvider: React.FC<{ children: ReactNode }> = function ({
  children,
}) {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = function () {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = function (ThemeContext: React.Context<ThemeContextType>) {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "ThemeContext is not provided. Make sure ThemeContext properly wraps the component."
    );
  }

  return context;
};

export default ThemeContext;
export { ThemeProvider, useTheme };
