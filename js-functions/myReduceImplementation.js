function myReduceImplementation(callback, accumulator) {
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
}

Array.prototype.myReduce = myReduceImplementation;

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr); // 1,2,3,4,5,6
let sum = arr.myReduce((sum, item) => sum + item, 0);
console.log(sum); //21
