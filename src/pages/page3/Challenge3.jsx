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

const Challenge3 = () => {
    const [copyA, setCopyA] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()

    const codeString = `
        export function altCaps(str) {
            let newString = ""
            for (let i = 0; i < str.length; i++) {
                if (i % 2 === 0) {
                    newString += str[i].toUpperCase()
                } else {
                    newString += str[i]
                }
            }
            return newString
        }
        
        // WhEn yOu vIsIt POrTlAnD YoU HaVe tO Go tO VoODOo DOnUtS
        console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"))
    `

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">03 - Alternating Caps</h1>
                <p className="date">Mar 4, 2022 &#183; 15min</p>
                <br />
                <br />
                <p className="paragraph bold">Challenge:</p>
                <br />
                <p className="paragraph">
                    Write a function that takes in a string of letters and
                    returns a sentence in which every other letter is
                    capitalized.
                </p>
                <br />
                <p className="paragraph">Example:</p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">
                                "I'm so happy it's Monday"
                            </code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output:{" "}
                            <code className="code">
                                "I'M So hApPy iT'S MoNdAy"
                            </code>
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
                            padding: "0 0.4em 0.4em",
                        }}
                    >
                        <br />
                        <p>
                            To solve this challenge we're going to apply the{" "}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"
                                target="_blank"
                                className="bold"
                            >
                                <code>remainder</code>
                            </a>{" "}
                            operator to determine which characters from the
                            string will be transform to uppercase:
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
                            >
                                {codeString}
                            </SyntaxHighlighter>
                        </div>
                        <br />
                        <p>
                            The remainder operator (%) retuns the remainder left
                            when one operand is divided by a second operand. It
                            always returns the sign of the dividend.
                        </p>
                        <br />
                        <p>
                            For example for 4 % 2 the remainder is 0 because 4
                            is divisible by 2 and for even numbers the remainder
                            is always zero. In the case of 3 % 2 the remainder
                            is 1.
                        </p>
                        <br />
                        <p>
                            This operand is useful because we can use use it in
                            a for loop to evaluate if the currect step of the
                            iteration is at an event index. If it is we return
                            the uppercased character and if it isn't we just
                            return the character.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge3
