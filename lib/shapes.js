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
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text> />`
    }
}

class Square extends Shape {
    constructor(colorChoice, text, textColor) {
        super(colorChoice, text, textColor);
    };
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text> />`
    }
}

class Circle extends Shape {
    constructor(colorChoice, text, textColor) {
        super(colorChoice, text, textColor);
    };
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color} <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>" />`
    }
}
console.log(Cirlce);

// Exports shape classes. 
module.exports = { Triangle, Square, Circle };