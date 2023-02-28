import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { useState } from "react"
import styled from "styled-components"
import Navbar from "../components/navbar/Navbar"
import { MdOutlineContentCopy } from "react-icons/md"
import { BsCheck2All } from "react-icons/bs"

const Container = styled.div`
    height: 100vh;
    overflow-y: scroll;
    transition: all 0.3s ease;

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
        margin: 0.3em;
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

    @media (min-width: 650px) {
        .title {
            font-size: 2.5rem;
        }
    }
`

const Challenge1 = () => {
    const [copyA, setCopyA] = useState(false)
    const [copyB, setCopyB] = useState(false)
    const [copyC, setCopyC] = useState(false)

    const codeStringA = `
        function panic(str) {
            const wordsArr = str.split(" ") // ["winter", "is", "coming"]
            const joinedWords = wordsArr.join(" 😱 ") // winter 😱 is 😱 coming
            const upperCasedWords = joinedWords.toUpperCase() // WINTER 😱 IS 😱 COMING
            return upperCasedWords + "!" // WINTER 😱 IS 😱 COMING!
        }
        
        console.log(panic("winter is coming")) 
    `

    const codeStringB = `
        export function panic(str) {
            return str.split(" ").join(" 😱 ").toUpperCase() + "!"
        }

        console.log(panic("winter is coming")) // "WINTER 😱 IS 😱 COMING!"
    `

    const codeStringC = `
        function panic(str) {
            const wordsArr = str.split(" ")
            return wordsArr.map((word) => word.toUpperCase()).join(" 😱 ") + "!"
        }

        console.log(panic("winter is coming")) // WINTER 😱 IS 😱 COMING!
    `

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">01 - Panic Function</h1>
                <p className="date">Feb 27, 2022 &#183; 20min</p>
                <br />
                <br />
                <p className="paragraph bold">Challenge:</p>
                <br />
                <p className="paragraph">
                    Write a function <code className="code">panic</code>. The
                    function should take in a sentence and return the same
                    sentence in all caps with an exclamation point (!) at the
                    end. Use JavaScript's built in string methods.
                </p>
                <br />
                <p className="paragraph">
                    If the string is a phrase or sentence, add a 😱 emoji in
                    between each word.
                </p>
                <br />
                <p className="paragraph">Examples:</p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input: <code className="code">"Hello"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">"HELLO!"</code>
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">
                                "I'm almost out of coffee"
                            </code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output:{" "}
                            <code className="code">
                                "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
                            </code>
                        </p>
                    </li>
                </ul>
                <br />
                <p className="paragraph bold">Solution A:</p>
                <br />
                <p>
                    We're going to implement the following three JavaScript's
                    built-in methods:
                </p>

                <ul className="list">
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split"
                            target="_blank"
                            className="bold"
                        >
                            <code>split()</code>
                        </a>
                        <span>: Turns the string into an array.</span>
                    </li>
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
                            target="_blank"
                            className="bold"
                        >
                            <code>join()</code>
                        </a>
                        <span>
                            : Concatenates the array back into a string. You can
                            pass to the method how would you like to concatenate
                            the array.
                        </span>
                    </li>
                    <li>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"
                            target="_blank"
                            className="bold"
                        >
                            <code>toUpperCase()</code>
                        </a>
                        <span>
                            : Transform the letters of the string to uppercase.
                        </span>
                    </li>
                </ul>

                <br />
                <div className="snippet">
                    <div className="snippet-header">
                        <p className="snippet-title">Example Code</p>
                        {copyA ? (
                            <button className="snippet-button">
                                <BsCheck2All />
                                Copied!
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(codeStringA)
                                    setCopyA(true)
                                    setTimeout(() => setCopyA(false), 2000)
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
                        {codeStringA}
                    </SyntaxHighlighter>
                </div>
                <br />
                <p>
                    As we can see the <code className="code">split()</code> and{" "}
                    <code className="code">join()</code> methods work in a
                    similar way just doing the opposite. In the case of the{" "}
                    <code className="code">split()</code> method by passing an
                    empty string to it, we can create a new array with each word
                    of the string as an individual element of the array.
                </p>

                <br />
                <p>
                    To the <code className="code">join()</code> method we can
                    pass with <i>what</i> we want to concatenate the words of
                    the array to create a new sentence.
                </p>
                <br />
                <p>
                    In JavaScript we can chain methods and provide a DRYer
                    solution like this:
                </p>
                <div className="snippet margin-top">
                    <div className="snippet-header">
                        <p className="snippet-title">Example Code</p>
                        {copyB ? (
                            <button className="snippet-button">
                                <BsCheck2All />
                                Copied!
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(codeStringB)
                                    setCopyB(true)
                                    setTimeout(() => setCopyB(false), 2000)
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
                        {codeStringB}
                    </SyntaxHighlighter>
                </div>
                <br />
                <p className="paragraph bold">Solution B:</p>
                <br />
                <p className="paragraph">
                    In this solution we will use the{" "}
                    <code className="code">
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
                            target="_blank"
                            className="bold"
                        >
                            <code>map()</code>
                        </a>
                    </code>{" "}
                    method, this JavaScript's array built-in method allow us to
                    loop through an array and make changes on each individual
                    element; this method returns a new array of the same length
                    with the modified elements. Then, with the new array we will
                    join the elements back into a single string:
                </p>
                <div className=" snippet margin-top">
                    <div className="snippet-header">
                        <p className="snippet-title">Example Code</p>
                        {copyC ? (
                            <button className="snippet-button">
                                <BsCheck2All />
                                Copied!
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(codeStringC)
                                    setCopyC(true)
                                    setTimeout(() => setCopyC(false), 2000)
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
                        {codeStringC}
                    </SyntaxHighlighter>
                </div>
            </div>
        </Container>
    )
}

export default Challenge1
