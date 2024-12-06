const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API Key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function searchMovies() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                displayMovies(data.results);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    } else {
        alert('Please enter a movie name');
    }
}

function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const moviePoster = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : 'placeholder.jpg';
        
        movieElement.innerHTML = `
            <img src="${moviePoster}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Rating: ${movie.vote_average}/10</p>
        `;

        movieList.appendChild(movieElement);
    });
}
