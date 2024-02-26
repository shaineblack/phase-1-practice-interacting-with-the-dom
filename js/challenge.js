const counterElement = document.getElementById('counter');


function incrementCounter() {
  
  let counterValue = parseInt(counterElement.innerText);

  
  counterValue++;

  
  counterElement.innerText = counterValue;
}


setInterval(incrementCounter, 1000);


const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');


function incrementCounter() {
  let counterValue = parseInt(counterElement.innerText);
  counterValue++;
  counterElement.innerText = counterValue;
}


function decrementCounter() {
  let counterValue = parseInt(counterElement.innerText);
  counterValue--;
  counterElement.innerText = counterValue;
}


plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);


const heartButton = document.getElementById('heart');


const likes = {};


heartButton.addEventListener('click', likeNumber);


function likeNumber() {
  
  const counterValue = parseInt(counterElement.innerText);


  if (likes[counterValue]) {
    
    likes[counterValue]++;
  } else {
    
    likes[counterValue] = 1;
  }

  
  updateLikesDisplay();
}


function updateLikesDisplay() {
  const likesList = document.querySelector('.likes');
  likesList.innerHTML = ''; 

  
  for (const key in likes) {
    
    const listItem = document.createElement('li');
    listItem.innerText = `${key} has ${likes[key]} like(s)`;

    
    likesList.appendChild(listItem);
  }
}


const pauseButton = document.getElementById('pause');


let isPaused = false;


pauseButton.addEventListener('click', togglePause);


function togglePause() {
  isPaused = !isPaused; 

  
  plusButton.disabled = isPaused;
  minusButton.disabled = isPaused;
  heartButton.disabled = isPaused;
  submitButton.disabled = isPaused;

  
  pauseButton.innerText = isPaused ? 'resume' : 'pause';
}


const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');


commentForm.addEventListener('submit', addComment);


function addComment(event) {
  event.preventDefault(); 

  const commentText = commentInput.value; 

  
  const listItem = document.createElement('li');
  listItem.innerText = commentText;

  
  commentList.appendChild(listItem);

  commentInput.value = ''; 
}