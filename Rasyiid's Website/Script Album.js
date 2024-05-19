const albums = [
    {
        title: "Happiness",
        year: "2024",
        cover: "Music Artwork/Happiness.jpg",
        alt: "Album 6"
    },
    {
        title: "Stars",
        year: "2024",
        cover: "Music Artwork/Stars.jpg",
        alt: "Album 5"
    },
    {
        title: "Celebrating Victory",
        year: "2023",
        cover: "Music Artwork/Celebrating Victory.jpg",
        alt: "Album 4"
    },
    {
        title: "Note",
        year: "2023",
        cover: "Music Artwork/Note.jpg",
        alt: "Album 3"
    },
    {
        title: "Bersama Gapai Mimpi (Remastered)",
        year: "2023",
        cover: "Music Artwork/Bersama Gapai Mimpi.jpg",
        alt: "Album 2"
    },
    {
        title: "Bersama Gapai Mimpi",
        year: "2022",
        cover: "Music Artwork/Bersama Gapai Mimpi 1.jpg",
        alt: "Album 1"
    }
];

function renderAlbums() {
    const albumContainer = document.getElementById('album-container');
    albumContainer.innerHTML = 'index.html';  // Clear any existing content

    albums.forEach(album => {
        const albumDiv = document.createElement('div');
        albumDiv.classList.add('album');

        albumDiv.innerHTML = `
            <img src="${album.cover}" alt="${album.alt}" class="album-cover">
            <div class="album-details">
                <h4 class="album-title">${album.title}</h4>
                <p class="album-year">${album.year}</p>
            </div>
        `;

        albumContainer.appendChild(albumDiv);
    });
}

// Call the function to render albums when the page loads
document.addEventListener('DOMContentLoaded', renderAlbums);
