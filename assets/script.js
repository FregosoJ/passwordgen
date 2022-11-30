// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerArr= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperArr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArr= ['0','1','2','3','4','5','6','7','8','9']
var symbolArr= ['!','@','#','$','%','&','*','-','+']
var num = '';
var passwoedArray=[];

function generatePassword(){
// Lenth of password
var length= prompt("How many charectors would you like your password to be.");
length = parseInt(length);

if (length<9 || length>128){
  alert("password must be between 9-100 charactors");
  return generatePassword();
}
// console.log(length);


// Generate ? for the password
var low = confirm("Would you like lower case letters")
var upp = confirm("Would you like uppercase letters")
var symbols = confirm("Would you like special charactos")
var numero= confirm("Would you like to include numbers")

if (!lowerArr && !upperArr && !numberArr &&!symbolArr){
  alert("You need to selectone type of charactor");
  return generatePassword()
}


// use if statements for y/n
if (length == true){
var userLower = (window.confirm("LowerCase? (V/N)"));
var userUpper = (window.confirm("UpperCase? (Y/N)"));
var userNumeric =(window.confirm("Numeric? (Y/N)"));
var userSpecial= (window .confirm("Special? (Y/N)"));
}


if (low){
  num = num.concat(lowerArr)
  // console.log(num)
}

if (upp){
  num = num.concat(upperArr)
}

if (symbols){
  num = num.concat(symbolArr)
}

if (numero){
  num= num.concat(numberArr)
}

console.log(num);

}

function genRandomNum(){
num = math.random() *1000
}

function printRandomNum(){
generateBtn
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
