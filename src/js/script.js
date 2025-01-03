//import assets for use with parcel
// import character1Img from 'img/character1.png';
// import character2Img from 'img/character2.png';
// import character3Img from 'img/character3.png';
// import character4Img from 'img/character4.png';
// import character5Img from 'img/character5.png';
// import character6Img from 'img/character6.png';
// import character7Img from 'img/character7.png';
// import character8Img from 'img/character8.png';
// import character9Img from 'img/character9.png';
// import character10Img from 'img/character10.png';
// import character11Img from 'img/character11.png';
// import character12Img from 'img/character12.png';

// List of characters and hints
const characters = [
  {
    name: "Naruto",
    image: "src/img/character1.png",
    hint: "A ninja who loves ramen and wants to be Hokage.",
    extraHint: "Blonde hair, orange outfit, and ninja headband.",
  },
  {
    name: "Luffy",
    image: "src/img/character2.png",
    hint: "A pirate dreaming of becoming the Pirate King.",
    extraHint: "Straw hat and captain of the Straw Hat Pirates.",
  },
  {
    name: "Goku",
    image: "src/img/character3.png",
    hint: "A Saiyan who loves battles and strong opponents.",
    extraHint: "Spiky black hair and wears an orange gi.",
  },
  {
    name: "Light",
    image: "src/img/character4.png",
    hint: "A genius student who uses a deadly notebook.",
    extraHint: "Holds the Death Note with sharp, cold eyes.",
  },
  {
    name: "Levi",
    image: "src/img/character5.png",
    hint: "A soldier who fights Titans with unmatched skill.",
    extraHint: "Short black hair and known for being clean.",
  },
  {
    name: "Vegeta",
    image: "src/img/character6.png",
    hint: "A Saiyan prince striving to surpass Goku.",
    extraHint: "Widow's peak, spiky hair, and Saiyan armor.",
  },
  {
    name: "Kakashi",
    image: "src/img/character7.png",
    hint: "The 'Copy Ninja' who hides his face and reads books.",
    extraHint: "Silver hair, face mask, and a Sharingan eye.",
  },
  {
    name: "Tanjiro",
    image: "src/img/character8.png",
    hint: "A boy who wields a sword to protect his sister.",
    extraHint: "Green haori and a scar on his forehead.",
  },
  {
    name: "Itachi",
    image: "src/img/character9.png",
    hint: "A ninja who sacrifices all for peace and family.",
    extraHint: "Wears an Akatsuki cloak and Sharingan eyes.",
  },
  {
    name: "Eren",
    image: "src/img/character10.png",
    hint: "A fighter willing to do anything for freedom.",
    extraHint: "Brown hair, green cloak, and fiery will.",
  },
  {
    name: "Gojo",
    image: "src/img/character11.png",
    hint: "A sorcerer with unmatched powers and techniques.",
    extraHint: "White hair, black blindfold, and immense power.",
  },
  {
    name: "Usagi",
    image: "src/img/character12.png",
    hint: "A clumsy girl who fights evil with moon powers.",
    extraHint: "Blonde twin buns and a sailor outfit.",
  },
];
//Generate Random number to select a character
let currentCharacterIndex = Math.floor(Math.random()*characters.length);
//Set initial score and attempts to 0
let score = 0;
let attempts = 0;

// DOM Elements
const characterImage = document.getElementById("blurred-image");
const hint = document.getElementById("hint");
const extraHint = document.getElementById("extra-hint");
const guessInput = document.getElementById("guess-input");
const feedback = document.getElementById("feedback");
const submitGuessButton = document.getElementById("submit-button");
const getExtraHintBtn = document.getElementById("hint-button");
const nextCharacterButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

// Initialize the game
function loadCharacter() {
  //Generate Random Number to
  //Commenting to try use as global variable
  const character = characters[currentCharacterIndex]; 
  characterImage.src = character.image;
  characterImage.classList.add('blurred')
  console.log(characterImage.src);
  hint.textContent = `Hint: ${character.hint}`;
  extraHint.textContent = `Extra Hint: ${character.extraHint}`
  extraHint.classList.add('hidden');
  feedback.textContent = "";
  guessInput.value = "";
  resetAttempts();
  characterImage.classList.add("blurred");
  // getExtraHintBtn.classList.add("hidden"); NO LONGER IN USE
  // nextCharacterButton.classList.add(""); NO LONGER IN USE
}

// Increase the score
function increaseScore() {
  score++;
  scoreElement.innerHTML = score;
}
function decreaseScore(){
  score--;
  scoreElement.innerHTML = score;
} 
//increase attempts
function increaseAttempts(){
  attempts++;
  document.getElementById('attempts').textContent = attempts;
}
function resetAttempts(){
attempts = 0;
document.getElementById('attempts').textContent = attempts;
}


// Check the user's guess
submitGuessButton.addEventListener("click", () => {
  const guess = guessInput.value.trim();
  const character = characters[currentCharacterIndex]; 
  console.log('Submit Guess Button Pressed.');
    if(guess === ""){
      feedback.textContent = "Your Answer is Empty. Try again.";
    }
    else if (guess.toLowerCase() === character.name.toLowerCase()) {
    feedback.textContent = "Correct! Well done!";
    increaseScore();
    increaseAttempts(); 
    characterImage.classList.remove("blurred");
  } else {
    increaseAttempts();
    //Not Currently in Use or complete, Code for disabling Submit Button once attempt maximum is reached
    // getExtraHintBtn.classList.remove('hidden');
    // feedback.textContent = `Incorrect! Try again (${
    //   3 - attempts
    // } attempts left).`;
    // if (attempts >= 3) {
    //   getExtraHintBtn.classList.remove("");
    //   submitGuessButton.disabled = true;
    // }
  }
});

// Show an extra hint
getExtraHintBtn.addEventListener("click", () => {
  extraHint.classList.remove("hidden")
  decreaseScore();
});

// Load the next character
nextCharacterButton.addEventListener("click", () => {
  currentCharacterIndex = Math.floor(Math.random()*characters.length);
  loadCharacter();
});


// Add this to the correct guess section
// submitGuessButton.addEventListener("click", () => {
//   const guess = guessInput.value.trim().toLowerCase();
//   const character = characters[currentCharacterIndex].name.toLowerCase();

//   if (guess === character) {
//     feedback.textContent = "Correct!";
//     updateScore(); 

//   } else {
//     feedback.textContent = "Incorrect! Try again.";
//   }
// });

// Load the first character on page load
loadCharacter();