//This should be the result of the classroom exercise
//This code utilizes the Europeana API - you can get the API here: https://pro.europeana.eu/pages/get-api
//Documentation: https://pro.europeana.eu/page/apis
//This example will showcase Europeana serach API although students should be able to pick which one they want
//ALL OF THE RESULTS IN THIS EXAMPLE IS GOING TO BE DISPLAYED ONLY IN THE CONSOLE IN YOUR BROWSERS DEV TOOLS

// 1. Student should have registered and recieved the api key

// 2. Student should create his own variables
// These variables are based on Europeana search API: https://pro.europeana.eu/page/search
const wskey = ""; //put your api key here
let query = "Cars";
let theme = "industrial";
let rows = 10;

// 3. student should have updated the url
const apiUrl = `https://api.europeana.eu/record/v2/search.json?query=${query}&wskey=${wskey}&theme=${theme}&rows=${rows}`;
let data = [];

//4. student should have copied this code from the previous example
//The results for me took around 5 to 10 seconds to appear
fetch(apiUrl)
	.then((response) => {
		console.log("This is the inital response", response);
		return response.json();
	})
	.then((response) => {
		console.log("Parsed response", response);
		data = response;
		return data;
	})
	.catch((error) => {
		console.log("My error: ", error);
	});
