// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function getSum(arr) {
//   return arr.reduce((acc, c) => acc + c, 0);
// }

// console.log(getSum(nums));

// function getCubes(arr) {
//   return arr.map((element) => element ** 3);
// }

// console.log(getCubes(nums));

// let strtest = "hello";

// let reverse = (str) => str.split("").reverse().join();
// console.log(reverse(strtest));

// let palindromeCheck = (str) =>
//   str === str.split("").reverse().join("") ? "Yes" : "NO";

// console.log(palindromeCheck("ollo"));

// Start messing with APIs

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("img").src = data.message;
  })
  .catch((err) => console.log(err));
