
    const langEl = document.querySelector('.langWrap');
    const links = document.querySelectorAll('a');
    const strongEl = document.querySelector('.strong');
    const inleidingEls = document.querySelectorAll('.inleiding');

    
    

    const data = {
        "english": {
        
            strong: "Introduction",
            inleiding: [
                "Welcome to La Sarthe Travel!",
                "Are you ready for the ultimate racing experience? At La Sarthe Travel, we organize an exciting 24-hour race event where you can enjoy non-stop action on the circuit all day long. Whether you're a passionate motorsport enthusiast or just looking for a unique day out, our event has something for everyone.",
                "On our website, you can easily reserve your camping spot for this unforgettable event. Choose from our VIP or standard options, depending on your preference and budget. Our goal is to provide you with a user-friendly platform where you can quickly and easily book your spot, allowing you to focus on planning your perfect day at the race.",
                "Whether you come alone, with friends, or with the whole family, La Sarthe Travel guarantees a great experience you won't soon forget. Come and immerse yourself in the excitement of the racing world at La Sarthe Travel!"
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

    

