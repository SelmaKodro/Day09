function logicalorOperator (num){
    if (num <20 || num>30){
        return "Out";
    }
    return "In"
}
console.log(logicalorOperator(0));
console.log(logicalorOperator(9));
console.log(logicalorOperator(20));
console.log(logicalorOperator(23));
console.log(logicalorOperator(30));
console.log(logicalorOperator(31));
console.log(logicalorOperator(105));

module.exports = logicalorOperator;
