function myFunction (myParameter){
    if (myParameter){
        return "The parameter is true!";
    }

    return "The parameter is false!";
}
console.log(myFunction("The parameter is true"));
console.log(myFunction("The parameter is true!"|"The parameter is false!"));


module.exports = myFunction;

