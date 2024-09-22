document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    const filterButtons = document.querySelectorAll('.filter button');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = button.getAttribute('data-filter');
            images.forEach(img => {
                if (filter === 'all' || img.classList.contains(filter)) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

    images.forEach(img => {
        img.addEventListener('click', function() {
            img.classList.toggle('large');
            console.log('Clicked:', img.src);
        });
    });
});
