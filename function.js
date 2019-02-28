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

btnElement.addEventListener('click', calcVolume(lengthElement.value,heightElement.value,widthElement.value));
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

    else{
        answerElement.innerHTML = `The volume is: ${volume} cubic centimeters.`
        return volume;
    }
}

// from example in the slides and taken url of jasonplaceholder.com
function getQuote() {
    return new Promise(function (resolve, reject) {  
      const req = new XMLHttpRequest();  
      req.timeout = 2000; 
      req.onreadystatechange = function (e) {
        if (req.readyState === 4) {
          if (req.status === 200) {
            const fact = req.response;
            resolve(fact)
          } else {
            reject(req.status)
          }
        }
      }
      req.ontimeout = function () {
        reject('Error - timed out: ' + req.time)
      }
      req.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);  
      req.send();
    })
  }

  async function quoteHandler() {
    const fact = await getQuote();
    console.log(fact);
    $("#quote").html(fact);
  }

console.log('INFO: Done loading, waiting for an event'); 