import { createContext, useEffect, useState } from "react"

// type Theme = 'dark' | ''

interface AppContextProps {
    theme?: string
    alternateTheme?: () => void
}

const AppContext = createContext<AppContextProps>({})



export function AppProvider(props: any) {
    const [theme, setTheme] = useState('')

    function alternateTheme() {
        const newTheme = theme === '' ? 'dark' : ''
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    useEffect(() => {
        const storagedTheme = localStorage.getItem('theme')
        if (storagedTheme) {
            setTheme(storagedTheme)
        }
    }), []

    return (
        <AppContext.Provider value={{
            theme,
            alternateTheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext