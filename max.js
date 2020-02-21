const fn = (acc, el) => Math.max(acc, el)
const idendityElement = -Infinity

module.exports = list => list.reduce(fn, idendityElement)
