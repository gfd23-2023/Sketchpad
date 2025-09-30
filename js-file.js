//Exercise of The Odin Project - Javascript Foundations

//Create a 16x16 grid of square divs
let number_of_squares = 16;

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