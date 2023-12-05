$(document).ready(function () {
    // Dummy waterfall images
    const waterfallImages = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more images as needed
    ];

    // Display images in the gallery
    const imageGallery = $('#image-gallery');
    waterfallImages.forEach(image => {
        const imgElement = `<img src="images/${image}" alt="Waterfall">`;
        imageGallery.append(imgElement);
    });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // You can add logic to handle the form submission here, e.g., sending an email or saving to a database.

    alert("Thank you for your message! I'll get back to you soon.");
});

