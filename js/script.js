
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('large');
            console.log('Clicked:', img.src);  // Dodano za debug
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Spriječava ponovno učitavanje stranice

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Ime:', name);
    console.log('Email:', email);
    console.log('Poruka:', message);

    // Ovdje bi se mogla dodati logika za slanje podataka na server
    alert('Hvala što ste nas kontaktirali, ' + name + '!');
});

