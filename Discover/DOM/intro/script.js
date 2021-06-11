/* getElementbyId() ─ Element

const element = document.getElementById('blog-title')
console.log(element)
*/

/* getElementbyClassName() ─ HTMLCollection

const element = document.getElementsByClassName('blog-title');
console.log(element)
*/

/* getElementbyTagName() ─ HTMLCollection

const element = document.getElementsByTagName('meta')
console.log(element)
*/

/* querySelector() ─ Element

const element = document.querySelector('h1.blog-title')
console.log(element)
*/

// querySelectorAll() ─ NodeList

const elements = document.querySelectorAll('.blog-title')

elements.forEach(el => console.log(el))