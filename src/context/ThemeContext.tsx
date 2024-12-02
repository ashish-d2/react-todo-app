import { createContext, useState, ReactNode } from "react";

// context type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// creating context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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

export default ThemeContext;
export { ThemeProvider };
