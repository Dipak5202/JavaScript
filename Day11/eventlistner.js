
btn = document.getElementById("functionDeclarationBtn")

btn.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";

    divo = document.createElement("div");
    for (let i = 0; i < 5; i++) {
        const p = document.createElement("p");
        p.textContent = `This is paragraph number ${i + 1} inside the div.`;
        p.style.color = "blue";
        p.style.fontSize = "20px";
        p.style .backgroundColor = "lightgray";
        p.style.padding = "10px";
        p.id = `paragraph-${i + 1}`;
        p.addEventListener("mouseover", function() {
            p.style.color = "red";
        });
        p.addEventListener("mouseout", function() {
            p.style.color = "blue";
        });
        divo.appendChild(p);
    }
    document.body.append(divo);
});

btn.addEventListener("mouseover", changeBackgroundColor);
btn.addEventListener("mouseout", revertBackgroundColor);

function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightgreen";
}

function revertBackgroundColor() {
    document.body.style.backgroundColor = "";
}

para = document.getElementById("functionDeclarationOutput");
document.querySelector("#functionDeclarationInput").addEventListener("input", function(event) {
    // const input = document.getElementById("functionDeclarationInput");
    // console.log("Input value:", input.value);
    console.log("Input value:", event.target.value);
    para.textContent = event.target.value;
    para.style.color = "purple";
});

para22 = document.getElementById("functionDeclarationOutput2");
document.querySelector("#functionDeclarationInput").addEventListener("change", function(event) {
    // const input = document.getElementById("functionDeclarationInput");
    // console.log("Input value:", input.value);
    console.log("Change value:", event.target.value);
    para22.innerText = event.target.value;
    para22.style.color = "red";
});