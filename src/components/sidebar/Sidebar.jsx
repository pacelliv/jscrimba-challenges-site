import styled from "styled-components"
import { useContext } from "react"
import { ThemeContext } from "../../App"
import { NavLink } from "react-router-dom"
import { links } from "./links"
import { variables } from "../../styles/Variables"
import { MdClose } from "react-icons/md"

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.bg3};
    margin: ${variables.lgSpacing} 0;
    transition: all 0.3s ease;
`

const Container = styled.div`
    height: 100vh;
    padding-top: 1.5em;
    background-color: ${(props) => props.theme.bg};
    text-align: center;
    transition: all 0.4s ease;
    overflow-y: auto;

    .x-mark {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 30px;
        font-weight: 900;
        display: none;
        cursor: pointer;
    }

    .links-container {
        margin-top: 1em;
    }

    .links-container:last-child {
        margin-bottom: 1.4em;
    }

    .links-container:hover {
        background-color: ${(props) => props.theme.bg3};
        transition: all 0.3s ease;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 8px;
        padding: 0.4em 0.3em;
        text-decoration: none;
        color: ${(props) => props.theme.text};
        transition: all 0.3s ease;
        outline: none;
    }

    .link-icon {
        font-size: 1.5rem;
    }

    .active {
        color: ${(props) => props.theme.bg4};
    }

    @media (max-width: 700px) {
        transition: all 0.3s ease;
        z-index: 20;
        width: 100%;
        position: absolute;
        transform: ${({ isOpen }) =>
            isOpen ? "translateX(0%)" : "translateX(-100%)"};

        .x-mark {
            display: block;
        }
    }
`

const Sidebar = () => {
    const { isOpen, toggleSidebar } = useContext(ThemeContext)

    return (
        <Container isOpen={isOpen}>
            <h2>📚 Hub</h2>
            <MdClose onClick={toggleSidebar} className="x-mark" />
            <Divider />
            {links.map(({ label, icon, to }) => (
                <div key={label} className="links-container">
                    <NavLink
                        to={to}
                        className={({ isActive }) =>
                            `links ${isActive ? "active" : ""}`
                        }
                        onClick={toggleSidebar}
                    >
                        <div className="link-icon">{icon}</div>
                        <span>{label}</span>
                    </NavLink>
                </div>
            ))}
        </Container>
    )
}

export default Sidebar
