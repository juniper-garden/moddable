/*---
description: 
flags: [onlyStrict]
---*/

const Square = Content.template($ => ({
	top: 10, left: 10, width: 50, height: 50,
	skin: new Skin({ fill: $ })
}));

const redSquare = new Square("red");
const yellowSquare = new Square("yellow");
const blueSquare = new Square("blue");

new Application(null, {
	skin: new Skin({ fill: "white" }),
	contents: [ redSquare, yellowSquare, blueSquare ]
});

screen.checkImage("956d38536582eaab00d12d41ddb05629");

application.remove(yellowSquare);
screen.checkImage("98868b4660b55533461626a949f47956");

application.remove(blueSquare);
screen.checkImage("b1b84e6a1e6ecdcee8643ff21e21963c");

application.remove(redSquare);
screen.checkImage("3b06e6e8da2bfca351d5210df4a736df");

application.add(yellowSquare);
screen.checkImage("02466534568cdcce1d6ccece804eac31");

application.add(blueSquare);
screen.checkImage("98868b4660b55533461626a949f47956");

application.add(redSquare);
screen.checkImage("b1b84e6a1e6ecdcee8643ff21e21963c");