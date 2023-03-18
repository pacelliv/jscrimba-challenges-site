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

export { codeStringA, codeStringB, codeStringC }
