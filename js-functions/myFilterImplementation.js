function myFilterImplementation(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) newArr.push(this[i]);
  }
  return newArr;
}

Array.prototype.myFilter = myFilterImplementation;

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let filtered = arr.myFilter((item) => item % 2 == 0);
console.log(arr); // 1,2,3,4,5,6,7,8
console.log(filtered); //2,4,6,8
