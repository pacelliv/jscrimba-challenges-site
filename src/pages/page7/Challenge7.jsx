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

const Challenge7 = () => {
    const [copy, setCopy] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const parentRef = useRef()

    const codeString = `
function isAnagram(str1, str2) {
    // the length are not the same, return false and don't do anything else
    if (str1.length !== str2.length) return false

    const orderedStr1 = str1.split("").sort().join("")
    const orderedStr2 = str2.split("").sort().join("")

    return orderedStr1 === orderedStr2
}

console.log(isAnagram("allergy", "gallery")) // true
console.log(isAnagram("treasure", "measure")) // false
`

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">07 - It Is An Anagram</h1>
                <p className="date">Published: May 28, 2023 &#183; 15min</p>
                <br />
                <br />
                <p className="paragraph">
                    Anagrams are groups of words that can be spelled with the
                    same letters but rearranged in different orders. For
                    example, the letters in "pea" can be rearrange to spell
                    "ape", and the letters in "allergy" can be rearranged to
                    spell "gallery".
                </p>
                <br />
                <h2 className="margin-top">Challenge:</h2>
                <br />
                <p className="paragraph">
                    Write a function to check if two strings of lowercase
                    letters are anagrams. Return true if the word is an anagram.
                    Return false if it isn't.
                </p>
                <br />
                <p className="paragraph">Examples:</p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">"allergy", "gallery"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">true</code>
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">"rainbow", "crossbow"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">false</code>
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
                            padding: "0 0.5em 0.45em",
                        }}
                    >
                        <br />
                        <p>
                            For the solution of this challenge we will use a few
                            method we already know and I will introduce couple
                            of new ones that are not difficult to understand.
                        </p>
                        <br />
                        <SnippetContainer
                            copy={copy}
                            setCopy={setCopy}
                            codeString={codeString}
                        />
                        <br />
                        <p>
                            First we check if the words have the same length. If
                            they don't, we return false and don't do anything
                            else. If they pass the test, we apply the{" "}
                            <code className="code">split</code>,{" "}
                            <code className="code">sort</code> and{" "}
                            <code className="code">join</code> methods.
                        </p>
                        <br />
                        <p>
                            Let me walk you though how on these methods work
                            together. After splitting the words into arrays of
                            characters{" "}
                            <code className="code">
                                ["a", "l", "l", "e", "r", "g", "y"]
                            </code>
                            , we apply the <code className="code">sort</code>{" "}
                            method to rearrange the characters in the arrays in
                            an alphabetical order{" "}
                            <code className="code">
                                ["a", "e", "g", "l", "l", "r", "y"]
                            </code>
                            . Then, with the <code className="code">join</code>{" "}
                            method we get a new string.
                        </p>
                        <br />
                        <p>
                            {" "}
                            The Strict Equality Operator{" "}
                            <code className="code">===</code> will verify if the
                            words are of the same type (number, boolean, string)
                            and if they are equal. If they pass the test it
                            means the words are anagrams and the function return
                            true, otherwise false.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge7
