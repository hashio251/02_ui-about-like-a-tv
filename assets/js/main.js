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
const DEFAULT_IMAGE =
{
  title: "WELCOME",
  image: "",
  url:"",
  description: ""
};

const channnels = [
  {
    title: "",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "",
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

  changeScreen(DEFAULT_IMAGE);

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