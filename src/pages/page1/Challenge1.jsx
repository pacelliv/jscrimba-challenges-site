import { useState, useRef } from "react"
import styled from "styled-components"
import Navbar from "../../components/navbar/Navbar"
import { codeStringA, codeStringB, codeStringC } from "./codeStrings"
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
        font-family: "Poppins", sans-serif;
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
        font-family: "Poppins", sans-serif;
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
        font-family: monospace;
    }

    .snippet-button {
        border: none;
        color: inherit;
        background: transparent;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: inherit;
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

const Challenge1 = () => {
    const [copyA, setCopyA] = useState(false)
    const [copyB, setCopyB] = useState(false)
    const [copyC, setCopyC] = useState(false)
    const [isOpenA, setIsOpenA] = useState(false)
    const [isOpenB, setIsOpenB] = useState(false)
    const parentRefA = useRef()
    const parentRefB = useRef()

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">01 - Panic Function</h1>
                <p className="date">Published: Feb 27, 2023</p>
                <p className="date">Last update: Mar 25, 2023 &#183; 20min</p>
                <br />
                <br />
                <p className="paragraph bold">Challenge:</p>
                <br />
                <p className="paragraph">
                    Write a function <code className="code">panic</code>. The
                    function should take in a sentence and return the same
                    sentence in all caps with an exclamation point{" "}
                    <code className="code">!</code> at the end. Use JavaScript's
                    built in string methods.
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
                <SolutionHeader
                    isOpen={isOpenA}
                    setIsOpen={setIsOpenA}
                    title={"Solution A:"}
                />
                <div
                    className="content-parent"
                    ref={parentRefA}
                    style={
                        isOpenA
                            ? { height: parentRefA.current.scrollHeight + "px" }
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
                        <p className="paragraph">
                            We're going to implement the following three
                            JavaScript's built-in methods:
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
                                <span>: turns the string into an array.</span>
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
                                    : concatenates the array back into a string.
                                    You can pass to the method how would you
                                    like to concatenate the array.
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
                                    : transform the letters of the string to
                                    uppercase.
                                </span>
                            </li>
                        </ul>
                        <br />
                        <SnippetContainer
                            copy={copyA}
                            setCopy={setCopyA}
                            codeString={codeStringA}
                        />
                        <br />
                        <p className="paragraph">
                            To the <code className="code">join()</code> method
                            we can pass with <i>what</i> we want to concatenate
                            the words of the array to create a new sentence.
                        </p>
                        <br />
                        <p className="paragraph">
                            In JavaScript we can chain methods and provide a
                            DRYer solution like this:
                        </p>
                        <br />

                        <SnippetContainer
                            copy={copyB}
                            setCopy={setCopyB}
                            codeString={codeStringB}
                        />
                    </div>
                </div>
                <br />
                <SolutionHeader
                    isOpen={isOpenB}
                    setIsOpen={setIsOpenB}
                    title={"Solution B:"}
                />
                <div
                    className="content-parent"
                    ref={parentRefB}
                    style={
                        isOpenB
                            ? { height: parentRefB.current.scrollHeight + "px" }
                            : { height: "0px" }
                    }
                >
                    <div
                        className="answer-container code-snippet"
                        style={{
                            border: "1px solid #e9d8a6",
                            padding: "0 0.5em 0.51em",
                        }}
                    >
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
                            method, this JavaScript's array built-in method
                            allow us to loop through an array and make changes
                            on each individual element; this method returns a
                            new array of the same length with the modified
                            elements. Then, with the new array we will join the
                            elements back into a single string:
                        </p>
                        <br />
                        <SnippetContainer
                            copy={copyC}
                            setCopy={setCopyC}
                            codeString={codeStringC}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge1
