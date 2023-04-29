Array.prototype.myConcat = function customReduce(...args) {
  let result = []
  for (let i = 0; i < args.length; i++) {
    if (Array.isArray(args[i])) {
      result = [...this, ...args[i]]
      continue
    }
    result = [...this, args[i]]
  }
  return result
}

const test1 = [9, 1, 5, 5].myConcat(['a', 'b', 'c', 'd'])
console.log(test1)
const test2 = [9, 1, 5, 5].myConcat({ shivam: 'sharma' })
console.log(test2)
