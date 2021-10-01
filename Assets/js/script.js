// Assignment code here
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const charactersE1 = document.getElementById('characters');
const generateBtn = document.getElementById('generatePassword');
const passwordTextEl = document.getElementById('passwordGeneratorForm');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  character: getRandomCharacter,
};

  // Generate password function
  function generatePassword(lower, upper, number, character, length) {

    let generatedPassword = '';

    const typesCount = lower + upper + number + character;
    const typesArr = [{ lower }, { upper }, { number }, { character }].filter
      (
        item => Object.values(item)[0]
      );

    if (typesCount === 0) {
      return '';
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];

        generatedPassword += randomFunc[funcName]();
      });
    }

    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;

  }

  //Generate the functions for password criteria

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getRandomCharacter() {
    const characters = '!@#$%^&*(){}[]=<>/,.';
    return characters[Math.floor(Math.random() * characters.length)];
  }

  //Add event listener to generate button
  generateBtn.addEventListener('click', (generatePassword) => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasCharacter = charactersE1.checked;
    
    resultEl.innerText = generatePassword(
      hasLower,
      hasUpper,
      hasNumber,
      hasCharacter,
      length
    );  
  });
  
