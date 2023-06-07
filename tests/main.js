const axios = require('axios');

async function sendBreakRequst(url) {
  await axios.get(url);
}

async function sendRequest(url) {
  
  const startTime = new Date().getTime();
  const token = {
    name: "test",
    symbol: "TTT",
    decimals: 100,
    supply: 10,
    txHash: "82838cc9162dceb5209b47bcd3ac20d5905364c32d9144cdf8290d435be40c8a"
  }
  const { name, symbol, decimals, supply, txHash } = token;
  await axios.post(url, {
    name,
    symbol,
    decimals,
    supply,
    txHash,
  });
  const endTime = new Date().getTime();
  const duration = endTime - startTime;
  return duration;
}

async function sendMultipleRequests(url, count) {
  const durations = [];

  for (let i = 0; i < count; i++) {
    const duration = await sendRequest(url);
    console.log(`Request ${i + 1}: duration: ${duration}`);
    durations.push(duration);
  }

  return durations;
}

function calculateAverageExecutionTime(durations) {
  const sum = durations.reduce((acc, curr) => acc + curr, 0);
  return sum / durations.length;
}

// Example usage
const endpointUrl = 'http://192.168.49.2/token';
const requestCount = 100;
const breakUrl = 'http://192.168.49.2/token/break'

// sendMultipleRequests(endpointUrl, requestCount)
//   .then(durations => {
//     const averageExecutionTime = calculateAverageExecutionTime(durations);
//     console.log(`Average execution time: ${averageExecutionTime} milliseconds`);
//   })
//   .catch(error => {
//     console.error('Error occurred while sending requests:', error);
//   });

sendBreakRequst(breakUrl);

sendMultipleRequests(endpointUrl, requestCount)
  .then(durations => {
    const averageExecutionTime = calculateAverageExecutionTime(durations);
    console.log(`Average execution time: ${averageExecutionTime} milliseconds`);
  })
  .catch(error => {
    console.error('Error occurred while sending requests:', error);
  });