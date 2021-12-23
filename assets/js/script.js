
// character type arrays
var options = [
  upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialChars = ["!", "@", "#", "$", "%" ,"=", " ^ ", "&", "*"]

]

// function to generate Password
var generatePassword = function() {
  // ask the user for the number of characters needed in password.
  var pwLength = prompt("Select a number between 8 and 128 for the number of characters for your password.");
  // if character count within range, assign array criteria
  if (pwLength >= 8 && pwLength <= 128) {
    // prompts that ask user what character types they want to include in their password
    var upperConfirm = confirm("Do you want to include uppercase characters?");
    var lowerConfirm = confirm("Do you want to include lowercase characters?");
    var numericConfirm = confirm("Do you want to include numeric characters?");
    var specialConfirm = confirm("Do you want to include special characters?");

    //if at least one character type is selected run function. Otherwise, alert user to select a character type
    if (upperConfirm || lowerConfirm || numericConfirm || specialConfirm) {
      //array that holds selected character types criteria
      var characterArrays = [];
      //if criteria are true, then push the array into the CharacterArray
      if (upperConfirm) {
        characterArrays = characterArrays.concat(upperCase);
      }
      if (lowerConfirm) {
        characterArrays = characterArrays.concat(lowerCase);
      }
      if (numericConfirm) {
        characterArrays = characterArrays.concat(numericChars);
      }
      if (specialConfirm) {
        characterArrays = characterArrays.concat(specialChars);
      } 
    } else {
      alert("You have to select at least one character type. Please try again.");
      return generatePassword();
    }
      var password = "";

      // randomly generate an index from the array within the CharacterArrays
      for (var i = 0; i < pwLength; i++) {
          var randomCharacterIndex = Math.floor(Math.random() * (characterArrays.length));
          // select character
          var randomCharacter = characterArrays[randomCharacterIndex];
          // set password
          password = password.concat(randomCharacter);
      }
      // return keyword to generate password after loop completes.
      return password;
  
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