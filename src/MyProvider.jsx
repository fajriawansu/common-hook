/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export default function MyProvider({children}) {

    const [theme, setTheme] = useState({fullname: "Fajriawan Sutansa"});

    const handleTheme = () => {
      console.log("SUCCESS ACCESS CONTEXT")
      setTheme({fullname: new Date().getTime()})
    }

  return (
    <div>
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={handleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    </div>
  )
}
