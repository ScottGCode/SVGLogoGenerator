const fs = require('fs');
const inquirer = require('inquirer'); 
const {Cirlce, Square, Triangle} = require('./lib/shapes.js') 

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo!",
        choices: ["Triangle", "Square", "Circle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a color for your logo",
    },
    {
        type: "input",
        name: "text",
        message: "Insert the text for your logo. (3 characters max)",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color for the text on your logo",
    },    
];

