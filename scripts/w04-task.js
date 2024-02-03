/* LESSON 3 - Programming Tasks */

/* Profile Object */

/* Populate Profile Object with placesLive objects */
let myProfile = {
    name: "Evaristus Ochieng",
    photo: {
        src: "images/evaristus.jpeg",
        alt: "My Profile Picture"
    },
    favoriteFoods: [
        'Sushi',
        'Pizza',
        'Chocolate',
        'Ice Cream',
        'Biryani'
    ],
    hobbies: [
        'Reading',
        'Coding',
        'Hiking',
        'Photography',
        'Gaming'
    ],
    placesLived: []
};

/* Add places to the placesLived array */
myProfile.placesLived.push(
    {
        place: 'Nairobi, Kenya',
        length: '20 years'
    },
    {
        place: 'Toronto, Canada',
        length: '2 years'
    },
    {
        place: 'New York, NY',
        length: '3 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = `My name is ${myProfile.name}`;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;

    let dd = document.createElement('dd');
    dd.textContent = place.length;

    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

/* Set the year in the footer */
document.getElementById("year").innerHTML = new Date().getFullYear();
