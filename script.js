// Lightbox functionality
const images = [
    'sertifikat1.jpg',
    'sertifikat2.jpg',
    'sertifikat3.jpg',
    'sertifikat4.jpg',
    'portfolio1.jpg',
    'portfolio2.jpg',
    'portfolio3.jpg',
    'portfolio4.jpg'
];

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'block';
    lightboxImg.src = images[index];
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
