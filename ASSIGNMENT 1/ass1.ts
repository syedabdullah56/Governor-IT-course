// Q1
// DONE

// Q2:
let a="Syed Abdullah";
console.log(`Hello ${a}`);

// Q3
// to uppercase:
console.log(a.toUpperCase());
// to lowercase:
console.log(a.toLowerCase());
// to titlecase:
let titlecase = a.replace(/\w\S*/g, function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
});
console.log(titlecase);

// Q4:
console.log('Shahrukh Khan always said;"You dont have any competition,you are not here to compete,you are here to rule"');

// Q5:
let famous_person="Shahrukh Khan";
let message='"You dont have any competition,you are not here to compete,you are here to rule"'
console.log(`${famous_person} always said;${message}`)

// Q6:
let personNameWithWhitespace = "\t \n Syed Abdullah \n \t";
// Print the name with whitespace
console.log(personNameWithWhitespace);
// Strip whitespace from the name
let strippedName = personNameWithWhitespace.trim();
// Print the stripped name
console.log(strippedName);

// Q7 and Q8:
console.log(5+3);
console.log(11-3);
console.log(2*4);
console.log(24/3);

// Q9:
let favoriteNumber = 14;
// Create a message revealing the favorite number
let message1 = `My favorite number is ${favoriteNumber} because it is my birth date.`;
// Print the message
console.log(message1);

// Q10:
// Syed Abdullah wrote this program on 16/feb/2024:
let personNameWithWhitespace_1 = "\t \n Syed Usman \n \t";
// Print the name with whitespace
console.log(personNameWithWhitespace_1);
// Strip whitespace from the name
let strippedName_1 = personNameWithWhitespace_1.trim();
// Print the stripped name
console.log(strippedName_1);

// Q11:
// Array of friends' names
let names = ["Zohaib", "Aaliyan", "Ashar", "Badar", "Zain"];
// Print each person's name one at a time
for (let i = 0; i < names.length; i++) {
    console.log("Friend", i + 1, ":", names[i]);
}

// Q12:
// Print personalized greetings to each person
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}! Have a great day!`);
}

// Q13:
// Array of favorite modes of transportation
let favoriteTransportation = ["Lamborghini", "Porsche", "Kawasaki X2R", "Honda CG 125"];
// Print statements about each item
for (let i = 0; i < favoriteTransportation.length; i++) {
    console.log(`I would like to own a ${favoriteTransportation[i]}.`);
}

// Q14:
// Array of guests to invite to dinner
let guestList = ["Zohaib", "Aaliyan","Ashar"];
// Print personalized dinner invitations
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},\nYou are cordially invited to join me for dinner. It would be an honor to have your company.`);
}

// Q15:
// Array of guests to invite to dinner
let guestList_1 = ["Zohaib", "Aaliyan","Ashar"];
// replacing Ashar with zain
guestList_1[2]="Zain"
// Print personalized dinner invitations
for (let i = 0; i < guestList_1.length; i++) {
    console.log(`Dear ${guestList_1[i]},\nYou are cordially invited to join me for dinner. It would be an honor to have your company.`);
}

// Q16:
guestList_1.splice(1,0,"Saad");
guestList_1.splice(3,0,"Rahim");
guestList_1.splice(5,0,"Huzaifa");
for (let i = 0; i < guestList_1.length; i++) {
    console.log(`Dear ${guestList_1[i]},\nYou are cordially invited to join me for dinner. It would be an honor to have your company.`);
}
console.log(guestList_1);

// Q17:
guestList_1.splice(1,1);
guestList_1.splice(1,1);
guestList_1.splice(1,1);
guestList_1.splice(1,1);
for (let i = 0; i < guestList_1.length; i++) {
    console.log(`Dear ${guestList_1[i]},\nYou are cordially invited to join me for dinner. It would be an honor to have your company.`);
}
guestList_1.splice(0,1);
guestList_1.splice(0,1);
console.log(guestList_1);

// Q18:
// Array of places to visit
let travelDestinations = ["Tokyo", "Paris", "Saudia Arabia", "Maldives", "India"];
// Print original order
console.log("Original Order:", travelDestinations);
// Print in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...travelDestinations].sort());
// Check that the original order is still intact
console.log("Original Order (unchanged):", travelDestinations);
// Print in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...travelDestinations].sort().reverse());
// Check that the original order is still intact
console.log("Original Order (unchanged):", travelDestinations);
// Reverse the order of the list
travelDestinations.reverse();
// Print to show the reversed order
console.log("Reversed Order:", travelDestinations);
// Reverse the order again to restore the original order
travelDestinations.reverse();
// Print to show it's back to the original order
console.log("Back to Original Order:", travelDestinations);
// Sort the array in alphabetical order
travelDestinations.sort();
// Print to show the sorted order
console.log("Sorted in Alphabetical Order:", travelDestinations);
// Sort to change the array to reverse alphabetical order
travelDestinations.sort((a, b) => b.localeCompare(a));
// Print to show the order has changed to reverse alphabetical
console.log("Sorted in Reverse Alphabetical Order:", travelDestinations);

// Q19:
console.log(`I am inviting ${guestList_1.length} in dinner`);

// Q20:
// Array of programming languages
let programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift", "TypeScript"];
// Print the array
console.log("Programming Languages:", programmingLanguages);

// Q21:
// Array of books (TypeScript objects)
let books = [
    {
        title: "Think and Grow Rich",
        author: "Napolean Hill"
    },
    {
        title: "How to win friends and influence people",
        author: "Dale Carnegie"
    },
    {
        title: "THE 48 laws of power",
        author: "Robert Greene"
    },
    {
        title: "Atomic Habits",
        author: "James Clear"
    }
];
// Print the array of books
console.log("Books:", books);

// Q22:
// Array of programming languages
let programmingLanguages_1 = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift", "TypeScript"];
// Intentional error: Accessing an index that is out of bounds
// Let's try to access an index that doesn't exist (e.g., index 10)
let errorExample = programmingLanguages_1[10];
// Correcting the error: Let's access a valid index (e.g., index 3)
let correctExample = programmingLanguages_1[3];
// Print the results
console.log("Intentional Error Example:", errorExample); // This will result in undefined
console.log("Corrected Example:", correctExample); // This will print the correct value

// Q23:
let number = 7;
let string = 'Hello';
let boolean = true;
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
let object1 = { key: 'value' };
let object2 = { key: 'value' };
// Test 1
console.log("Is number == 7? I predict True.");
console.log(number == 7);
// Test 2
console.log("Is string === 'Hello'? I predict True.");
console.log(string === 'Hello');
// Test 3
console.log("Is boolean != false? I predict True.");
console.log(boolean != false);
// Test 4
console.log("Is array1.length >= 3? I predict True.");
console.log(array1.length >= 3);
// Test 5
console.log("Is array1 and array2 equal? I predict True.");
console.log(array1 === array2); // Note: This will be False due to reference comparison
// Test 6
console.log("Is object1 and object2 equal? I predict False.");
console.log(object1 === object2); // Note: This will be False due to reference comparison
// Test 7
console.log("Is object1.key == 'value'? I predict True.");
console.log(object1.key == 'value');
// Test 8
console.log("Is number > 10? I predict False.");
console.log(number > 10);
// Test 9
console.log("Is boolean === 1? I predict False.");
console.log(boolean === 1);
// Test 10
console.log("Is array1[0] === '1'? I predict False.");
console.log(array1[0] === '1');

