import { createContext, useState } from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import AppRoutes from "./routes/AppRoutes"
import Sidebar from "./components/sidebar/Sidebar"
import { Light, Dark } from "../src/styles/Themes"

const Container = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    background-color: ${({ theme }) => theme.bgTotal};
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.text};
    position: relative;

    @media (max-width: 700px) {
        grid-template-columns: auto;
    }
`

const App = () => {
    const [theme, setTheme] = useState("light")
    const [isOpen, setIsOpen] = useState(false)
    const themeMode = theme === "light" ? Light : Dark

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme, isOpen, toggleSidebar }}
        >
            <ThemeProvider theme={themeMode}>
                <Container>
                    <Sidebar />
                    <AppRoutes />
                </Container>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export const ThemeContext = createContext()
export default App
