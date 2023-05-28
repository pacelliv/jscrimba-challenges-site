import SyntaxHighlighter from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { BsCheck2All } from "react-icons/bs"
import { MdOutlineContentCopy } from "react-icons/md"

const SnippetContainer = ({ copy, setCopy, codeString }) => {
    return (
        <div className="snippet">
            <div className="snippet-header">
                <p className="paragraph">Example Code</p>
                {copy ? (
                    <button className="snippet-button">
                        <BsCheck2All />
                        Copied!
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(codeString)
                            setCopy(true)
                            setTimeout(() => setCopy(false), 2000)
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
    )
}

export default SnippetContainer
