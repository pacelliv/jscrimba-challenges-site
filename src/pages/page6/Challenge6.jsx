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

const Challenge6 = () => {
    const [copyA, setCopyA] = useState(false)
    const [copyB, setCopyB] = useState(false)
    const [copyC, setCopyC] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()

    const codeStringA = `
const emojis = {
    smile: "😊",
    angry: "😠",
    party: "🎉",
    heart: "💜",
    cat: "🐱",
    dog: "🐕",
}
`

    const codeString = ""

    const codeStringB = `
function emojifyWord(word) {
    if (word.startsWith(":") && word.endsWith(":")) {
        const str = word.slice(1, -1)
        if (emojis[str]) {
            return emojis[str]
        } else {
            return str
        }
    } else {
        return word
    }
}        
`

    const codeStringC = `
function emojifyPhrase(phrase) {
    return phrase
        .split(" ")
        .map((word) => emojifyWord(word))
        .join(" ")
}

console.log(emojifyWord(":heart:")) // "💜"
console.log(emojifyWord(":flower:")) // "flower"
console.log(emojifyWord("elephant")) // "elephant"

console.log(emojifyPhrase("I :heart: my :cat:")) // "I 💜 my 🐱"
console.log(emojifyPhrase("I :heart: my :elephant:")) // "I 💜 my elephant"
`

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">06 - Emojify!</h1>
                <p className="date">Published: Mar 25, 2022 &#183; 15min</p>
                <br />
                <br />
                <p className="paragraph">
                    Popular services like Slack and GitHub allow for emoji
                    shortscodes, meaning they will detect when a word in a
                    sentence begins and ends with a colon{" "}
                    <code className="code">:</code> and automatically replace
                    that word with an emoji.
                </p>
                <br />
                <p>
                    These shortcodes allow users to add an emoji to their
                    messages by typing a code rather than searching for an emoji
                    from a list.
                </p>
                <br />
                <p>
                    For example, typing <code className="code">:smile:</code>{" "}
                    will replace that text with 😊.
                </p>
                <br />
                <p className="paragraph bold">Challenge:</p>
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
                        customStyle={{
                            paddingLeft: 20,
                            paddingBottom: 20,
                        }}
                    >
                        {codeStringA}
                    </SyntaxHighlighter>
                </div>
                <br />
                <p className="paragraph">
                    1. Write a function that checks if a lowercase word starts
                    and ends with a colon. If it does, remove the colons and
                    look up the word in the emoji object. If the word is in the
                    emojis object, return the corresponding emoji. If it isn't,
                    return the original word. Examples:
                </p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input: <code className="code">":party:"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">🎉</code>
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="paragraph">
                            Input: <code className="code">":flower:"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">"flower"</code>
                        </p>
                    </li>
                </ul>
                <br />
                <p className="paragraph">
                    2. Write a function to find any emoji shortcodes in a
                    phrase. Your function should map over each word in the
                    phrase, emojify any word that begins and ends with a colon,
                    then return the emojified phrase. Feel free to use your
                    emojify function from the previous exercise! Examples:
                </p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">"I :heart: my :cat:"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">"I 💜 my 🐱"</code>
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">
                                "I :heart: my elephant"
                            </code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output:{" "}
                            <code className="code">"I 💜 my elephant"</code>
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
                            To solve this challenge we're going to apply many of
                            the previous JavaScript's Array and String built-in
                            methods we already know from previous challenges.
                        </p>
                        <br />
                        <p>
                            Like mentioned before, one the most important steps
                            before jumping into coding is writing a plan or
                            pseudo code.
                        </p>
                        <br />
                        <p>
                            First we will build the{" "}
                            <code className="code">emojifyWord</code> function:
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
                                customStyle={{
                                    paddingLeft: 20,
                                    paddingBottom: 20,
                                }}
                            >
                                {codeStringB}
                            </SyntaxHighlighter>
                        </div>
                        <br />
                        <p>
                            Using an IF-statement we verify if the word starts
                            and ends with a colon using the{" "}
                            <code className="code">startsWith</code> and{" "}
                            <code className="code">endsWith</code> String
                            built-in methods.
                        </p>
                        <br />
                        <p>
                            If both checks return true then we need to remove
                            the colons using the{" "}
                            <code className="code">slice</code> Array built-in
                            method in a range of{" "}
                            <code className="code">(1, -1)</code>, this range
                            grabs from the second character to the second to
                            last character from the word.
                        </p>
                        <br />
                        <p>
                            The next part consist on nesting another
                            IF-statement, in this new conditional we check if
                            the word exists in the{" "}
                            <code className="code">emojis</code> object using
                            the word as key. If it does, we return the emoji
                            associated to that key, otherwise we just return the
                            word.
                        </p>
                        <br />
                        <p>
                            The outer <code className="code">else</code> belong
                            to the outer IF-statement, this condition return the
                            word in case it does not began and ended with a
                            colon.
                        </p>
                        <br />
                        <p>
                            Cool! We have our{" "}
                            <code className="code">emojifyWord</code> function,
                            now we only need to call this function in our{" "}
                            <code className="code">emojifyPhrase</code>{" "}
                            function.
                        </p>
                        <br />
                        <p>
                            Let's build the{" "}
                            <code className="code">emojifyPhrase</code>{" "}
                            function.
                        </p>
                        <br />
                        <div className="snippet">
                            <div className="snippet-header">
                                <p>Example Code</p>
                                {copyC ? (
                                    <button className="snippet-button">
                                        <BsCheck2All />
                                        Copied!
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                codeStringC
                                            )
                                            setCopyC(true)
                                            setTimeout(
                                                () => setCopyC(false),
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
                                {codeStringC}
                            </SyntaxHighlighter>
                        </div>
                        <br />
                        <p>
                            The solution should look very familiar to you, let
                            me present a quick recap of the methods used:
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
                                <span>
                                    : turns the phrase into an array of words.
                                </span>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
                                    target="_blank"
                                    className="bold"
                                >
                                    <code>map()</code>
                                </a>
                                <span>
                                    : loops through the array of words and calls{" "}
                                    <code className="code">emojifyWord</code> on
                                    each word.
                                </span>
                            </li>
                            <li>
                                <a
                                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
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
                        </ul>
                        <br />
                        <p>
                            Test your functions by passing the examples I
                            provided or test it with your own phrases.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge6
