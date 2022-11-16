(function() {  //IIFE start

"use strict"
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//Changed render coffee from tables to divs
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//Changed the forLoop to go in ascending order instead
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//added an all feature for searching
function updateCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        //Added the select all option
        if(selectedRoast === "all"){
            filteredCoffees.push(coffee);
        }
        else if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//added a search feature that works based on upkey
function searchCoffees(e) {
    e.preventDefault();
    var searchedValue = searchSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(searchedValue.toLowerCase())) {
            filteredCoffees.push(coffee);
            console.log(searchedValue)
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// created addACoffee feature that add new object to the array
function addACoffee(e){
    e.preventDefault();
    var newCoffee = {};
    newCoffee.name = document.getElementById('name-added').value;
    newCoffee.roast = document.getElementById('roast-added').value;
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(coffees);
}

//added a newBrewButton as well as a search selection
var tbody = document.querySelector('#coffees');
var newBrewButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchSelection = document.querySelector('#searchBar')


tbody.innerHTML = renderCoffees(coffees);


//changed types as well as created new event listeners.
roastSelection.addEventListener('change', updateCoffees);
searchSelection.addEventListener('keyup', searchCoffees);
newBrewButton.addEventListener('click',addACoffee)




})(); //IIFE end