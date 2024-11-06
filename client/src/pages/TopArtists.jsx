import React, { useEffect, useState } from "react";
import { getTopArtists } from "../spotify";
import { catchErrors } from "../utils";

const TopArtists = () => {
    const [topArtists, setTopArtists] = useState(null);
    const [activeRange, setActiveRange] = useState('short');

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getTopArtists(`${activeRange}_term`);
            setTopArtists(data);
            console.log(data)
        };

        catchErrors(fetchData());
    }, [activeRange]);
}

export default TopArtists;