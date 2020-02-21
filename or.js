const fn = (acc, el) => acc || el
const idendityElement = false

module.exports = list => list.reduce(fn, idendityElement)
