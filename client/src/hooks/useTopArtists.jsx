import { useEffect, useState } from "react";
import { getTopArtists } from "../spotify";
import { catchErrors } from "../utils";

const useTopArtists = () => {
    const [topArtists, setTopArtists] = useState(null);
    const [activeRange, setActiveRange] = useState('short');

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getTopArtists(`${activeRange}_term`);
            setTopArtists(data);
        };

        catchErrors(fetchData());
    }, [activeRange]);

    return { topArtists, activeRange, setActiveRange };
}

export default useTopArtists;