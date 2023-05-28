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
    const [copyC, setCopyC] = useState(false)
    const [isOpenA, setIsOpenA] = useState(false)
    const [isOpenB, setIsOpenB] = useState(false)
    const parentRefA = useRef()
    const parentRefB = useRef()

    const codeStringA = `
const title = ":htraE no od ot ffutS"
const messages = [
    "maerc eci yrT",
    "rewoT leffiE tisiV",
    "noom eht ot snamuh etacoleR",
    "egrahc ni stac tuP",
]
`

    const codeStringB = `
function reverseString(string) {
    return string.split("").reverse().join("")
}

function reverseStringsInArray(arr) {
    return arr.map((message) => reverseString(message))
}

console.log(reverseStringsInArray(messages))
`

    const codeStringC = `
function reverseString(arr) {
    let reversedStr = ""

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedStr += arr[i]
    }

    return reversedStr
}

function reverseStringsInArray(arr) {
    return arr.map((message) => reverseString(message))
}

console.log(reverseStringsInArray(messages))
`

    return (
        <Container>
            <Navbar />
            <div className="main">
                <h1 className="title">08 - Decode An Alien Message</h1>
                <p className="date">Published: Apr 15, 2023 &#183; 15min</p>
                <br />
                <br />
                <p className="paragraph">
                    We've received what (we assume) is a message of peace and
                    brotherhood from an alien planet. They almost got it right,
                    but the messages are backward. Write functions to reverse
                    the backward messages so we can read what they have to say!
                </p>
                <br />
                <h2 className="margin-top">Challenge:</h2>
                <br />
                <SnippetContainer
                    copy={copyA}
                    setCopy={setCopyA}
                    codeString={codeStringA}
                />
                <br />
                <p className="paragraph">
                    <strong>Step 1</strong>: Write a function that takes in a
                    string and returns the reverse of that string. For this
                    challenge try to reverse the string using string methods and
                    also try to do it manually. Practice both ways!
                </p>
                <br />
                <p className="paragraph">Examples:</p>
                <br />
                <ul className="list">
                    <li>
                        <p className="paragraph">
                            Input:{" "}
                            <code className="code">"!htrae ot emocleW"</code>
                        </p>
                    </li>
                    <li>
                        <p className="paragraph">
                            Output:{" "}
                            <code className="code">"Welcome to earth!"</code>
                        </p>
                    </li>
                </ul>
                <br />
                <p className="paragraph">
                    <strong>Step 2</strong>: Write a function that takes in an
                    array of strings and returns a new array with all strings
                    reversed. Reuse your{" "}
                    <code className="code">reverseString()</code> function.
                </p>
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
                            For this solution let's start by using a couple of
                            known string methods and a new array method.
                        </p>
                        <br />
                        <SnippetContainer
                            copy={copyB}
                            setCopy={setCopyB}
                            codeString={codeStringB}
                        />
                        <br />
                        <p>
                            To create the{" "}
                            <code className="code">reverseString()</code>{" "}
                            function: use the{" "}
                            <code className="code">split</code> method to create
                            an array of letters, with the{" "}
                            <code className="code">reverse</code> array method
                            you can inverse the order of the elements inside an
                            array, and finally concatenate the rearranged array
                            of letters into a new string using the{" "}
                            <code className="code">join</code> method.
                        </p>
                        <br />
                        <p>
                            Now that you have your{" "}
                            <code className="code">reverseString()</code>{" "}
                            function you can use it to create a{" "}
                            <code className="code">
                                reverseStringsInArray()
                            </code>{" "}
                            function to revert strings inside an array. Apply
                            the <code className="code">map</code> method on the
                            array of strings and call the{" "}
                            <code className="code">reverseString()</code>{" "}
                            function on each string to reverse each string in
                            the array. Finally return the reversed array of
                            strings.
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
                            Now let me present the manual approach using the old
                            reliable <code className="code">for-loop</code> as
                            an alternative to solve this challenge.
                        </p>
                        <br />
                        <SnippetContainer
                            copy={copyC}
                            setCopy={setCopyC}
                            codeString={codeStringC}
                        />
                        <br />
                        <p>
                            Inside <code className="code">reverseString()</code>{" "}
                            we declare an empty string variable named{" "}
                            <code className="code">reversedStr</code>, the value
                            of this variable will be modified in each iteration
                            therefore is important to declare it as a{" "}
                            <code className="code">let</code> and not as a{" "}
                            <code className="code">const</code>.
                        </p>
                        <br />
                        <p>
                            Using a <code className="code">for-loop</code> we
                            will start adding the letters in{" "}
                            <code className="code">reversedStr</code> from the
                            last character to the first to reverse the string.
                            To do that we start the loop from the last index (
                            <code className="code">let i = arr.length - 1</code>
                            ) to the first (
                            <code className="code">i {">"}= 0</code>) and
                            decrementing in steps of one (
                            <code className="code">i--</code>).
                        </p>
                        <br />
                        <p>
                            Is important to note that the characters in a string
                            start from the index of zero, therefore we always
                            need to subtract one from the length in order to get
                            the last index in a string or array.
                        </p>
                        <br />
                        <p>
                            After the loop ends we only need to return{" "}
                            <code className="code">reversedStr</code>.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Challenge7
