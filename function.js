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
}
if (localStorage.getItem('height')){
  document.getElementById('height').value = parseInt(localStorage.height)
}
if (localStorage.getItem('width')){
  document.getElementById('width').value = parseInt(localStorage.width)
}
})


//clear local storage
document.getElementById('clearStorage').addEventListener('click', () =>{
    localStorage.removeItem('length')
    localStorage.removeItem('height')
    localStorage.removeItem('width')

})

btnElement.addEventListener('click', function(){calcVolume(lengthElement.value,heightElement.value,widthElement.value)});
quoteElement.addEventListener('dblclick', function(){quoteHandler()});

console.log('Declaring functions');

function calcVolume(l,h,w){
    const volume = l * w * h / 3;

    localStorage.setItem('length', l);
    localStorage.setItem('height', h);
    localStorage.setItem('width', w);
    
    if(l < 0 || h < 0 || w < 0){
        answerElement.innerHTML = `Invalid input - cannot be negative`
        return -1;
    }

    else if(r=="" || h=="" || w==""){
        answerElement.innerHTML = `Invalid input - cannot be null`
        return null;
    }


    else if(r > 100000 || h > 100000 || w > 100000 ){
        answerElement.innerHTML = `Invalid input - input too large`
        return null;
    }