const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});


// Get modal elements
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const closeBtn2 = document.getElementById('close-modal');

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-img');

// Add click event to each image
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;  // Set the modal image to the clicked image's src
    modal.style.display = 'flex';  // Show the modal
  });
});

// Close modal when clicking the close button
closeBtn2.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the image (on the overlay)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {  // Only if clicked on the overlay, not the image
    modal.style.display = 'none';
  }
});




// Get modal elements
const modal2 = document.getElementById('image-modal');
const modalImage2 = document.getElementById('modal-image');
const closeBtn3 = document.getElementById('close-modal');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Get all gallery images
const galleryImages2 = document.querySelectorAll('.gallery-img');
let currentIndex = 0; // Track the current image index

// Function to open modal with specific image
function openModal(index) {
  currentIndex = index;
  modalImage2.src = galleryImages2[currentIndex].src;
  modal2.style.display = 'flex';
}

// Add click event to each image
galleryImages2.forEach((img, index) => {
  img.addEventListener('click', () => {
    openModal(index);
  });
});

// Close modal when clicking the close button
closeBtn3.addEventListener('click', () => {
  modal2.style.display = 'none';
});

// Close modal when clicking outside the image (on the overlay)
modal2.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal2.style.display = 'none';
  }
});

// Navigate to previous image
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages2.length) % galleryImages2.length; // Loop to last if at first
  modalImage2.src = galleryImages2[currentIndex].src;
});

// Navigate to next image
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages2.length; // Loop to first if at last
  modalImage2.src = galleryImages2[currentIndex].src;
});