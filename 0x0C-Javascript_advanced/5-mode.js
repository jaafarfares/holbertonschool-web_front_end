
function changeMode(size, weight, transform, background, color){
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
      }

}
function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    var welcomeText = document.createElement("p");
    welcomeText.innerText = "Welcome Holberton!";
    document.body.appendChild(welcomeText);
    
    let btn1 = document.createElement("button");
    btn1.innerText  = "Spooky";
    btn1.addEventListener("click", spooky);
    document.body.appendChild(btn1);

    let btn2 = document.createElement("button");
    btn2.innerText = "Dark mode";
    btn2.addEventListener("click", darkMode);
    document.body.appendChild(btn2);

    let btn3 = document.createElement("button");
    btn3.innerText = "Scream mode";
    btn3.addEventListener("click", screamMode);
    document.body.appendChild(btn3);

}

main();
