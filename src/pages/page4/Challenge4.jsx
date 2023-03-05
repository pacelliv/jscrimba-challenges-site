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

const Challenge4 = () => {
    const [copyA, setCopyA] = useState(false)
    const [copyB, setCopyB] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()

    const codeStringA = `
        function capitalizeWord(word) {
            return word[0].toUpperCase() + word.slice(1)
        }
        
        console.log(capitalizeWord("pumpkin")) // Pumpkin
    `

    const codeStringB = `
        function toTitleCase(str) {
            // Pseudo code:
            // First, split the string into an array of words
            // Then, mapped through the array to call capitalizeWord on each word
            // Finally, joined the array into a new string with spaces in between
            return str
                .split(" ")
                .map((word) => capitalizeWord(word))
                .join(" ")
        }

        // Pumpkin Pranced Purposefully Across The Pond    
        console.log(toTitleCase("pumpkin pranced purposefully across the pond"))
    `

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">04 - toTitleCase</h1>
                <p className="date">Mar 4, 2022 &#183; 15min</p>
                <br />
                <br />
                <p className="paragraph bold">Challenge:</p>
                <br />
                <p className="paragraph">
                    Write a function that will capitalize every word in a
                    sentence.
                </p>

                <br />
                <p className="paragraph">
                    Divide this challenge in two parts: (a) first, write a
                    function <code className="code">capitalizeWord</code> that
                    takes in one word and capitalizes the first letter.
                </p>
                <br />
                <p className="paragraph">Example:</p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input: <code className="code">"scrimba"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">"Scrimba"</code>
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    Then (b) write a <code className="code">toTitleCase</code>{" "}
                    function that will receive a sentence to capitalize the
                    first letter of each word. Can you find a way to reuse the{" "}
                    <code className="code">capitalizeWord</code> function?
                </p>
                <br />
                <p className="paragraph">Example:</p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">
                                "everything, everywhere, all at once"
                            </code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output:{" "}
                            <code className="code">
                                "Everything, Everywhere, All At Once"
                            </code>
                        </p>
                    </li>
                </ul>
                <br />
                <p className="paragraph">
                    Hint: Try using the <code className="code">slice()</code>{" "}
                    and <code className="code">toUpperCase()</code> methods.
                </p>
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
                            padding: "0 0.5em 0.5em",
                        }}
                    >
                        <br />
                        <p>
                            Let's tackle the first part of this challenge by
                            creating a function that capitalizes the first
                            letter of one word:
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
                                                codeStringA
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
                                {codeStringA}
                            </SyntaxHighlighter>
                        </div>
                        <br />
                        <p>
                            <code className="code">Strings</code> in JavaScript
                            are primitive types treated by the language as
                            object types, for this reason they have methods. We
                            can access the individual characters in a{" "}
                            <code className="code">strings</code> in the same
                            way we access elements in an{" "}
                            <code className="code">array</code> by index.
                        </p>
                        <br />
                        <p>
                            <code className="code">word[0]</code> allow us to
                            access the first character of the{" "}
                            <code className="code">string</code> and apply{" "}
                            <code className="code">toUpperCase()</code> to
                            capitalize it. Then we only need to concatenate the
                            rest of the word with{" "}
                            <code className="code">slice(1)</code>, by passing
                            on <code className="code">1</code> as an argument to
                            the method it will create a copy of the word from
                            the second character to the last.
                        </p>
                        <br />
                        <p>
                            We create our{" "}
                            <code className="code">capitalizeWord</code>{" "}
                            function. Well done!
                        </p>
                        <br />
                        <p>
                            Let's complete this challenge by creating the{" "}
                            <code className="code">toTitleCase</code> function:
                        </p>
                        <br />
                        <div className="snippet">
                            <div className="snippet-header">
                                <p>Example Code</p>
                                {copyB ? (
                                    <button className="snippet-button">
                                        <BsCheck2All />
                                        Copied!
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                codeStringB
                                            )
                                            setCopyB(true)
                                            setTimeout(
                                                () => setCopyB(false),
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
                                {codeStringB}
                            </SyntaxHighlighter>
                        </div>
                        <br />
                        <p>
                            Writing pseudo code before jumping to solve a
                            problem is always a good strategy. By doing this you
                            can plan a good strategy on how to some a problem
                            instead of finding the solution along the way.
                        </p>
                        <br />
                        <p>
                            Also, as you can see this challenge was divided in
                            two part for simplicity. We could've created one
                            function to handle all the logic, but it's better
                            practice to make our functions do one task if
                            possible, this will make our code DRYer and easier
                            to read.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge4
