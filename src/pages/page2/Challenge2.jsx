import { useState, useRef } from "react"
import styled from "styled-components"
import Navbar from "../../components/navbar/Navbar"
import SolutionHeader from "../../components/SolutionHeader"
import SnippetContainer from "../../components/SnippetContainer"

const Container = styled.div`
    height: 100vh;
    overflow-y: scroll;
    transition: all 0.3s ease;
    padding-bottom: 1em;

    .main {
        padding: 1.2em 1em;
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
        padding-bottom: 0.05em;
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

const Challenge2 = () => {
    const [copyA, setCopyA] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()

    const codeString = `
function whisper(str) {
    const lowerCaseString = str.toLowerCase()
    if (lowerCaseString.endsWith("!")) {
        return "shh... " + lowerCaseString.slice(0, -1)
    } else {
        return "shh... " + lowerCaseString
    }
}
    
console.log(whisper("MA'AM, this is a Wendy's!")) // shh... ma'am, this is a wendy's 
`

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">02 - Whisper Function</h1>
                <p className="date">Published: Feb 28, 2023</p>
                <p className="date">Last Update: May 28, 2023 &#183; 20min</p>
                <br />
                <h2 className="margin-top">Challenge:</h2>
                <br />
                <p className="paragraph">
                    Write a function <code className="code">whisper</code> that
                    takes in a sentence and returns a new sentence in all
                    lowercase letters with "shh..." at the beginning.
                </p>
                <br />
                <p className="paragraph">
                    The function should also remove an exclamation point at the
                    end of the sentence, if there is one.
                </p>
                <br />
                <p className="paragraph">Example:</p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">
                                "The KITTENS are SLEEPING!"
                            </code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output:{" "}
                            <code className="code">
                                "shh... the kittens are sleeping"
                            </code>
                        </p>
                    </li>
                </ul>
                <br />
                <SolutionHeader
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    title={"Solution:"}
                />
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
                            padding: "0 0.5em 0.5em",
                        }}
                    >
                        <br />
                        <p>
                            To solve this challenge we're going to apply the
                            following three JavaScript's string built-in
                            methods:
                        </p>
                        <ul className="list">
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"
                                    target="_blank"
                                    className="bold"
                                >
                                    <code>toLowerCase()</code>
                                </a>
                                <span>
                                    : transforms the characters of a string to
                                    lowercase.
                                </span>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"
                                    target="_blank"
                                    className="bold"
                                >
                                    <code>endsWith()</code>
                                </a>
                                <span>
                                    : checks if a string ends with a specific
                                    character. Returns either true or false.
                                </span>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice"
                                    target="_blank"
                                    className="bold"
                                >
                                    <code>slice()</code>
                                </a>
                                <span>
                                    : extracts a segment of a string, this
                                    method returns a new string without
                                    modifying the original.
                                </span>
                            </li>
                        </ul>
                        <br />
                        <SnippetContainer
                            copy={copyA}
                            setCopy={setCopyA}
                            codeString={codeString}
                        />
                        <br />
                        <p>
                            Using an IF-statement we verify if the string ends
                            with a exclamation point, if it does, then we
                            lowercase the entire string and slice the
                            exclamation point.
                        </p>
                        <br />
                        <p>
                            <code className="code">slice(0, -1)</code> means we
                            will make a copy of the string from the first
                            character to the second-last character.
                        </p>
                        <br />
                        <p>
                            In the case the string doesn't ends with an
                            exclamation point, then we have to return the
                            lowercased string.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge2
