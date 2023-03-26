import { useContext } from "react"
import { ThemeContext } from "../../App"
import styled from "styled-components"
import { variables } from "../../styles/Variables"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.55em 3.4em 1.55em 1em;
    max-width: 800px;
    margin: 0 auto;

    .page-logo {
        justify-self: center;
        display: flex;
        align-items: center;
        gap: 10px;
        margin: auto 20px auto auto;
    }

    .hamburger {
        font-size: 30px;
        cursor: pointer;
        display: none;
    }

    .links {
        margin-top: 10px;
        color: ${(props) => props.theme.text};
    }

    .icons {
        font-size: 20px;
    }

    .toggle-content {
        width: 36px;
        height: 20px;
        border-radius: 10px;
        transition: all 0.3s ease;
        align-self: center;
        margin-bottom: 12px;

        .theme-container {
            background-blend-mode: multiply, multiply;
            transition: all 0.4s ease;

            .demo {
                font-size: 32px;

                .switch {
                    position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 34px;

                    .toggler {
                        opacity: 0;
                        width: 0;
                        height: 0;
                        &:checked + .slider:before {
                            top: 17px;
                            left: 4px;
                            content: "🌑";
                            transform: translateX(26px);
                        }
                    }

                    .slider {
                        position: absolute;
                        cursor: pointer;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        left: 0;
                        background-color: ${({ currentTheme }) =>
                            currentTheme === "light"
                                ? variables.lightCheckbox
                                : variables.checkbox};
                        transition: all 0.4s ease;
                        &::before {
                            position: absolute;
                            content: "☀️";
                            height: 0;
                            width: 0;
                            left: -10px;
                            top: 17px;
                            line-height: 0;
                            transition: all 0.4s ease;
                        }

                        &.round {
                            border-radius: 34px;
                            &::before {
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 700px) {
        .hamburger {
            display: block;
        }
    }
`

const Navbar = () => {
    const { theme, toggleTheme, isOpen, toggleSidebar } =
        useContext(ThemeContext)

    return (
        <Container isOpen={isOpen} currentTheme={theme}>
            <FiMenu onClick={toggleSidebar} className="hamburger" />
            <div className="page-logo">
                <a
                    className="links"
                    href="https://github.com/pacelliv"
                    target="_blank"
                >
                    <FaGithub className="icons" />
                </a>
                <a
                    className="links"
                    href="https://twitter.com/pacelliv3"
                    target="_blank"
                >
                    <FaTwitter className="icons" />
                </a>
            </div>
            <div className="toggle-content">
                <div className="grid theme-container">
                    <div className="content">
                        <div className="demo">
                            <label className="switch">
                                <input
                                    onClick={toggleTheme}
                                    className="toggler"
                                    type="checkbox"
                                    defaultChecked={
                                        theme === "light" ? false : true
                                    }
                                />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar
