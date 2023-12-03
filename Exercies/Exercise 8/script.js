document.addEventListener('DOMContentLoaded', function () {
    const apiUrl = 'https://api.artic.edu/api/v1/artworks';



    function fetchArtworks() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => displayArtworks(data.data))
            .catch(error => console.error('Fetching artworks error:', error));
    }



    function displayArtworks(artworks) {
        const artworksContainer = document.getElementById('artworks-box');

        artworks.forEach(artwork => {

            const title = document.createElement('h2');
            title.textContent = artwork.title;

            const artworkDiv = document.createElement('div');
            artworkDiv.classList.add('artwork');

            const imageUrl = artwork.image_id
                ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/300,/0/default.jpg`
                : 'placeholder.jpg';
    
                const artist = document.createElement('p');
                artist.textContent = `artist: ${artwork.artist_display || 'Unknown'}`;

                const description = document.createElement('p');
                description.textContent = artwork.description || 'No description.';
    
                const year = document.createElement('p');
                year.textContent = `year: ${artwork.date_display || 'Unknown'}`;

                const image = document.createElement('img');
                image.src = imageUrl;
                image.alt = artwork.title;
    
                artworkDiv.appendChild(title);
                artworkDiv.appendChild(image);
                artworkDiv.appendChild(artist);
                artworkDiv.appendChild(year);


            artworksContainer.appendChild(artworkDiv);
        });
    }fetchArtworks();
});
