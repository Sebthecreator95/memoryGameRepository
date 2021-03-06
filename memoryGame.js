const count = 6;
const table = document.querySelector("#memoryGame");
const start         = document.querySelector('#startButton');
const restart       = document.querySelector('#restartButton');
const matches         = document.querySelector('#matches');
const score         = document.querySelector('#playerTimeScore');
const scoreRecord   = document.querySelector('#bestTime');
const gameStyle     = document.querySelector('#gameStyle');
const princessImages = 
["data:image/jpeg;base64,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",
"data:image/jpeg;base64,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",
"https://vignette.wikia.nocookie.net/princessdisney/images/c/c3/Snow_White.JPG/revision/latest/top-crop/width/360/height/450?cb=20130427060723",
"https://pbs.twimg.com/profile_images/819955513718779905/DY4UfMVj_400x400.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQigYlAouOF7mxQYRUR0BvWdySugXn4W_eI8A&usqp=CAU",
"https://vignette.wikia.nocookie.net/the-princess/images/1/1c/Tiana.jpg/revision/latest/top-crop/width/360/height/450?cb=20151126155545"


]

const avengersImages = 
[
"data:image/jpeg;base64,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",
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlYTQU5dk0ORgK74OA7UbbF6WAQAz_mx1q6A&usqp=CAU",
"https://static.wikia.nocookie.net/ultimate-marvel-cinematic-universe/images/6/61/Doc.jpg/revision/latest?cb=20160117222945",
"https://filmyloop.com/wp-content/uploads/2020/07/avengers-endgame-thor-1557753634.jpg",
"https://i.pinimg.com/originals/c2/15/15/c215156bc1b330248b58381cf63ad9ad.jpg",
"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F01%2Fhot-toys-avengers-endgame-iron-man-mark-lxxxc-life-size-collectible-0002.jpg?q=75&w=800&cbr=1&fit=max"

]

let currentMatches = 0;
let currentScore = 0;
let timeCountInterval = null;



function shuffle(array , count) {
    let newArray  = [];
    //double the array
    for (let i = 0 ; i < count ; i ++){
      newArray.push(array[i]);
      newArray.push(array[i]);
    }
    
    let counter = newArray.length;
  
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
  
      // Decrease counter by 1
      counter--;
  
      // And swap the last element with it
      let temp = newArray[counter];
      newArray[counter] = newArray[index];
      newArray[index] = temp;
    }
  
    return newArray;
  }
  
function createDivsForCards(){
  let memoryCards = [];

  if (gameStyle.value === 'princess'){
    //hard coded colors
    memoryCards  = princessImages;
  
  } else if(gameStyle.value === 'avengers') {
    //images
    memoryCards = avengersImages;

  }

  let memoryCardDeck = shuffle(memoryCards, count)
  for(let card of memoryCardDeck){
      const newDivCard = document.createElement("div");
      newDivCard.classList = 'newCard';
      newDivCard.setAttribute('data-face-up','false');
      newDivCard.setAttribute('data-url' , card);

      newDivCard.addEventListener("click", cardClick);
      table.append(newDivCard)

  }
}
let firstDiv  = null;
let secondDiv  = null;

function cardClick(event){
    const clickDiv = event.target;
    if(firstDiv !== null && secondDiv !== null){
        return false;
    }
if(clickDiv.getAttribute('data-face-up' === 'true')){
    return false;
}
if (firstDiv == null || secondDiv === null ){
    if(gameStyle.value === "princess"){ 
        clickDiv.style.backgroundImage  =  'url("'+clickDiv.getAttribute('data-url')+'")';
        

    }else if (gameStyle.value === "avengers"){
        clickDiv.style.backgroundImage  = 'url("'+clickDiv.getAttribute('data-url')+'")';
          
    }
      clickDiv.setAttribute('data-face-up' , 'true');
  

if(firstDiv === null){
    firstDiv = clickDiv;
    secondDiv = null;
} else{
    secondDiv = clickDiv;
    if (firstDiv.getAttribute('data-url') === secondDiv.getAttribute('data-url')){
        firstDiv = null;
        secondDiv = null;
        currentMatches ++
        matches.innerText = currentMatches;
        if (currentMatches === count){
            restart.disabled = false;
            
            gameStyle.disabled = false;
            clearInterval(timeCountInterval);

          let record    = 10000;

            if(localStorage.getItem('bestTime')){
                record = parseInt(localStorage.getItem('bestTime'));
            }
  
            if (record > currentScore){
              //new record
              alert('New Record');
              localStorage.setItem('bestTime' , currentScore);
              bestTime.innerText   = currentScore;
            }
          }
        } else {
          //not match flip back after 1000ms
          setTimeout(flipBack , 1000);
        }
      }
    }
  }
  
  /**
   * flip Back all the cards
   */
  function flipBack(){
    //reset the color and background images
  
    firstDiv.style.backgroundImage  = '';
    secondDiv.style.backgroundImage  = '';
  
    //set the attributes
    firstDiv.setAttribute('data-face-up' , 'false');
    secondDiv.setAttribute('data-face-up' , 'false');
  
    firstDiv  = null;
    secondDiv = null;
  }
  
  /**
   * Start the game
   */
  function gameStart(){
    memoryGame.innerHTML  = '';
    currentMatches    = 0;
    currentScore      = 0;
    score.innerText   = currentScore;
    matches.innerText = currentMatches;
    createDivsForCards();
  
    start.disabled    = true;
    restart.disabled  = false;
    count.disabled    = true;
    gameStyle.disabled  = true;
  
    timeCountInterval = setInterval(function(){
      currentScore  ++;
      score.innerText = currentScore;
    } , 1000);
  }
  
  /**
   * Clear and restart the game
   */
  function gameRestart(){
    gameStart();
  }
  
  
  scoreRecord.innerText   = localStorage.getItem('bestTime') ? localStorage.getItem('bestTime') : '10000';
  
  start.addEventListener('click' , gameStart);
  restart.addEventListener('click' , gameRestart);



