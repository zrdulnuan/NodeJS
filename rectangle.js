module.exports = (x,y,callback) => {
    if( x <= 0 || y <= 0) {
        setTimeout(() => 
            callback(new Error("Reactangle dimensions should be greater than zero: l = " + x + ", and w = " + y),null) , 
            2000);
    }
    else {
        setTimeout(() => 
            callback(null,{
                perimeter: () => (2*x + 2*y),
                area: () => (x*y)
            }) , 
            2000);
    }

}