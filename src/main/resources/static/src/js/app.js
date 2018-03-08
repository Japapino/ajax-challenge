//Create new content for the sidebar that refreshes on a button 
const $asideContent = $('asideContent')
const button = document.querySelector('.contaner aside .refresh')
const refreshButton = () => {
	$asideContetn.load('../sidebar.html')
}

button.addEventListener('click', refreshButton); 

//use the SW api to create html elements out of character info and add it to the main element
var xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function () {
	if (this.readyState ==4 && this.status == 200) {
		const res = JSON.parse(xhr.responseText);
		document.querySelector('main').innerHTML = "<p>" + res.name + "</p>";
	}
};
xhr.open("GET", "https://swapi.co/api/people/1/", true); 
xhr.send(); 

//create a new css sheet with new style rules and update elements on the page 10s after the page loads

//find another public api to get data from and use it to add content to your page

//use an event listener on some element of your page to request new data from some location when the user interacts with the element in some way. 