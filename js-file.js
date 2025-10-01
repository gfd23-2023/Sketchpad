//Exercise of The Odin Project - Javascript Foundations

//Create a 16x16 grid of square divs
let number_of_squares = 16;

/*GRID --------------------------------------------------------------------------------------------------------------------------*/

const container = document.getElementById("container");

//It is better to do this in the javascript file because, here, we get more flexibility
//to change the quantities of squares as we wish. In the html file we would have to write - by hand - all the declarations
//for all the squares we wanted.
for (let i = 0; i < number_of_squares * number_of_squares; i++)
{
    const square = document.createElement("div");           //creates a new div
    square.classList.add("square");                         //sets a class to the div
    container.appendChild(square);                          //puts the div inside of the container
}

/*-------------------------------------------------------------------------------------------------------------------------------*/

/*HOVERING EFFECT ----------------------------------------------------------------------------------------------------------------*/

//Takes all the squares divs
const squares = document.querySelectorAll(".square");

//Flag to know if the mouse is down or up
let mouseDown = false;

//If the mouse is pressed
document.addEventListener("mousedown", () => {
    mouseDown = true;
});

//If the mouse is freed
document.addEventListener("mouseup", () => {
    mouseDown = false;
})

//Changes the colours for every square
squares.forEach(square => {
    
    //Listens the movement of the mouse
    square.addEventListener("mousemove", () => {
        if (mouseDown)
        {
            square.style.backgroundColor = "black";
        }
    });

    //If only one square is selected
    square.addEventListener("mousedown", () => {
        square.style.backgroundColor = "black";
    });
});

/*--------------------------------------------------------------------------------------------------------------------------------*/