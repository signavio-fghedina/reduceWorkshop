const fn = (a, b) => a + b
const idendityElement = 0

module.exports = list => list.reduce(fn, idendityElement)
