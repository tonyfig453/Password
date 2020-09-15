var count = prompt("choose a length for a password at least 8 characters and no more than 128 characters")
var isLowerCase = prompt("Do you want lowercase letters (yes or no)").toLowerCase()
var isUpperCase = prompt("Do you want upper case letters (yes or no)").toUpperCase()
var isNumbers = prompt("Do you want numbers (yes or no)")
var isSpecial = prompt("Do you want special letters (yes or no)")
var generateBtn = document.querySelector("#generate");
var passText = document.querySelector("#password")

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*";

function generatePassword() {
  var allCharacters = ""
  if (isLowerCase === "yes") {
    allCharacters = allCharacters + lowerCase;
  }
  if (isUpperCase === "yes") {
    allCharacters = allCharacters + upperCase;
  }
  if (isNumbers === "yes") {
  }
  allCharacters = allCharacters + numbers;
}
if (isSpecial === "yes") {
  allCharacters = allCharacters + special;
}



var allCharacters= lowerCase + upperCase +numbers +special;

var password = ""
for (var i = 0; i < count; i++) {
 var allCharactersLength = allCharacters.length - 1;
//  console.log(allCharactersLength);
 var randomNumber = Math.floor(Math.random() * allCharactersLength)
  password = password + allCharacters[randomNumber]
  
  
  
  
  
}

passText.innerHTML = password


function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  generateBtn.addEventListener("click", writePassword);

}



