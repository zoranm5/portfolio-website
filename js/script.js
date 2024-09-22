console.log('JavaScript radi');
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('large');
            console.log('Clicked:', img.src);  // Dodano za debug
        });
    });
});
