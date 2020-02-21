
const shortFind = (list, fn) => {
  let t = undefined;
  try{
    return list.reduce((acc, el) => {
      t = fn(el) ? el : t;
      if (t) {
        throw ''
      }
      return t
    }, false)
  } catch (e){
    return t
  }
}


module.exports = (list, fn) => shortFind(list,fn)

