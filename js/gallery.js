// Get the modal
var modal = document.getElementById('commentModal');
var modalImageTitle = document.getElementById('modal-image-title');
var commentForm = document.getElementById('commentForm');

// Get all images in the gallery
var images = document.querySelectorAll('.gallery-image');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on an image, open the modal and set the title
images.forEach(function(image) {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImageTitle.textContent = this.getAttribute('data-title');
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
};

// When the user submits a comment
commentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var comment = document.getElementById('comment').value;
    alert('Komentar za ' + modalImageTitle.textContent + ': ' + comment);
    modal.style.display = 'none';  // Close modal after submission
});

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
