document.addEventListener("DOMContentLoaded", () => {
  // Summation
  document.getElementById("sumForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const num = document.getElementById("sumInput").value;
    try {
      // Fetch the result for summation
      const res = await fetch(`/findSummation?num=${num}`);
      const data = await res.json();
      document.getElementById("sumResult").textContent = `Result: ${data.result}`;
    } catch (err) {
      console.error("Error:", err);
      document.getElementById("sumResult").textContent = "Error: " + err.message;
    }
  });

  // Uppercase First and Last
  document.getElementById("upperForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const str = document.getElementById("upperInput").value;
    try {
      const res = await fetch(`/uppercaseFirstandLast?str=${str}`);
      const data = await res.json();
      document.getElementById("upperResult").textContent = `Result: ${data.result}`;
    } catch (err) {
      console.error("Error:", err);
      document.getElementById("upperResult").textContent = "Error: " + err.message;
    }
  });

  // Average and Median
  document.getElementById("avgForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const raw = document.getElementById("avgInput").value;
    const arr = raw.split(',').map(n => n.trim()).filter(n => n).map(Number);
    const query = arr.map(n => `arr=${n}`).join('&'); // arr=1&arr=2&arr=3...
    try {
      const res = await fetch(`/findAverageAndMedian?${query}`);
      const data = await res.json();
      document.getElementById("avgResult").textContent = `Average: ${data.result.average}, Median: ${data.result.median}`;
    } catch (err) {
      console.error("Error:", err);
      document.getElementById("avgResult").textContent = "Error: " + err.message;
    }
  });

  // Find 4-Digit Number
  document.getElementById("digitForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("digitInput").value;
    try {
      const res = await fetch(`/find4Digits?input=${encodeURIComponent(input)}`);
      const data = await res.json();
      document.getElementById("digitResult").textContent = `4-Digit Found: ${data.result}`;
    } catch (err) {
      console.error("Error:", err);
      document.getElementById("digitResult").textContent = "Error: " + err.message;
    }
  });
});
