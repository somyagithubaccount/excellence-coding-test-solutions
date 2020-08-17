/////////First program solution//////////////////
var myArray = [10, 22, 35, 40, 51, 69];
function printEvenArray(myArray) {
  var arrEven = [];
  for (var i = 0; i <= myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
      arrEven.push(myArray[i]);
    }
  }
  return arrEven;
}
//function calling
console.log(printEvenArray(myArray));

/////////Second program solution///////////////
var numbers = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
function countConsecutiveOnes(numbers) {
  var count = 0;
  var maxCount = 0;
  for (var i = 0; i <= numbers.length; i++) {
    if (numbers[i] === 1) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
}

console.log("Number of consecutive ones: ", countConsecutiveOnes(numbers));

/////////////Third program solution/////////////////
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10];
function findRepeatedNumber(nums) {
  var result = [];
  for (var i = 0; i <= nums.length - 1; i++) {
    if (nums[i + 1] === nums[i]) {
      result.push(nums[i]);
    }
  }
  return result;
}

console.log("The repeated number is: ", findRepeatedNumber(nums));

//////////Solution of ques-4//////////////
function validateForm() {
  var name = document.myForm.firstName.value;
  var checkMe = document.getElementById("isCheck").checked;
  if (name == "") {
    alert("Please enter your name.");
    return false;
  }
  if (checkMe == false) {
    alert("Please check me!!");
    return false;
  }
  return true;
}

////////////Solution of ques-8///////////////
//var obj = {
//   id: 4,
//   name: "abc",
//   id: 10,
//   name: "ab2",
//   id: 5,
//   name: "abc3",
//   id: 6,
//   name: "abc5",
// };
// this given obj is not a valid object because object contains unique keys and above we have single key multiple times.
// so converting it to array of objects.
var obj = [
  { id: 4, name: "abc" },
  { id: 10, name: "ab2" },
  { id: 5, name: "abc3" },
  { id: 6, name: "abc5" },
];
function sortObjectById(obj) {
  var sortById = obj.slice(0);
  sortById.sort(function (a, b) {
    return a.id - b.id;
  });
  return sortById;
}
console.log(sortObjectById(obj));
