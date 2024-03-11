document.addEventListener('DOMContentLoaded', function() {

const searchBox = document.getElementById('searchBox');

const searchInput = document.getElementById('searchInput');

const searchButton = document.getElementById('searchButton');

let isExpanded = false;

searchButton.addEventListener('click', function() {

if (!isExpanded) {

expandSearchBox();

} else {

collapseSearchBox();

}

});

searchBox.addEventListener('submit', function(event) {

event.preventDefault();

search();

});

searchInput.addEventListener('keypress', function(event) {

if (event.key === 'Enter') {

event.preventDefault();

search();

}

});

function expandSearchBox() {

searchBox.style.width = '200px';

searchInput.style.width = '160px';

isExpanded = true;

}

function collapseSearchBox() {

searchBox.style.width = '50px';

searchInput.style.width = '0';

isExpanded = false;

}

function search() {

var zoekQuery = searchInput.value.trim().toLowerCase();

if (zoekQuery !== '') {

if (zoekQuery === 'home') {

window.location.href = '/Index.html?q=' + encodeURIComponent(zoekQuery);

} else if (zoekQuery === 'reserveren') {

window.location.href = '/reserveren.html?q=' + encodeURIComponent(zoekQuery);

} else if (zoekQuery === 'la-sarthe-travel') {

window.location.href = '/la-sarthe-travel.html?q=' + encodeURIComponent(zoekQuery);

} else if (zoekQuery === 'michelin') {

window.location.href = '/Michelin.html?q=' + encodeURIComponent(zoekQuery);

} else {

alert('Geen overeenkomsten gevonden');

}

} else {

alert('Voer een zoekterm in!');

}

}

});