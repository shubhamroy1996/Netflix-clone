import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect( () => {
        //if [], run once when the row loads, and dont run it again
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }

        fetchData();
    }, [fetchUrl]);
    return (
        <div class="row">
            <h2>{title}</h2>
            <div className="row_posters">
            {/* row_posters */}
            {movies.map((movie) => (
                <img 
                key={movie.id}
                className="row_poster"
                src={`${base_url}${movie.poster_path}`} 
                    alt={movie.name} />
            ))}
            </div>

        </div>
    );
}
export default Row
