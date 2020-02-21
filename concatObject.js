const fn = (acc, el) => ({...acc, ...el})
const idendityElement = {}

module.exports = list => list.reduce(fn, idendityElement)
