// DOM
let startBtn = document.getElementById("start-btn");
let btnDiv = document.getElementById("btn-div");
let choices = document.getElementById("choices");

// Individual notes
let rootAudio = new Audio("notes/key08.mp3");
let minorSecond = new Audio("notes/key09.mp3");
let majorSecond = new Audio("notes/key10.mp3");
let minorThird = new Audio("notes/key11.mp3");
let majorThird = new Audio("notes/key12.mp3");
let perfectFourth = new Audio("notes/key13.mp3");
let tritone = new Audio("notes/key14.mp3");
let perfectFifth = new Audio("notes/key15.mp3");
let minorSixth = new Audio("notes/key16.mp3");
let majorSixth = new Audio("notes/key17.mp3");
let minorSeventh = new Audio("notes/key18.mp3");
let majorSeventh = new Audio("notes/key19.mp3");
let octave = new Audio("notes/key20.mp3");

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
  let playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.classList.add("btn-repeat");
  console.log(playAgainBtn);
  choices.prepend(playAgainBtn);
  rootAudio.play();
  setTimeout(() => {
    notes[0].play();
  }, 1000);
});
