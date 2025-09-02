function generateSeries(a) {
    const result = [];
    for (let i = 0; i < a; i++) {
        result.push(2 * i + 1);
    }
    return result;
}

console.log(generateSeries(4)); 
