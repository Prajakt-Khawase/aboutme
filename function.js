console.log('INFO: Starting to read calc.js');
console.log('INFO: Getting access to elements');

const lengthElement = document.getElementById("length");
const heightElement = document.getElementById("height");
const widthElement = document.getElementById("width");


const btnElement = document.getElementById("calcbtn");
const answerElement = document.getElementById("answerText");
const quoteElement = document.getElementById("quote");

const length = lengthElement.value;
const height = heightElement.value;
const width = widthElement.value;

console.log("length", length);
console.log("height", height);
console.log("width", width);

console.log('INFO: Configuring event handlers');

//Storing Locally as Guided by Dr. Case
window.addEventListener('load', (event) => {
  console.log(' Starting initialization!')
  if (localStorage.getItem('length')){
    document.getElementById('length').value = parseInt(localStorage.length)