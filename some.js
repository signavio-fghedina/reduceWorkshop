module.exports = (list, fn) => list.reduce((acc, el) => acc || fn(el), false)
