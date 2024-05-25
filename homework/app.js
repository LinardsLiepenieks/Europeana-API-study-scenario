// Get form and input elements
const myForm = document.getElementById("myForm");
const queryInput = document.getElementById("query");
const themeInput = document.getElementById("theme");
const rowInput = document.getElementById("rows");
const resultsList = document.getElementById("resultsList");

// Initialize variables
let wskey = ""; // API key variable
let data = []; // Variable to store fetched data

// Function to handle form submission
function handleSubmit(event) {
	event.preventDefault(); // Prevent default form submission behavior

	// Get input values
	let query = queryInput.value;
	let theme = themeInput.value;
	let rows = rowInput.value;

	// Construct API URL
	const apiUrl = `https://api.europeana.eu/record/v2/search.json?query=${query}&wskey=${wskey}&theme=${theme}&rows=${rows}`;

	// Fetch data from API
	fetch(apiUrl)
		.then((response) => {
			console.log("This is the initial response", response);
			return response.json(); // Parse response as JSON
		})
		.then((response) => {
			console.log("Parsed response", response);

			// Clear previous results
			resultsList.innerHTML = "";

			// Store fetched data
			data = response;

			// Iterate over each item in the data
			data.items.forEach((item) => {
				// Create elements for each result item
				const resultItem = document.createElement("li");
				const resultName = document.createElement("h3");
				const resultLink = document.createElement("a");

				// Set content and attributes
				resultName.textContent = item.title[0];
				resultLink.textContent = "Go to resource";
				resultLink.href = item.guid;

				// Append elements to result item
				resultItem.appendChild(resultName);
				resultItem.appendChild(resultLink);

				// Add class to result item
				resultItem.classList.add("result-item");

				// Append result item to results list
				resultsList.appendChild(resultItem);
			});

			return data;
		})
		.catch((error) => {
			console.log("My error: ", error);
		});
}

// Add event listener to form for submission
myForm.addEventListener("submit", handleSubmit);

/*THE FOLLOWING CODE IS ONLY FOR PUBLIC TESTING PURPOSES AND SHOULD BE EXCLUDED FROM THE LESSON*/
function handleAPIKeyInput() {
	// Get the API key input element and its value
	const apiKeyInput = document.getElementById("apiInput");
	wskey = apiKeyInput.value;

	// Remove the API key input group from the DOM
	const apiInputGroup = document.getElementById("apiInputGroup");
	apiInputGroup.remove();

	// Optionally, you can perform further actions after saving the API key, such as initiating other processes or making API requests
}

// Add event listener to the submit key button to trigger the handleAPIKeyInput function
document
	.getElementById("submitKey")
	.addEventListener("click", handleAPIKeyInput);
