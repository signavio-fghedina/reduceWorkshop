module.exports = (list, fn) => list.reduce((acc, el) => fn(el) ? [...acc, el] : acc, [])
