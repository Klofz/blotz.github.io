// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/a0MMlzPb_700w_0.jpg') {
    myImage.setAttribute ('src','images/a466WQLG_700w_0.jpg');
  } else {
    myImage.setAttribute ('src','images/a0MMlzPb_700w_0.jpg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Dripping Boya, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Dripping Boya, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}