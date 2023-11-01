// Import fs, inquirer, and shapes. 
const fs = require('fs');
const inquirer = require('inquirer'); 
const {Triangle, Square, Circle} = require('./lib/shapes.js') 

// Svg class with a constructor and methods for rendering a logo based on user input. 
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeElement(shape){
        this.shapeElement += shape.render()
    }
}

// Questions array using inquirer.
const questions = [
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo!",
        choices: ["Triangle", "Square", "Circle"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for your logo",
    },
    {
        type: "input",
        name: "text",
        message: "Insert the text for your logo. (3 characters max!)",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a text color for your logo",
    },    
];

// Function to write the data to a file and throw an error if one occurs. 
function writeToFile(fileName, data) {
        console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Generating SVG Logo Now!");
    });
}

// Init function.
async function init() {
    console.log("Starting init");
        var svgString = "";
        var svgFile = "logo.svg";
    
    // Inquirer used to prompt the user with questions. 
    const answers = await inquirer.prompt(questions);

        // User text variable to ensure it is 1-3 characters.
        var userText = "";
        if (answers.text.length > 0 && answers.text.length < 4) {
            userText = answers.text;
        }else {
            console.log("Error, please enter 1-3 characters.");
            return;
        }
        console.log("User text: [" + userText + "]");
        // Set user text color. 
        userTextColor = answers["textColor"];
        console.log("User font color: [" + userTextColor + "]");
        // Set user shape color.
        userShapeColor = answers.shapeColor;
        console.log("User shape color: [" + userShapeColor + "]");
        // Set user shape choice. 
        userShapeChoice = answers["shape"];
        console.log("User selected shape = [" + userShapeChoice + "]");

// Variable declared to store user shape, check shape choice, and create new shape objects. 
let userShape;
if (userShapeChoice === "Square" || userShapeChoice === "square") {
    userShape = new Square();
    console.log("User selected Square")
}else if (userShapeChoice === "Circle" || userShapeChoice === "circle") {
    userShape = new Circle(); 
    console.log("User selected Cirlce"); 
}else if (userShapeChoice === "Triangle" || userShapeChoice === "triangle") {
    userShape = new Triangle(); 
    console.log("User selected Triangle");
}else {
    console.log("Invalid Shape!");
    return;
}
userShape.setColor(userShapeColor);

// New Svg instance with user values added for render. 
var svg = new Svg();
svg.setTextElement(userText, userTextColor);
svg.setShapeElement(userShape);
svgString = svg.render();

console.log("Displaying shape:/n/n" + svgString);

console.log("Logo generation complete!");
console.log("Write shape to file...");
writeToFile(svgFile, svgString);
}
init();