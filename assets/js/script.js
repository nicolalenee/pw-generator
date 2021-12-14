// Assignment code here
var count = 0;

// function to generate Password
var generatePassword = function() {
  // ask the user for the number of characters needed in password.
  var promptCharacterCount = prompt("Select a number between 8 and 128 for the number of characters for your password.");
  // if character count within range, assign array length
  if (promptCharacterCount >= 8 && promptCharacterCount <= 128) {
    var selectedCount = count;
    console.log(count);
    // if character count outside of range alert user and start function again
  } else {
    alert("Character count is out of range. Please try again.");
    return generatePassword();
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
