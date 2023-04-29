Array.prototype.myReduce = function customReduce(callback, initialValue) {
  let result = initialValue
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i], i)
  }
  return result
}

const aa = [9, 1, 5, 5].myReduce((a, b) => a + b, 0)
console.log(aa)
