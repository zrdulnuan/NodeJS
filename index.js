const rectangle = require('./rectangle');
var rect = require('./rectangle');

function solveRect(l,w) {
    console.log("Solving for rectangle with l = " + l + " and w = " + w)

    rect(l,w, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message)
        }
        else {
            console.log("The area of the rectangle of dimensions l = " + l + " and w = " + w + " is " + rectangle.area())
            console.log("The perimeter of the rectangle of dimensions l = " + l + " and w = " + w + " is " + rectangle.perimeter())
        }
    });
    console.log("This statement is after the call to rect")

};

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);