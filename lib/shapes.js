// Shape class with a constructor to set the color and color value. 
class Shape{
    constructor(){
        this.color=''
        }
    setColor(color){
        this.color=(color);
        }
    }
    // Triangle class that extends Shape class and renders an Triangle. 
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
        }
    }
    // Square class that extends Shape class and renders an Square. 
    class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}">`
        }
    }
    // Circle class that extends Shape class and renders an Circle.  
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="100" fill="${this.color}">`
        }
    };
    
    // Export the shapes. 
    module.exports = {Triangle, Square, Circle}