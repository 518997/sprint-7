
    const langEl = document.querySelector('.langWrap');
    const links = document.querySelectorAll('a');
    const strongEl = document.querySelector('.strong');
    const inleidingEls = document.querySelectorAll('.inleiding');

    
    

    const data = {
        "english": {
        
            strong:  "Introduction",
            inleiding: [
                "Welcome to La Sarthe Travel!",
                "Are you ready for the ultimate racing experience? At La Sarthe Travel, we organize an exciting 24-hour race event where you can enjoy non-stop action on the circuit all day long. Whether you're a passionate motorsport enthusiast or just looking for a unique day out, our event has something for everyone.",
                "On our website, you can easily reserve your camping spot for this unforgettable event. Choose from our VIP or standard options, depending on your preference and budget. Our goal is to provide you with a user-friendly platform where you can quickly and easily book your spot, allowing you to focus on planning your perfect day at the race.",
                "Whether you come alone, with friends, or with the whole family, La Sarthe Travel guarantees a great experience you won't soon forget. Come and immerse yourself in the excitement of the racing world at La Sarthe Travel!",
                "We are currently working on designing a website for Triple Crown, a travel company that is expanding this year into an exciting new travel offering - travel to the 24 Hours of Le Mans, presented as 'La Sarthe Travel'. These special travel packages are offered at the Beauséjour campsite. At this campsite, travelers can choose between two types of accommodation:pre-set tents and camper pitches with power supply..",
                "this is an extraordinary car race that takes place annually in June at the Circuit de la Sarthe in Le Mans. The circuit takes its name from the nearby river, the Sarthe. Here's something interesting: unlike many other tracks, this race is run 'clockwise', meaning the cars take the turns to the right.  The aim of this race is to complete as many laps as possible in a 24-hour period. It is one of the oldest and largest car races in the world and is considered one of the most prestigious alongside other famous races such as the Formula 1 Monaco Grand Prix and the Indy 500 (Indianapolis 500).",
                "The new travel options to the 24 Hours of Le Mans are an exciting addition to Triple Crown's offering and we look forward to creating an accessible and informative website to share these unforgettable experiences with potential travellers.",
            
            ]   
        }
    };

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            const attr = link.getAttribute('language');
            strongEl.textContent = data[attr].strong;

            inleidingEls.forEach((inleidingEl, index) => {
                inleidingEl.textContent = data[attr].inleiding[index];
            });
        });
    });

    

