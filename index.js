"strict"
const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
]
console.log(typeof tutorials)
// const titleCased = () => {
//   return tutorials
// }

const titleCased = () => {
  const title = tutorials.map(function (name) {
    // words name.split(" ") splits the strings into individual strings with a space between each string
    const words = name.split(" ")
    // console.log(words)// ['What', 'does', 'the', 'this', 'keyword', 'mean] ['What, 'is', 'the', 'Constructor', '00', 'pattern?']

    // words.map creates a new array where word[0](first element) is uppercased and returns the array of strings. NOTE - the .map alone would ONLY return the first letter of each new string, the word.slice(1) removes that first (now uppercased) letter and returns the rest of the word (which is still lowercased)
    const combine = words.map((word) => word[0].toUpperCase() + word.slice(1))
    // console.log(combine) // i.e. ['What', 'Does', 'The', 'This', 'Keyword', 'Mean']

    // combine.join concatenates all the elements in the array separated by a space (" ") and returns the string
    const cased = combine.join(" ")
    return cased
    // console.log(cased) /* i.e.[What does the this keyword mean] */
  })
  return title
}
titleCased()
