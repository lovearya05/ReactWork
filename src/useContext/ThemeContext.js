import React from 'react'
export const ThemeContext = React.createContext()

export function ThemeProvider({children}){
    var val = {email : "Hello@gmail.com"}

    return (
        <ThemeContext.Provider value={val}>
            {children}
        </ThemeContext.Provider>
    )
}