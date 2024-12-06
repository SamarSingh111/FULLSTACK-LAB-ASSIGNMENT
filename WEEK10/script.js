document.getElementById('fetchButton').addEventListener('click', fetchData);

function fetchData() {
    simulateAPICall((error, data) => {
        if (error) {
            console.error('Error fetching data:', error);
            displayData('Error fetching data. Please try again later.');
        } else {
            console.log('Data fetched successfully:', data);
            displayData(`Name: ${data.name}, Age: ${data.age}`);
        }
    });
}

function simulateAPICall(callback) {
    // Simulate a network request with a timeout
    setTimeout(() => {
        // Simulating success response
        const success = true; // Change to false to simulate an error
        if (success) {
            const userData = { name: 'John Doe', age: 30 };
            callback(null, userData);
        } else {
            callback('API call failed', null);
        }
    }, 2000);
}

function displayData(message) {
    document.getElementById('userData').innerText = message;
}

// Example with Promise
function fetchDataWithPromise() {
    simulateAPICallWithPromise()
        .then(data => {
            console.log('Data fetched successfully with Promise:', data);
            displayData(`Name: ${data.name}, Age: ${data.age}`);
        })
        .catch(error => {
            console.error('Error fetching data with Promise:', error);
            displayData('Error fetching data. Please try again later.');
        });
}

function simulateAPICallWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Change to false to simulate an error
            if (success) {
                const userData = { name: 'John Doe', age: 30 };
                resolve(userData);
            } else {
                reject('API call failed');
            }
        }, 2000);
    });
}
