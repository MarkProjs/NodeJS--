const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

function findSummation(num=1) {
  if (typeof num !== "number" || num<=0) {
    return false;
  }

  let sum=0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function uppercaseFirstandLast(str) {
  if (typeof str !== "string" || str.length <= 1) {
    return false;
  }

  return str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();
}

app.get("/findSummation", (req, res) => {
  const num = req.query.num;
  const result = findSummation(num);
  res.send({ result });
});

function findAverageAndMedian(arr) {
  if (!Array.isArray(arr) || arr.length <= 0) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let average = sum / arr.length;
  let sortedArr = arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);

  if (arr.length % 2 === 0) {
    return {
      average: average,
      median: (sortedArr[mid - 1] + sortedArr[mid]) / 2
      };
  } else {
    return {
      average: average,
      median: sortedArr[mid]  
    };
  }
}

app.get("/findAverageAndMedian", (req, res) => {
  const arr = req.query.arr;
  const result = findAverageAndMedian(arr);
  res.send({ result });
});

function find4Digits(input) {
  const numbers = input.split(' ');
  for (let num of numbers) {
    if (/^\d{4}$/.test(num)) {
      return num;
    }
  }
  return false;
}

app.get("/find4Digits", (req, res) => {
  const input = req.query.input;
  const result = find4Digits(input);
  res.send({ result });
});


app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});

