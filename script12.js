document.addEventListener('DOMContentLoaded', () => {
    fetchImages('landscape'); // Fetch default images when the page loads
});

function uploadImage() {
    const imageInput = document.getElementById('imageInput');
    const hashtagInput = document.getElementById('hashtagInput');

    // Fetch images based on user input
    const userKeyword = hashtagInput.value.trim();
    if (userKeyword !== '') {
        fetchImages(userKeyword);
    } else {
        alert("Please enter a keyword to search for images.");
    }

    if (imageInput.files.length > 0) {
        const reader = new FileReader();

        reader.onload = function (e) {
            addImageToGallery(e.target.result, hashtagInput.value, generateRandomCaption());
        };

        reader.readAsDataURL(imageInput.files[0]);
        hashtagInput.value = ''; // Clear the input after uploading
    } else {
        alert("Please select an image to upload.");
    }
}

function addImageToGallery(src, alt, caption) {
    const gallery = document.getElementById('imageGallery');
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    const container = document.createElement('div');
    container.className = 'image-container';

    const likeButton = document.createElement('button');
    likeButton.className = 'button like-button';
    likeButton.innerHTML = '&#9825;';
    likeButton.onclick = function () {
        this.classList.toggle('liked');
        this.innerHTML = this.classList.contains('liked') ? '&#9829;' : '&#9825;';
    };

    const pinButton = document.createElement('button');
    pinButton.className = 'button pin-button';
    pinButton.innerHTML = '&#128204;';
    pinButton.style.color = 'white'; // Start as white
    pinButton.onclick = function () {
        this.classList.toggle('pinned');
        if (this.classList.contains('pinned')) {
            this.style.color = 'red'; // Change to red when pinned
            alert('Added to your library');
        } else {
            this.style.color = 'white'; // Change back to white when unpinned
        }
    };

    const captionDiv = document.createElement('div');
    captionDiv.className = 'caption';
    captionDiv.textContent = caption;

    container.appendChild(img);
    container.appendChild(captionDiv);
    container.appendChild(likeButton);
    container.appendChild(pinButton);
    gallery.appendChild(container);
}

function generateRandomCaption() {
    const captions = [
        "Beauty in simplicity",
        "A moment of serenity",
        "Nature's wonders",
        "Lost in the landscape",
        "Escape into the wilderness",
        "Sunset vibes",
        "Early morning calm",
        "Reflections on the water",
        "Under the open sky",
        "Exploring the unseen"
    ];
    return captions[Math.floor(Math.random() * captions.length)];
}

function fetchImages(keyword) {
    const count = 10;
    const apiKey = "vKe-5I2Wx0CFW_xOxXYnUeLQtoD0vhwdTanaRb9Y8BM";
    const apiUrl = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${apiKey}&per_page=${count}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('imageGallery');
            gallery.innerHTML = ''; // Clear the gallery before adding new images
            data.results.forEach(photo => {
                addImageToGallery(photo.urls.small, photo.alt_description, generateRandomCaption());
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}
