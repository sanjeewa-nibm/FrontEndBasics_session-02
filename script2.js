// const operationOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false; // Simulating a successful operation
//     if (success) {
//       resolve("Operation One completed successfully");
//     } else {
//       reject("Operation One failed");
//     }
//   }, 2000);
// });
// console.log("Operation has started");

// console.log("Operation One initialized", operationOne); // Main Thread: Task 01

// operationOne.then(message => {
//     console.log(message); // Operation is successful!
// }).catch(error => {
//     console.error(error); // Operation is failed!
// }).finally(() => {
//     console.log("Promise is completed!"); // Final
// });

async function fetchData() {
  try {
    // Use await to wait for the Promise to resolve
    let response = await operationOne; // Wait for the operationOne Promise to resolve
    console.log("Data Fetched successfully:", response);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Fetching data completed.");
  }
}

// Call the async function
// fetchData();

// console.log("data fetching operation has started:");


// async function fetchHost() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//         if (!response.ok) {
//             throw new Error(`Network response was not ok. Status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log("Data fetched successfully:", data);
//     }
//     catch (error) {
//         console.error("Error fetching data:", error);
//     }
//     finally {
//         console.log("Fetching data completed.");
//     }
// }

 function fetchHost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(post => console.log("data fetched successfully:", post))
        .catch(error => console.error("Error fetching data:", error))
        .finally(() => console.log("Fetching data completed."));
}

fetchHost();
