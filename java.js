const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const galleryImages = document.querySelectorAll('.gallery-image');
const closeLightbox = document.querySelector('.close-lightbox');

// Show the lightbox when an image is clicked
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightbox.classList.remove('hidden');
  });
});

// Hide the lightbox when the close button is clicked
closeLightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

// Navigate between images with the left and right arrow keys
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    const currentImage = document.querySelector('.current-image');
    const prevImage = currentImage.previousElementSibling;

    if (prevImage) {
      currentImage.classList.remove('current-image');
      prevImage.classList.add('current-image');
      lightboxImage.src = prevImage.src;
    }
  } else if (event.key === 'ArrowRight') {
    const currentImage = document.querySelector('.current-image');
    const nextImage = currentImage.nextElementSibling;

    if (nextImage) {
      currentImage.classList.remove('current-image');
      nextImage.classList.add('current-image');
      lightboxImage.src = nextImage.src;
    }
  }
});