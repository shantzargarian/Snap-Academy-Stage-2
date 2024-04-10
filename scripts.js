let carData = [
    {
        title: "CarChives Car Group",
        imageUrl: "images/4Cars.jpg",
        videoId: "7240638788169370923",
        coordinates: { lat: 34.4344907, lng: -118.56198293046876 }
    },
    {
        title: "Porsche 911 S/T",
        imageUrl: "images/911ST.jpg",
        videoId: "7324117687192292638",
        coordinates: { lat: 34.10785480386952, lng: -118.25617381240207 }
    },
    {
        title: "Porsche GT4",
        imageUrl: "images/GT4.jpg",
        videoId: "7339651796702448926", 
        coordinates: { lat: 34.109513, lng: -118.788448 }
    },
    {
        title: "Vorsteiner E46 M3", 
        imageUrl: "images/VorsteinerE46.jpg",
        videoId: "7339620446746299679",
        coordinates: { lat: 34.058947, lng: -118.806641 }
    },
    {
        title: "Ferrari 488 Pista",
        imageUrl: "images/488pista.jpg",
        videoId: "7238325766117788970",
        coordinates: { lat: 34.10785480386952, lng: -118.25617381240207 }
    },
    {
        title: "370z and M235i",
        imageUrl: "images/370x235.jpg",
        videoId: "7235801943417900330",
        coordinates: { lat: 34.052351, lng: -118.251854 }
    },
    {
        title: "Porsche GT3's",
        imageUrl: "images/blackGT3s.jpg",
        videoId: "7324082865635904799",
        coordinates: { lat: 34.10785480386952, lng: -118.25617381240207 }
    },
    {
        title: "RWB Porsche 911",
        imageUrl: "images/rwb911.jpg",
        videoId: "7196392086466350382",
        coordinates: { lat: 34.417439, lng: -118.548375 }
    },
    {
    title: "Ferrari & Lamborghini", 
        imageUrl: "images/lamboRari.jpg", 
        videoId: "7191182826660695342",
        coordinates: { lat: 34.202436, lng: -118.191935 }
    },
    {
        title: "Ford Focus RS",
        imageUrl: "images/focusRS.jpg",
        videoId: "7221393744103361835",
        coordinates: { lat: 34.206625, lng: -118.217529 }
    },
    {
        title: "iND G87 M2",
        imageUrl: "images/indM2.jpg",
        videoId: "7275383527506578719",
        coordinates: { lat: 34.262007, lng: -118.112905 } 
    },
    {
        title: "370z",
        imageUrl: "images/370z.jpg",
        videoId: "7317032072961412383",
        coordinates: { lat: 34.096030, lng:-118.409429 }
    }
];

document.addEventListener("DOMContentLoaded", function() {
    showCards();

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    function filterCards() {
        const inputText = searchInput.value.toUpperCase();
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const title = card.querySelector("h2").textContent.toUpperCase();
            if (title.indexOf(inputText) > -1) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }

    searchButton.addEventListener("click", filterCards);

    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            filterCards();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const toggleViewButton = document.getElementById('toggleViewButton');
    const cardContainer = document.getElementById('card-container');

    toggleViewButton.addEventListener('click', function() {
        cardContainer.classList.toggle('list-view');

        if (cardContainer.classList.contains('list-view')) {
            toggleViewButton.textContent = 'Grid View';
        } else {
            toggleViewButton.textContent = 'List View';
        }
    });
});

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    carData.forEach(car => {
        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, car.title, car.imageUrl, car.videoId, car.coordinates, car.description); // Pass the description here
        cardContainer.appendChild(nextCard);
    });
}

function editCardContent(card, newTitle, newImageURL, videoID, mapCoords) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = `${newTitle} Poster`;

    const viewVideoButton = card.querySelector(".button-style.tiktok");
    viewVideoButton.onclick = () => toggleTikTokEmbed(videoID);

    const viewMapButton = card.querySelector(".button-style.map");
    viewMapButton.onclick = () => toggleGoogleMapsEmbed(mapCoords.lat, mapCoords.lng);
}

document.addEventListener("DOMContentLoaded", showCards);

function toggleTikTokEmbed(videoID) {
    const videoModal = document.getElementById('videoModal');
    const tiktokVideoFrame = document.getElementById('tiktokVideoFrame');

    if (videoModal.style.display !== "block" && videoID) {
        tiktokVideoFrame.src = `https://www.tiktok.com/embed/v2/${videoID}?lang=en-US`;
        videoModal.style.display = 'block';
    } else {
        videoModal.style.display = 'none';
        tiktokVideoFrame.src = '';
    }
}

function toggleGoogleMapsEmbed(lat, lng) {
    const mapsModal = document.getElementById('mapModal');
    const mapDisplayFrame = document.getElementById('googleMapsFrame');

    if (mapsModal.style.display === "none" && lat && lng) {
        mapDisplayFrame.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCqRJzyUarVDlXrHa_m7Naq8jaM7pt6mm8
            &q=${encodeURIComponent(lat + ',' + lng)}&zoom=14`;
        mapsModal.style.display = "block";
    } else {
        mapsModal.style.display = 'none';
        mapDisplayFrame.src = '';
    }
}

function closeTiktokModal() {
    const videoModal = document.getElementById('videoModal');
    const tiktokVideoFrame = document.getElementById('tiktokVideoFrame');

    videoModal.style.display = 'none';
    tiktokVideoFrame.src = '';
}

function closeMapModal() {
    const mapsModal = document.getElementById('mapModal');
    const mapDisplayFrame = document.getElementById('googleMapsFrame');

    mapsModal.style.display = 'none';
    mapDisplayFrame.src = '';
}