Array.prototype.myMap = function customReduce(callback) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i))
  }
  return result
}

const aa = [9, 1, 5, 5].myMap((value, index) => value + 1)
console.log(aa)
