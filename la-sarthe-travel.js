// functies met JavaScript //
   
    function getLandInformatie(land) { 
     
        if (land === '24h Le Mans') {
            return '<h2>24h Le Mans</h2><p>24h Le Mans <br>AA - TERTRE ROUGE<br>Located inside the circuit enclosure, with a view on the Goodyear Footbridge and the Esses of Tertre Rouge, this wooded camping area is accessible to cars + tent/caravan or camper vans.   Recommended if you wish to access grandstands Panorama (4), Goodyear (5), the Village and entertainment area (concert and fun fair).<br>   From Le Mans, Alençon, Rennes or Paris, you need to follow the ROUGE itinerary when arriving in the circuit surroundings.<br>Details:<br>  - Open non-stop from Friday, 7th June 9.00 am to Monday, 17thJune noon.<br> - Price per vehicle for a 35m² non-numbered pitch (1 ticket = 1 vehicle = 35m²).<br>  - Sanitary facilities (showers and toilets). No electricity supply.<br>  - Pedestrian general admission is not included, you must hold one to access the campsite. </p></p>';
       
     }
    }

    // Voeg een eventlistener toe aan het 'DOMContentLoaded'-event
document.addEventListener('DOMContentLoaded', function() {
    // Voeg een klikgebeurtenis toe aan de afbeelding
    var afbeelding = document.getElementById('test123');
    afbeelding.addEventListener('click', function() {
        console.log('De afbeelding is geklikt!');
    });

    // Voeg een klikgebeurtenis toe aan elementen met de id '.kaart'
    document.getElementById('kaart').addEventListener('click', function(event) {
        if (event.target.classList.contains('land')) {
            console.log('Het geklikte element is een land');
            var landNaam = event.target.alt;
            console.log('De naam van het land is: ' + landNaam);
            var landInformatie = getLandInformatie(landNaam);
            document.getElementById('land-informatie').innerHTML = landInformatie;
        } else {
            console.log('Het geklikte element is geen land');
        }
    });
});

