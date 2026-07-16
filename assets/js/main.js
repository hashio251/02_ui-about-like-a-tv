// ======================
// State
// ======================
let isPowerOn = false;



// ======================
// DOM Elements
// ======================
const tvScreen = document.querySelector(".tv-display");

const powerOnButton = document.querySelector(".power-on");
const powerOffButton = document.querySelector(".power-off");

const channelButtons = document.querySelectorAll(".button");



// ======================
// Channnels
// ======================
let date = getTime

const loadingImages = [
  "assets/images/loading_1.jpg",
  "assets/images/loading_cage0.jpg",
  "assets/images/loading_cage1.jpg",
  "assets/images/loading_cage2.jpg",
  "assets/images/loading_cage3.jpg",
  "assets/images/loading_cage4.jpg",
  "assets/images/loading_cage5.jpg",
  "assets/images/loading_cage6.jpg",
  "assets/images/loading_cage7.jpg",
  "assets/images/loading_cage8.jpg",
  "assets/images/loading_cage9.jpg",
  "assets/images/loading_cage10.jpg",
  "assets/images/loading_success.jpg"
];

const WELCOME_IMAGE = "assets/images/welcome.jpg";

const channnels = [
  {
    title: "ch1 about portfolio",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch2 about website",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch3 about figma",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch4 about ps",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch5 about ai",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch6 about ummmmmm",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch7",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch8",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch9",
    image: "",
    url:"",
    description: ""
  }
];



// ======================
// Functions
// ======================
function changeScreen(imageUrl) {
  tvScreen.style.backgroundImage = `url(${imageUrl})`;
}

function updatePowerButtonStyle() {
  if (isPowerOn) {
    powerOnButton.style.backgroundColor = "brown";
    powerOffButton.style.backgroundColor = "gray";

    powerOnButton.style.color = "white";
    powerOffButton.style.color = "black";
  } else {
    powerOffButton.style.backgroundColor = "darkolivegreen";
    powerOnButton.style.backgroundColor = "gray";

    powerOnButton.style.color = "black";
    powerOffButton.style.color = "white";
  }
}

function turnOnTV() {
  isPowerOn = true;

  changeScreen(WELCOME_IMAGE);

  updatePowerButtonStyle();
}

function turnOffTV() {
  isPowerOn = false;

  tvScreen.style.backgroundImage = "";

  updatePowerButtonStyle();
}



// ======================
// Event Listeners
// ======================
powerOnButton.addEventListener("click", turnOnTV);

powerOffButton.addEventListener("click", turnOffTV);

channelButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (!isPowerOn) return;

    changeScreen(images[index]);
  });
});