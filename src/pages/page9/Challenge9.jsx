import { useState, useRef } from "react"
import styled from "styled-components"
import Navbar from "../../components/navbar/Navbar"
import SnippetContainer from "../../components/SnippetContainer"
import SolutionHeader from "../../components/SolutionHeader"

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
    const [copyA, setCopyA] = useState(false)
    const [copyB, setCopyB] = useState(false)
    const [isOpenA, setIsOpenA] = useState(false)
    const [isOpenB, setIsOpenB] = useState(false)
    const parentRefA = useRef()
    const parentRefB = useRef()

    const codeStringA = `
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("")

    return str === reversedStr
}

// Test your function
console.log(isPalindrome("abba"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("octopus"))
console.log(isPalindrome("pumpkins"))
console.log(isPalindrome("madam"))
`

    const codeStringB = `
function isPalindrome(str) {
    let reversedString = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }

    return str === reversedString
}

// Test your function
console.log(isPalindrome("abba"))
console.log(isPalindrome("civic"))
console.log(isPalindrome("octopus"))
console.log(isPalindrome("pumpkins"))
console.log(isPalindrome("madam"))
`

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">09 - Palindromes</h1>
                <p className="date">Published: Jun 4, 2023 &#183; 15min</p>
                <br />
                <br />
                <p className="paragraph">
                    Palindromes are words that are the same forward or backward.
                    For example, the words "noon" and "kayak" are a palindromes.
                </p>
                <br />
                <h2 className="margin-top">Challenge:</h2>
                <br />
                <p className="paragraph">
                    Write a function to check if a lowercased string of letters
                    is a palindrome. If the word is palindrome, return true. If
                    it isn't, return false.
                </p>
                <br />
                <p className="paragraph">Examples:</p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input: <code className="code">"motorbike"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">"false"</code>
                        </p>
                    </li>
                    <br />
                    <li>
                        <p className="paragraph">
                            Input: <code className="code">"rotator"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output: <code className="code">"true"</code>
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
                            padding: "0 0.5em 0.45em",
                        }}
                    >
                        <br />
                        <p>
                            For this solution I will use the{" "}
                            <code className="code">split</code>,{" "}
                            <code className="code">reverse</code> and{" "}
                            <code className="code">join</code> array methods.
                            This solution should be easy for you to understand
                            because we have been using these methods a lot.
                        </p>
                        <br />
                        <SnippetContainer
                            copy={copyA}
                            setCopy={setCopyA}
                            codeString={codeStringA}
                        />
                        <br />
                        <p>
                            The <code className="code">split</code> method
                            creates an array of letters, then we{" "}
                            <code className="code">reverse</code> the order of
                            the array and finally we concatenate the rearranged
                            array into a new word using the{" "}
                            <code className="code">join</code> method.
                        </p>
                        <br />
                        <p>
                            The reversed word is stored in a{" "}
                            <code className="code">reversedStr</code> local
                            variable.
                        </p>
                        <br />
                        <p>
                            To complete the solution just compared the original
                            word against{" "}
                            <code className="code">reversedStr</code> using the
                            Strict Equality Operator to see if they are the
                            same.
                        </p>
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
                            padding: "0 0.5em 0.45em",
                        }}
                    >
                        <br />
                        <p>
                            Instead of using array methods, for this solution we
                            will use a <code className="code">for-loop</code> to
                            reverse the word and then we will check if it's a
                            palindrome. This solution is similar to the previous
                            challenge.
                        </p>
                        <br />
                        <SnippetContainer
                            copy={copyB}
                            setCopy={setCopyB}
                            codeString={codeStringB}
                        />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge7
