// Define a test suite for the shape classes imported from shapes.js
const {Triangle, Square, Circle} = require("./shapes.js")

// Test to see if a red Triangle is rendered.
describe('Triangle', () => {
  it('should render a red polygon', () => {
  const shape = new Triangle();
  let color = ('red')
  shape.setColor(color);
  expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
  });
});
// Test to see if a green Square is rendered. 
describe('Square', () => {
  it('should render a green square', () => {
  const shape = new Square();
  let color = ('green')
  shape.setColor(color);
  expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
  });
});
// Test to see if a black Circle is rendered. 
  describe('Circle', () => {
  it('should render a black circle', () => {
  const shape = new Circle();
  let color = ('black')
  shape.setColor(color);
  expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" fill="${color}"/>`);
  });
});