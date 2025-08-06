function filter(arr, callback) {
  let res = [];

  for (let elem of arr) {
    if (callback(elem) === true) {
      res.push(elem);
    }
  }
  return res;
}

let result = filter([1, 2, -2, 3, 4, 5, -1, 2], function (elem) {
  if (elem > 0) {
    return true;
  } else {
    return false;
  }
});

let result2 = filter([1, 2, -2, 3, 4, 5, -1, 2], (elem) => elem > 0);

console.log(result);
console.log(result2);
