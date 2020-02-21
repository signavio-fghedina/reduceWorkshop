const fn = (a, b) => a * b
const idendityElement = 1

module.exports = list => list.reduce(fn, idendityElement)