// Q25:
let alien_color = 'green';
// If statement to test whether the alien's color is green
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
let alien_color_1 = 'red';
// If statement to test whether the alien's color is green
if (alien_color_1 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Q26:
let alien_color_2 = 'green';
// If-else chain to determine points based on alien's color
if (alien_color_2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

// Q27:
let alien_color_3 = 'green';
// If-else chain to determine points based on alien's color
if (alien_color_3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color_3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color_3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
} else {
    console.log("Invalid alien color!"); // Handle other colors or invalid cases
}
let alien_color_4 = 'yellow';
// If-else chain to determine points based on alien's color
if (alien_color_4 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color_4 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color_4 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
} else {
    console.log("Invalid alien color!"); // Handle other colors or invalid cases
}
let alien_color_5 = 'red';
// If-else chain to determine points based on alien's color
if (alien_color_5 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color_5 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color_5 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
} else {
    console.log("Invalid alien color!"); // Handle other colors or invalid cases
}

// Q28:
let age = 25; // Set the age value
// If-else chain to determine the person's stage of life
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// Q29:
let favoriteFruits = ["apple", "banana", "strawberry", "kiwi", "mango"];
// Independent if statements checking for certain fruits
if (favoriteFruits.includes("apple")) {
    console.log("I love apples!");
}
if (favoriteFruits.includes("banana")) {
    console.log("Bananas are delicious too!");
}
if (favoriteFruits.includes("orange")) {
    console.log("Oranges are refreshing!");
} else {
    console.log("No oranges in my favorite fruits list.");
}
if (favoriteFruits.includes("kiwi")) {
    console.log("Kiwi is one of my favorites!");
}
if (favoriteFruits.includes("grape")) {
    console.log("I enjoy grapes!");
} else {
    console.log("No grapes in my favorite fruits list.");
}

// Q30:
let usernames = ["admin", "Eric", "Alice", "Bob", "Charlie"];
// Loop through the array and print greetings
for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];
    if (username.toLowerCase() === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

// Q32:
// Make a list of current users
let current_users = ["Alice", "Bob", "Charlie", "David", "Eva"];
// Make a list of new users
let new_users = ["David", "Frank", "Grace", "Bob", "Helen"];
// Loop through new_users to check for unique usernames
for (let i = 0; i < new_users.length; i++) {
    let new_username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (current_users.includes(new_username)) {
        console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username '${new_users[i]}' is available.`);
    }
}

// Q33:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}

// Q34:
// Array of favorite pizza names
let favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Print the name of each pizza using a for loop
console.log("Favorite Pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Modify the for loop to print a sentence using the name of each pizza
console.log("\nFavorite Pizza Statements:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} pizza.`);
}
// Add a line outside the for loop expressing love for pizza
console.log("\nI really love pizza!");

// Q35:
// Array of animals with a common characteristic
let animals = ["Dog", "Cat", "Rabbit"];
// Print the name of each animal using a for loop
console.log("Animals:");
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
// Modify the for loop to print a statement about each animal
console.log("\nAnimal Statements:");
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
// Add a line stating what these animals have in common
console.log("\nAny of these animals would make a great pet!");

// Q36:
function make_shirt(size, message) {
    console.log(`T-shirt Summary: Size ${size}, Message: "${message}"`);
}
// Call the function with specific size and message
make_shirt('Medium', 'I love coding!');

// Q37:
function make_shirt(size = 'Large', message = 'I love TypeScript') {
    console.log(`T-shirt Summary: Size ${size}, Message: "${message}"`);
}
// Make a large shirt with the default message
make_shirt();
// Make a medium shirt with the default message
make_shirt('Medium');
// Make a shirt of any size with a different message
make_shirt('Small', 'Custom message for a small shirt');

// Q38:
function describe_city(city, country = 'Default Country') {
    console.log(`${city} is in ${country}.`);
}
// Call the function for three different cities
describe_city('Karachi', 'Pakistan'); // Specifying both city and country
describe_city('New York'); // Using the default country
describe_city('Tokyo', 'Japan'); // Specifying both city and country

// Q39:
function city_country(city, country) {
    return `${city}, ${country}`;
}
// Call the function with three different city-country pairs
let location1 = city_country('Lahore', 'Pakistan');
let location2 = city_country('Paris', 'France');
let location3 = city_country('Tokyo', 'Japan');
// Print the values returned by the function
console.log(location1);
console.log(location2);
console.log(location3);

// Q41:
function show_magicians(magician_names) {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}
// Make an array of magician's names
let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the function to show the names of magicians
show_magicians(magicians);

// I DONT KNOW NOW HOW TO SOLVE THESE FEW REMAINING QUESTIONS:























