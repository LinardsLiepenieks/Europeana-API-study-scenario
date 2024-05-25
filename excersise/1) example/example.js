//This is an example code for the first part of the exercise - the teachers example
//In this case we are using openWeatherMaps API, and finding current weather based on the city
//I have added more detailed description on how to approach this topic in the comments below
//link to the api https://openweathermap.org/api/one-call-3
//ALL OF THE RESULTS IN THIS EXAMPLE IS GOING TO BE DISPLAYED ONLY IN THE CONSOLE IN YOUR BROWSERS DEV TOOLS

//1. Start by jumping off the previous exercise and asking "What should the computer know?"
//in this case it needs to know which user will be accessing the information and where will the weather
//information be collected from
const appid = "3f930b0b0b70a648a6e7c7e71bad0cca"; //put your api key here
let city = "Riga";

//2. explain about query parameters and the best practice on how to add the variables
//I suggest first creating the api link with hard coded variables and adding template literals afterwards
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;
let data = [];

//3. Explain that this is a GET request (you should have covered concept of a request by now)
fetch(apiUrl)
	.then((response) => {
		//4. explain that "then" keyword is waiting until server answers
		console.log("This is the inital response", response);
		return response.json(); //5. briefly explain that json function parses the response into a human readable object
	})
	.then((response) => {
		console.log("Parsed response", response); //6. show and discuss actual response data and how it's saved to variable
		data = response;
		return data;
	})
	.catch((error) => {
		//7. for a best practice example add catch clause
		console.log("My error: ", error);
	});

//8. DO NOT SKIP
//Showcase how data is not fetched here because even though this line comes after
//the fetching of the code visually the data is not there yet, as code has progressed
//but data is still waiting on the server
//THIS IS THE MOST DIFFICULT PART FOR THE STUDENTS
console.log("There is no data, because server hasn't answered yet", data);
