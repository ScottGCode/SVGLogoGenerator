# SVG Logo Generator

## Description

As a freelance web developer I wanted a simple way to generate a logo for my projects so that I dont have to pay a graphic designer. I developed this application to be easy and straight forward so you can spend more time working on your code. This is a Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. This application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file. This application features Node.js filesystem and inquirer 8.2.4. This application also utilizes Jest for running the unit tests to ensure the code is working properly. This allows any user to devote more time working on the code instead of creating a logo from scratch. I learned how to work with more Node.js packages to dynamically prompt a user and generate files as well as test the code to ensure its functionality. 

## Installation

To install this project and get the development enviroment up and running:

1. Fork and clone the code from the repository provided in the GitHub link.
2. Open the file in your code editor.
3. In the terminal, run the command `npm install` to install the dependencies. 
4. To invoke the application use the command `node index.js`. 

## Usage

To use this command line application first open the file in the integrated terminal. Run the command `node index.js` to recieve the prompts for your SVG logo. Answer all the prompts that follow. Once you are finished you will recieve a "Success" message and your custom SVG logo will be generated. The SVG logo will be saved as `logo.svg`. 

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

![alt text](assets/images/screenshot.png)

## Credits

University of Utah Coding Bootcamp Instructor and Teaching Assistants. Node.js documentation. Stack Overflow. W3 School's documentation. MDN WebDocs. SVG documentation. Full-Stack Blog.

## License

MIT License

Copyright (c) [2023] [scottrutherford]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Tests

To run the unit tests in this application, ensure that you have Jest installed as a dependency. To start the tests, in the terminal run the command `npm run test`. You will see there is 1 testing suite with 3 different tests for each shape to ensure they will render correctly.  