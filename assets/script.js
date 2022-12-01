// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
var lowerArr= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperArr= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArr= ['0','1','2','3','4','5','6','7','8','9']
var symbolArr= ['!','@','#','$','%','&','*','-','+']
var input = [];
var passwordArray=[];


// Lenth of password
function generatePassword(){
var length= prompt("How many charectors would you like your password to be.");
length = parseInt(length);

if (length<9 || length>128){
  alert("password must be between 9-128 charactors");
  return generatePassword();
}
console.log(length);


// Generate ? for the password
var low = confirm("Would you like lower case letters")
var upp = confirm("Would you like uppercase letters")
var symbols = confirm("Would you like special charactos")
var numero= confirm("Would you like to include numbers")
var minimumCount = 0;

// if statements 
if (!low && !upp && !symbols && !numero){
  alert("You need to selectone type of charactor");
  return generatePassword()
}
// concat [] together into the empty input []
if (low){
  input = input.concat(lowerArr)
  console.log(input)
}

if (upp){
  input = input.concat(upperArr)
}

if (symbols){
  input = input.concat(symbolArr)
}

if (numero){
  input= input.concat(numberArr)
}

console.log(input)

console.log(typeof input)


for (let i = 0; i < length; i++) {
 index = Math.random() * input.length;
 passwordArray += input[index];
}
return password.join("")

function genRandomNum(){
  index = Math.floor(Math.random()) * input.length
  passwordArray += input[index.length]
  input = math.random() *100;
  }
// console.log("passwordArray")
console.log(passwordArray)

// Write password to the #password input
function writePassword(){
var password = generatePassword();
var passwordText = document.querySelector("#password");
}
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
}