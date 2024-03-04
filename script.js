function search() {

var zoekQuery = document.getElementById('searchInput').value.trim();

if (zoekQuery !== '') {

window.location.href = '/reserveren.html?q=' + encodeURIComponent(zoekQuery);

} else {

alert('Voer een zoekterm in!');

}

if (zoekQuery !== '') {

if (zoekQuery === 'reserveren') {

window.location.href = '/reserveren.html?q=' + encodeURIComponent(zoekQuery);

} else if (zoekQuery === 'betaling') {

window.location.href = '/betaling.html?q=' + encodeURIComponent(zoekQuery);

} else if (zoekQuery === 'la-sarthe-travel') {

 window.location.href = '/la-sarthe-travel.html?q=' + encodeURIComponent(zoekQuery);

 } else if (zoekQuery === 'Michelin') {

window.location.href = '/Michelin.html?q=' + encodeURIComponent(zoekQuery);

} else {

alert('Geen overeenkomsten gevonden');

}

} else {

alert('Voer een zoekterm in!');

}

}

document.addEventListener('DOMContentLoaded', function() {

document.getElementById('searchInput').value = '';

document.getElementById('searchForm').addEventListener('submit', function(event) {

search();

event.preventDefault();

});

});