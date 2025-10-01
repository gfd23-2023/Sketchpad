//Exercise of The Odin Project - Javascript Foundations

//Create a 16x16 grid of square divs
let number_of_squares = 16;

//Injection of value from JS to CSS
document.documentElement.style.setProperty("--grid-size", number_of_squares);

/*GRID --------------------------------------------------------------------------------------------------------------------------*/
function createGrid(number_of_squares)
{
    const container = document.getElementById("container");

    container.innerHTML = "";       //cleans the container

    //It is better to do this in the javascript file because, here, we get more flexibility
    //to change the quantities of squares as we wish. In the html file we would have to write - by hand - all the declarations
    //for all the squares we wanted.
    for (let i = 0; i < number_of_squares * number_of_squares; i++)
    {
        const square = document.createElement("div");           //creates a new div
        square.classList.add("square");                         //sets a class to the div
        container.appendChild(square);                          //puts the div inside of the container
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------*/

/*HOVERING EFFECT ----------------------------------------------------------------------------------------------------------------*/

function hoverEffect()
{
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
    });

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
}

/*--------------------------------------------------------------------------------------------------------------------------------*/

/*ASKING THE NUMBER OF SQUARES ---------------------------------------------------------------------------------------------------*/
const button = document.getElementById("s_number");

//Initial grid
createGrid(number_of_squares);
//Initial hoverEffec
hoverEffect();

button.addEventListener("click", () =>{
    number_of_squares = prompt("Type the number of squares per side: ");
    number_of_squares = parseInt(number_of_squares);

    if (number_of_squares > 10 && number_of_squares < 100)
    {
        //Injection of value from JS to CSS
        document.documentElement.style.setProperty("--grid-size", number_of_squares);

        createGrid(number_of_squares);
        hoverEffect();
    }
    else
        alert("Type a number between 10 and 100! ");
})
/*--------------------------------------------------------------------------------------------------------------------------------*/