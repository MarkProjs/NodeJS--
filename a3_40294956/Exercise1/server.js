const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// Enable CORS for all routes (optional, useful for testing with different ports)
app.use(cors());

// Serve static files from the 'a3_40294956/Exercise 1' directory (change the path if necessary)
app.use(express.static('public'));

// Parse incoming form data
app.use(express.urlencoded({ extended: false }));

// Sum function
function findSummation(num = 1) {
  if (typeof num !== "number" || num <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// API route for summation
app.get("/findSummation", (req, res) => {
  const num = parseInt(req.query.num);
  if (isNaN(num)) {
    return res.status(400).json({ error: "Invalid number input" });
  }
  const result = findSummation(num);
  res.json({ result });
});

// Uppercase first and last function
function uppercaseFirstandLast(str) {
  if (typeof str !== "string" || str.length <= 1) {
    return false;
  }
  return str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();
}

app.get("/uppercaseFirstandLast", (req, res) => {
  const str = req.query.str;
  const result = uppercaseFirstandLast(str);
  res.json({ result });
});

// Average and median function
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
  res.json({ result });
});

// Find 4-digit number function
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
  res.json({ result });
});

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server running on http://127.0.0.1:3000");
});
