const uuid = require('uuid/v4')

module.exports = [
  {
    id: uuid(),
    question: 'What is a callback function?',
    answer: 'Because functions are first-class objects, we can pass a function as an argument in another function and later execute that passed-in function or even return it to be executed later.'
  },
  {
    id: uuid(),
    question: 'which function is the callback function?',
    answer: 'it is the function that is being executed as a parameter of another function'
  },
  {
    id: uuid(),
    question: 'Substring - x is where you start chopping, and y is where you stop chopping each character is numbered starting at 0',
    answer: '"some word".substring(x, y)'
  },
  {
    id: uuid(),
    question: 'Parts of a function',
    answer: 'the code between the { } is what is run every time the function is calledInputOutputCallThe code in the (parentheses) is parameter it\'s a placeholder word that we give a specific value when we call the function. Parameters go in the parentheses. The computer will look out for it in the code block.'
  },
  {
    id: uuid(),
    question: 'scope global',
    answer: 'Variables defined outside a function are accessible anywhere once they have been declared. They are called global variables and their scope is global'
  }
]
