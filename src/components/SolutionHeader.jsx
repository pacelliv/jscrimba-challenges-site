import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const SolutionHeader = ({ isOpen, setIsOpen, title }) => {
    return (
        <div className="solution-container snippet-header beige snippet unset">
            <p className="paragraph bold">{title}</p>
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
    )
}

export default SolutionHeader
