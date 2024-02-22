document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("image");
    var images = [
        "ray1.jpeg", "ray2.jpeg", "ray3.jpeg", "ra4.jpeg", "ray5.jpeg", "ray6.jpeg", "ray7.jpeg", "ray8.jpeg", "ray9.jpeg", "ray10.jpeg", "ray11.webp"
];

    window.generate = function() {
        var i = Math.floor(Math.random() * images.length);
        var imgElement = document.createElement('img'); // Create a new img element
        imgElement.src = images[i]; // Set the src attribute to the randomly selected image URL
        imgElement.alt = 'Ray Image'; // Optional: set alt attribute for accessibility
        image.innerHTML = ''; // Clear any existing content in the span
        image.appendChild(imgElement); // Append the img element to the span

    }
});