class Shape {
    constructor(colorChoice, text, textColor) {
        this.colorChoice = colorChoice;
        this.text = text;
        this.textColor = textColor;
    }
}

class Triangle extends Shape {
    constructor(colorChoice, text, textColor) {
        super(colorChoice, text, textColor);
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>" />`
    }
}

class Square extends Shape {
    constructor(colorChoice, text, textColor) {
        super(colorChoice, text, textColor);
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="73" y="40" width="160" height="160" fill="${this.color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>" />`   
    }
}

class Circle extends Shape {
    constructor(colorChoice, text, textColor) {
        super(colorChoice, text, textColor);
    };
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>" />`
    }
}

// Exports shape classes. 
module.exports = { Triangle, Square, Circle };