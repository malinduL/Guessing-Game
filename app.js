
let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);

function gessfunction() {
    for(let i=0; i<4; i++){
        let userInput = document.getElementById("gessField").value;
        if (randomNumber == userInput) {
            console.log("your win");
            document.getElementById("demo").innerHTML = "your win";
            return;
        } else if (userInput > randomNumber) {
            alert("enter <" + userInput + ": ");
            userInput = document.getElementById("gessField");
        } else if (userInput < randomNumber) {
            alert("enter >" + userInput + ": ");
            userInput = document.getElementById("gessField");
        } else {
            console.log("your fail");
            return;
        }
    }
}