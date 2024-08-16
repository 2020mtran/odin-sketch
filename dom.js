const page = document.querySelector(".page");

page.style.display = "flex";
page.style.flexDirection = "column";
page.style.justifyContent = "center";
page.style.alignItems = "center";
page.style.margin = "10px";

const btn = document.querySelector("#btn");
btn.style.width = "200px";
btn.style.height = "50px";
btn.textContent = "Reset";
btn.style.margin = "0px 0px 10px 0px";
btn.addEventListener("click", () => {
    let userInput = prompt("Enter the number of boxes each side should have.");
    container.innerHTML = "";

    let squareSize = 560 / userInput;
    for (i = 0; i < userInput * userInput; i++) {
        const square = document.createElement("div");
        square.style.border = "1px solid black";
        square.style.display = "flex";
        square.style.flexDirection = "column";
        square.style.justifyContent = "center";
        square.style.alignItems = "center";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        })
        container.append(square);
    }
})

const container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexDirection = "row";
container.style.justifyContent = "center";
container.style.flexWrap = "wrap";
container.style.width = "560px";

for (i = 0; i < 16*16-1; i++) {
    const square = document.createElement("div");
    square.style.border = "1px solid black";
    square.style.display = "flex";
    square.style.flexDirection = "column";
    square.style.justifyContent = "center";
    square.style.alignItems = "center";
    square.style.width = "35px";
    square.style.height = "35px";
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    })
    // square.addEventListener("mouseout", () => {
    //     square.style.backgroundColor = "white";
    // }) // Removes the trail
    container.append(square);
}

page.append(btn);
page.append(container);