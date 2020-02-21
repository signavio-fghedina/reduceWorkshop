const fn = (acc, el) => Math.min(acc, el)
const idendityElement = Infinity

module.exports = list => list.reduce(fn, idendityElement)
