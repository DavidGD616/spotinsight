import React, { useEffect, useState } from "react";
import { getTopArtists, getGenres } from "../spotify";
import { catchErrors } from "../utils";

const Genres = () => {
    const [genresSeed, setGenresSeed] = useState([]);
    const [topGenres, setTopGenres] = useState([]);
    const [topArtists, setTopArtists] = useState(null);
    const [activeRange, setActiveRange] = useState('short');

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getGenres();
            setGenresSeed(data);
            console.log(data)
            console.log(data.genres.length)
        }

        catchErrors(fetchData())
    }, [activeRange]);
}

export default Genres;