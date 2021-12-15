// character type arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "@", "#", "$", "%" ,"=", " ^ ", "&", "*"];



// function to generate Password
var generatePassword = function() {
  // ask the user for the number of characters needed in password.
  var promptCharacterCount = prompt("Select a number between 8 and 128 for the number of characters for your password.");
  // if character count within range, assign array length
  if (promptCharacterCount >= 8 && promptCharacterCount <= 128) {
    var count = promptCharacterCount;
    console.log(count);

    // prompts that ask user what character types they want to include in their password
    var upperConfirm = confirm("Do you want to include uppercase characters?");
    var upper = upperConfirm;
    
    var lowerConfirm = confirm("Do you want to include lowercase characters?");
    var lower = lowerConfirm;
  
    var numericConfirm = confirm("Do you want to include numeric characters?");
    var numeric = numericConfirm;
 
    var specialConfirm = confirm("Do you want to include special characters?");
    var special = specialConfirm;
  

    //if at least one character type is selected run function. Otherwise, alert user to select a character type
    if (upper || lower || numeric || special) {
      //array that holds selected character type
      var characterArrays = [];
      //if upper is true, then push the array into the CharacterArray
      if (upper) {
        characterArrays.push(upperCase);
      }
      if (lower) {
        characterArrays.push(lowerCase);
      }
      if (numeric) {
        characterArrays.push(numericChars);
      }
      if (special) {
        characterArrays.push(specialChars);
      }
      console.log(characterArrays);
      // array to hold the password characters as items in an array
      var passwordArray = [];
      // make the array length the count the user selected in the first prompt
      passwordArray.length = count;

      // if characterArrays has content then loop through characterArrays "count" number of times
      for (var i = 0; i < passwordArray.length; i++) {
        if (characterArrays) {
          var randomArrOrder = characterArrays[Math.floor(Math.random() * characterArrays.length)];
          var 
        }
      }
      

      
    } else {
      alert("You have to select at least one character type. Please try again.");
      return generatePassword();
    }
  
    // if character count outside of range alert user and start function again
  } else {
    alert("Character count is out of range. Please try again.");
    return generatePassword();
  }
  //ask the user if they want to include lowercase letters
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



/* random character loop
var randomCharacter = function () {
  for (var i = 0; i < count; i++) {
    if (charTypeArr) {
      var randomArr = charTypeArr.upperCase[Math.floor(Math.random() * charTypeArr.length)];
      console.log(randomArr)
    }
  }
};
randomCharacter();*/