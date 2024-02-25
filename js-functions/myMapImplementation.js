function myMapImplementation(callback) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) newArr.push(callback(this[i], i));
  return newArr;
}

Array.prototype.myMap = myMapImplementation;

let arr = [1, 2, 4, 5, 6];
let newArr = arr.myMap((item) => item + 2);
console.log(arr); // 1,2,4,5,6
console.log(newArr); // 3,4,6,7,8
