// The Password generator will provide a password with 9-127 characters dependent upon user selection/input.

//Begins the whole process once the button is pressed. 
document.querySelector("#generate").addEventListener("click", writePassword);

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Arrays to choose random characters from.
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt asking for lenght of password
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Loop checking that the password meetings the length requirements 
  while(confirmLength <= 8 || confirmLength >= 128) {
      alert("Password length must be between 8-128 characters. Please try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 


    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Would you like to include special characters?");
    var confirmNumericCharacter = confirm("Would you like to include numeric characters");    
    var confirmLowerCase = confirm("Would you like to include lowercase characters");
    var confirmUpperCase = confirm("Would you like to include uppercase characters");


      // Assign an action to the password parameters NEED TO FIX THIS
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

     
  

      // Empty string to pass random characters from the arrays
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        
      }

        // to check that minimum character types have been selected
if (!confirmNumericCharacter || !confirmUpperCase || !confirmSpecialCharacter) {
  alert("You must have a number, an uppercase letter, and a special character. Please start over and try again.");
  return;
}
      return randomPassword;
}

// big shout out to Tiffany Casey on github for helping get around the password generating almost all numbers before the rest of the characters in the password are generated. 
