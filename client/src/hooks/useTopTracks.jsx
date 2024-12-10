import { useEffect, useState } from "react";
import { getTopTracks } from "../spotify";
import { catchErrors } from "../utils";

const useTopTracks = () => {
    const [topTracks, settopTracks] = useState(null);
    const [activeRange, setActiveRange] = useState('short');

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getTopTracks(`${activeRange}_term`);
            settopTracks(data);
        };
        catchErrors(fetchData());
    }, [activeRange]);

    return { topTracks, activeRange, setActiveRange };
}

export default useTopTracks;