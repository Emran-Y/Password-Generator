let leftP = document.getElementById("left-p");
let rightP = document.getElementById("right-p");
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


function clicked(){
    let leftPassword = '';
    let rightPassword= '';
    for (let i = 0; i < 14;i++){
        let num1 = Math.floor(Math.random() * (characters.length));
        let num2 = Math.floor(Math.random() * (characters.length));
        leftPassword+= characters[num1];
        rightPassword+= characters[num2];
        
    }
    leftP.textContent = leftPassword;
    rightP.textContent = rightPassword;
}


