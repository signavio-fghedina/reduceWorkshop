const fn = (acc, el) => acc && el
const idendityElement = true

module.exports = list => list.reduce(fn, idendityElement)
