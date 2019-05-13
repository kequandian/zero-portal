let random = {
    get(minNum, maxNum, fixed) {
        return (Math.random() * (maxNum - minNum) + minNum).toFixed(fixed); 
    }
}

module.exports = random;