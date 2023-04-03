function doubleWithCallback(arr, callback) {
    const doubledArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      doubledArr.push(callback(arr[i]));
    }
  
    return doubledArr;
  }
  const inputArr = [1, 2, 3, 4, 5];

  function double(num) {
    return num * 2;
  }
  
  const outputArr = doubleWithCallback(inputArr, double);
  
  console.log(outputArr); // [2, 4, 6, 8, 10]
    