class DynamicArray {

  constructor(defaultSize = 4) {
    this.defaultSize = defaultSize
    this.data = new Array(defaultSize)
    this.capacity = defaultSize
    this.length = 0
  }

  read(index) {
    if (index >= this.length) {
      return undefined
    }
    return this.data[index]
  }

  push(val) {

    this.length++
    this.data[this.length - 1] = val

  }


  pop() {

    let val = this.data[this.length - 1]
    this.length--
    return val

  }

  shift() {

    // Your code here
  }

  unshift(val) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = val
    this.length++
  }

  indexOf(val) {

    // Your code here
  }

  resize() {

    // Your code here
  }

}


module.exports = DynamicArray;
