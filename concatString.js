const fn = (acc, el) => acc.concat(el)
const idendityElement = ''

module.exports = list => list.reduce(fn, idendityElement)
