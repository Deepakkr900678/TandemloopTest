function generateSeriesWithCondition(a) {
    const result = [];
    let limit = (a % 2 === 0) ? a - 1 : a;
    for (let i = 0; i < limit; i++) {
        result.push(2 * i + 1);
    }
    return result;
}

console.log(generateSeriesWithCondition(4)); 
console.log(generateSeriesWithCondition(6)); 
