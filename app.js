// DOM
let startBtn = document.getElementById("start-btn");
let btnDiv = document.getElementById("btn-div");
let choices = document.getElementById("choices");
let guesses = document.getElementsByClassName("btn-interval");

//
btnDiv.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    if (e.target.id == notes[0].name) {
      e.target.disabled = true;
      console.log(e.target);
      e.target.style.background = "green";
      let tryAgainBtn = document.createElement("button");
      tryAgainBtn.textContent = "Try Again";
      tryAgainBtn.classList.add("btn-repeat");
      choices.prepend(tryAgainBtn);
      tryAgainBtn.addEventListener("click", () => {
        shuffle(notes);
        tryAgainBtn.remove();
        for (let i = 0; i < guesses.length; i++) {
          guesses[i].style.background = "white";
          guesses[i].disabled = false;
        }
        if (rootAudio.play || notes[0].play) {
          rootAudio.pause();
          notes[0].pause();
          rootAudio.currentTime = 0;
          notes[0].currentTime = 0;
          rootAudio.play();
          setTimeout(() => {
            notes[0].play();
          }, 1000);
        }
      });
    } else {
      e.target.style.background = "red";
    }
  }
});
// Individual notes
let rootAudio = new Audio("notes/rootAudio.mp3");
rootAudio.name = "rootAudio";
let minorSecond = new Audio("notes/minorSecond.mp3");
minorSecond.name = "minorSecond";
let majorSecond = new Audio("notes/majorSecond.mp3");
majorSecond.name = "majorSecond";
let minorThird = new Audio("notes/minorThird.mp3");
minorThird.name = "minorThird";
let majorThird = new Audio("notes/majorThird.mp3");
majorThird.name = "majorThird";
let perfectFourth = new Audio("notes/perfectFourth.mp3");
perfectFourth.name = "perfectFourth";
let tritone = new Audio("notes/tritone.mp3");
tritone.name = "tritone";
let perfectFifth = new Audio("notes/perfectFifth.mp3");
perfectFifth.name = "perfectFifth";
let minorSixth = new Audio("notes/minorSixth.mp3");
minorSixth.name = "minorSixth";
let majorSixth = new Audio("notes/majorSixth.mp3");
majorSixth.name = "majorSixth";
let minorSeventh = new Audio("notes/minorSeventh.mp3");
minorSeventh.name = "minorSeventh";
let majorSeventh = new Audio("notes/majorSeventh.mp3");
majorSeventh.name = "majorSeventh";
let octave = new Audio("notes/octave.mp3");
octave.name = "octave";

// Notes array
let notes = [
  minorSecond,
  majorSecond,
  minorThird,
  majorThird,
  perfectFourth,
  tritone,
  perfectFifth,
  minorSixth,
  majorSixth,
  minorSeventh,
  majorSeventh,
  octave,
];

// Fischer-Yates Shuffle
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

shuffle(notes);

// Remove startBtn, add btnDiv, play root and relative note
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  btnDiv.style.display = "block";
  playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.classList.add("btn-repeat");
  choices.prepend(playAgainBtn);

  rootAudio.play();
  setTimeout(() => {
    notes[0].play();
  }, 1000);
  // Play the audio again
  playAgainBtn.addEventListener("click", () => {
    if (rootAudio.play || notes[0].play) {
      rootAudio.pause();
      notes[0].pause();
      rootAudio.currentTime = 0;
      notes[0].currentTime = 0;
      rootAudio.play();
      setTimeout(() => {
        notes[0].play();
      }, 1000);
    } else {
      rootAudio.play();
      setTimeout(() => {
        notes[0].play();
      }, 1000);
    }
  });
});
