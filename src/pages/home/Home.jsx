import { useContext } from "react"
import { ThemeContext } from "../../App"
import styled from "styled-components"
import Navbar from "../../components/navbar/Navbar"

const Container = styled.div`
    height: 100vh;
    overflow-y: scroll;
    transition: all 0.3s ease;
    padding-bottom: 1em;

    .main {
        padding: 1.2em 1.55em;
        max-width: 800px;
        margin: 0 auto;
    }

    .title {
        line-height: 1.3;
    }

    .paragraph {
        line-height: 1.7;
    }

    .date {
        text-transform: uppercase;
        font-size: ${(props) => props.theme.fontxs};
    }

    a {
        color: ${(props) => props.theme.link};
    }

    @media (min-width: 650px) {
        .title {
            font-size: 2.5rem;
        }
    }
`

const Home = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <Container currentTheme={theme}>
            <Navbar />
            <div className="main">
                <h1 className="title">Welcome to JScrimba Challenges👋</h1>
                <p className="date">Feb 27, 2022 &#183; 5min</p>
                <br />
                <br />
                <p className="paragraph">
                    Hello Mr(s). Stranger, my name is Pacelli. Last year around
                    mid-june I got really interested in learning on how
                    blockchains like Bitcoin or Ethereum works from a coding
                    standpoint. My curiosity lead me to{" "}
                    <a href="https://youtu.be/gyMwXuJrbJQ" target="_blank">
                        Learn Blockchain, Solidity and Full Stack Web3
                        Development with JavaScript - 32-Hour Course
                    </a>{" "}
                    by{" "}
                    <a
                        href="https://twitter.com/patrickalphac?lang=en"
                        target="_blank"
                    >
                        @PatrickAlphaC
                    </a>
                    .
                </p>
                <br />
                <p className="paragraph">
                    After a few lessons I began to realize that learning
                    Solidity without any prior knowledge of JavaScript made no
                    sense (at least to me!) so I decided to enroll in The
                    Frontend Developer Career Path by{" "}
                    <a
                        href="https://scrimba.com/learn/frontend"
                        target="_blank"
                    >
                        Scrimba
                    </a>{" "}
                    to learn JavaScript. The career path basically consists of
                    modules with screencasts and challenges for you to solve
                    before the answer is presented.
                </p>
                <br />
                <p className="paragraph">
                    Near the end of the career path there was a module
                    consisting of challenges to test everything that I learned
                    of JavaScript on my journey to become a Front-End Developer
                    and after finishing all the challenges I thought it would be
                    cool to build blog-like site with them instead of leaving
                    them in my documents folder taking dust.
                </p>
                <br />
                <p className="paragraph">
                    In general these are small conceptual challenges about
                    different topics and methods of the language and to some
                    I'll present more than one answer.
                </p>
                <br />
                <p className="paragraph">
                    I hope I did not bored you with my story, and that you'll
                    have some fun with these challenges and luckily you will
                    learn something new.
                </p>
                <br />
                <p className="paragraph">
                    This site is under construction. 👷🏼‍♀️👷🏼⏳
                </p>
            </div>
        </Container>
    )
}

export default Home
