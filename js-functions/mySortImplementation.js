function mySortImplementation(callback) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (callback(this[j], this[j + 1])) {
        const temp = this[j + 1];
        this[j + 1] = this[j];
        this[j] = temp;
      }
    }
  }
}

Array.prototype.mySort = mySortImplementation;

let arr = [6, 2, 3, 47, 2, 7, 8, 3, 4, 4, 2, 1, 56, 7, 8];
console.log(arr); // 6,2,3,47,2,7,8,3,4,4,2,1,56,7,8
arr.mySort((a, b) => a > b);
console.log(arr); // 1,2,2,2,3,3,4,4,6,7,7,8,8,47,56
