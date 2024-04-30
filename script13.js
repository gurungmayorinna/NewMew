document.addEventListener('DOMContentLoaded', () => {
    // Fetch default images for the "Pinned Images" tab from Unsplash
    fetchImages('pinned', 'Pinned');

    // Load local images for "Uploaded Images"
    loadLocalImages();
});

function openTab(evt, tabName) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function loadLocalImages() {
    const images = [
        'img1.jpeg',
        'nn.png',
        'n2.png' // Add more image paths as needed
    ];
    const gallery = document.getElementById('Uploaded');
    gallery.innerHTML = ''; // Clear the gallery before adding new images
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Uploaded Image';
        img.style.width = '50%'; // Ensure images fit well in the tab
        gallery.appendChild(img);
    });
}

function fetchImages(keyword, tabName) {
    const count = 10;
    const apiKey = "vKe-5I2Wx0CFW_xOxXYnUeLQtoD0vhwdTanaRb9Y8BM";
    const apiUrl = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${apiKey}&per_page=${count}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById(tabName);
            gallery.innerHTML = ''; // Clear the gallery before adding new images
            data.results.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.small;
                img.alt = photo.alt_description;
                img.style.width = '100%'; // Ensure images fit well in the tab
                gallery.appendChild(img);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}
