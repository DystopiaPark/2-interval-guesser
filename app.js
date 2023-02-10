// DOM
let startBtn = document.getElementById("start-btn");
let btnDiv = document.getElementById("btn-div");
let choices = document.getElementById("choices");
let guesses = document.getElementsByClassName("btn-interval");

btnDiv.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    if (e.target.id == notes[0].src.slice(28, -4)) {
      e.target.style.background = "green";
    } else {
      e.target.style.background = "red";
    }
  }
});
// Individual notes
let rootAudio = new Audio("notes/rootAudio.mp3");
let minorSecond = new Audio("notes/minorSecond.mp3");
let majorSecond = new Audio("notes/majorSecond.mp3");
let minorThird = new Audio("notes/minorThird.mp3");
let majorThird = new Audio("notes/majorThird.mp3");
let perfectFourth = new Audio("notes/perfectFourth.mp3");
let tritone = new Audio("notes/tritone.mp3");
let perfectFifth = new Audio("notes/perfectFifth.mp3");
let minorSixth = new Audio("notes/minorSixth.mp3");
let majorSixth = new Audio("notes/majorSixth.mp3");
let minorSeventh = new Audio("notes/minorSeventh.mp3");
let majorSeventh = new Audio("notes/majorSeventh.mp3");
let octave = new Audio("notes/octave.mp3");

// Notes array
let notes = [
  minorSecond,
  majorSecond,
  minorThird,
  majorThird,
  perfectFourth,
  tritone,
  perfectFifth,
  minorSeventh,
  majorSeventh,
  octave,
];
console.log(notes[0].src.slice(28, -4));
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
