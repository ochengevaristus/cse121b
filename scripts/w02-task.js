/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
       
const fullName = "Evaristus Ochieng";
const currentYear = new Date().getFullYear();//"2024"
const profilePicture ="images/evaristus.jpeg";



/* Step 3 - Element Variables */

const foodElement = document.querySelector('#food');
const yearElement = document.querySelector("#year");
const imageElement= document.querySelector('img');


/* Step 4 - Adding Content */
yearElement.textContent = currentYear
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `This is ${fullName}. A student at BYU Idaho`);


/* Step 5 - Array */
let favFoods= ["Pizza","Ice Cream","Tacos","Sushi","Pasta","Burgers","Steak","Chicken","Salad","Fruit"]
foodElement.innerHTML= favFoods;
let newFood = "chocolate";
favFoods.push(newFood);
foodElement.innerHTML += `<br> ${favFoods}`;




