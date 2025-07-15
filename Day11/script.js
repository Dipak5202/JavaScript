
divo = document.createElement("div");

// po = document.createElement("p");
// po.textContent = "This is a paragraph inside a div.";


for (let i = 0; i < 5; i++) {
    const p = document.createElement("p");
    p.textContent = `This is paragraph number ${i + 1} inside the div.`;
    p.style.color = "blue";
    p.style.fontSize = "20px";
    p.style .backgroundColor = "lightgray";
    p.style.padding = "10px";
    p.id = `paragraph-${i + 1}`;
    divo.appendChild(p);
}

const btn = document.createElement("button");
btn.textContent = "Click Me";
btn.style.marginTop = "20px";
btn.onclick = function() {
    document.querySelectorAll("p").forEach(p => {
        p.id === "paragraph-3" ? p.style.color = "red" : p.style.color = "green";
    });
};
divo.appendChild(btn);
document.body.append(divo);