//PASSWORD LENGTH
const lengthSlider = document.querySelector("#sliderLength");
// document.querySelector("#length").innerHTML = 5;

//COPY BUTTON
const copyBtn = document.querySelector("#copy");





//OPTION 
const passwordBtn = document.querySelector(".generatePassword")
const options = document.querySelectorAll(".option input");

const passwordDisplay = document.querySelector("#passwordDisplay");

const characters = {
    uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase : "abcdefghijklmnopqrstuvwxyz",
    number : "1234567890",
    symbol : "!@#$%^&*_?"
};

const generatePassword = () =>{
    let staticPassword = "";
    let randomPassword = "";
    let passLength = lengthSlider.value;

    options.forEach(option => {
        if (option.checked){
            staticPassword += characters[option.id];
        }
    });
    for (let i = 0; i < passLength; i++) {
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
    }

    passwordDisplay.value = randomPassword;
    
}

const updateSlider = () =>{
    document.querySelector("#length").innerHTML = lengthSlider.value;
    generatePassword();
}

const copyPassword = () =>{
    navigator.clipboard.writeText(passwordDisplay.value);
    document.querySelector("#copy img").src = "check.svg";
}

updateSlider();

copyBtn.addEventListener('click', copyPassword);
passwordBtn.addEventListener('click', generatePassword);
lengthSlider.addEventListener('input', updateSlider);
