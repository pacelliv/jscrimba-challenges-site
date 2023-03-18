import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useState, useRef } from "react"
import styled from "styled-components"
import Navbar from "../../components/navbar/Navbar"
import { MdOutlineContentCopy } from "react-icons/md"
import { BsCheck2All } from "react-icons/bs"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

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

    .bold {
        font-weight: 600;
    }

    .date {
        text-transform: uppercase;
        font-size: ${(props) => props.theme.fontxs};
    }

    a {
        color: ${(props) => props.theme.link};
    }

    a:hover {
        text-decoration: underline;
    }

    .list {
        margin-top: 0.5em;
        margin-left: 2.5em;
        line-height: 1.8;
    }

    .margin-top {
        margin-top: 0.3em;
    }

    .snippet {
        font-size: 0.9rem;
    }

    .snippet-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${(props) => props.theme.gray800};
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 0.8em 1.5em;
        color: rgb(210, 210, 210);
    }

    .unset {
        border-radius: unset;
    }

    .beige {
        background-color: #e9d8a6;
        color: #1c1c1c;
    }

    .content-parent {
        height: 0;
        overflow: hidden;
        transition: height 0.7s ease;
        padding-bottom: 0.01em;
    }

    .code-snippet {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .snippet-button {
        border: none;
        color: inherit;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: inherit;
        cursor: pointer;
        font-family: "Poppins", sans-serif;
    }

    .code {
        background-color: ${(props) => props.theme.gray100};
        border-radius: 3px;
        font-weight: 600;
        padding: 0.23em 0.4em;
        font-size: 0.72rem;
        letter-spacing: 0.75px;
        color: ${(props) => props.theme.code};
    }

    .solution-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .solution-toggler {
        display: flex;
    }

    @media (min-width: 650px) {
        .title {
            font-size: 2.5rem;
        }
    }
`

const Challenge5 = () => {
    const [copyA, setCopyA] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()

    const codeString = `
function awardBonuses() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log(i + " - JACKPOT! 1 Million and a Yacht!")
        } else if (i % 5 === 0) {
            console.log(i + " - $100,000 bonus!")
        } else if (i % 3 === 0) {
            console.log(i + " - Vacation!")
        } else {
            console.log(i + " - :(")
        }
    }
}
        
awardBonuses() // too many lines, try it yourself!
`

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">05 - Totally Not Another FizzBuzz</h1>
                <p className="date">Published: Mar 6, 2022 &#183; 15min</p>
                <p className="date">Last update: Mar 18, 2022 &#183; 15min</p>
                <br />
                <br />
                <p className="paragraph bold">Challenge:</p>
                <br />
                <p className="paragraph">
                    Scrimba CEO Per Borgen wants you to write a program to grant
                    special bonuses to all his employees based on their employee
                    ID numbers!
                </p>
                <br />
                <p className="paragraph">
                    Scrimba has 100 employees and their employee ID numbers
                    range from 1 - 100. If the employee's ID number is:
                </p>
                <ul className="list">
                    <li>
                        <p className="paragraph">Divisible by 3 - Vacation!</p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Divisible by 5 - $100,000 bonus!
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Divisible by both 3 and 5 - JACKPOT! 1 Million and a
                            Yacht!
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Not divisible by 3 or 5 - :(
                        </p>
                    </li>
                </ul>
                <br />
                <p className="paragraph">
                    Write a program to loop through all the ID numbers and print
                    their prize. Your function's output should look something
                    like this:
                </p>
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            <code className="code">1 - :(</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            <code className="code">2 - :(</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            <code className="code">3 - Vacation!</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            <code className="code">4 - :(</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            <code className="code">5 - $100,000 bonus!</code>
                        </p>
                    </li>
                </ul>
                <br />
                <div className="solution-container snippet-header beige snippet unset">
                    <p className="paragraph bold">Solution:</p>
                    {isOpen ? (
                        <button
                            className="snippet-button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            [
                            <AiOutlineMinus />] Hide Solution
                        </button>
                    ) : (
                        <button
                            className="snippet-button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            [<AiOutlinePlus />] Show Solution
                        </button>
                    )}
                </div>
                <div
                    className="content-parent"
                    ref={parentRef}
                    style={
                        isOpen
                            ? { height: parentRef.current.scrollHeight + "px" }
                            : { height: "0px" }
                    }
                >
                    <div
                        className="answer-container code-snippet"
                        style={{
                            border: "1px solid #e9d8a6",
                            padding: "0 0.5em 0.45em",
                        }}
                    >
                        <br />
                        <p>
                            To solve this challenge we're going to apply the{" "}
                            <code className="code">
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"
                                    target="_blank"
                                    className="bold"
                                >
                                    remainder
                                </a>
                            </code>{" "}
                            operator again.
                        </p>
                        <br />
                        <div className="snippet">
                            <div className="snippet-header">
                                <p>Example Code</p>
                                {copyA ? (
                                    <button className="snippet-button">
                                        <BsCheck2All />
                                        Copied!
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                codeString
                                            )
                                            setCopyA(true)
                                            setTimeout(
                                                () => setCopyA(false),
                                                2000
                                            )
                                        }}
                                        className="snippet-button"
                                    >
                                        <MdOutlineContentCopy />
                                        Copy Code
                                    </button>
                                )}
                            </div>
                            <SyntaxHighlighter
                                className="code-snippet"
                                language="javascript"
                                style={a11yDark}
                                customStyle={{
                                    paddingLeft: 20,
                                    paddingBottom: 20,
                                }}
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                        <br />
                        <p>
                            We need to loop from 1 to 100 and apply the{" "}
                            <code className="code">remainder</code> operator to
                            find the indexes divisible by 3, 5 and 15.
                        </p>
                        <br />
                        <p>
                            If the remainder is zero for any of these
                            conditionals we only need to print to the console
                            the respective prize.
                        </p>
                        <br />
                        <p>
                            The key to solve this challenge is setting the
                            conditionals in the order showed in the answer.
                            First we need to find the numbers divisible by 15,
                            because if we start looking by 3 or 5, these numbers
                            will be included in these groups and not in the
                            group of numbers divisibe by 15.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge5
