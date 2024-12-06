import { useEffect, useState } from "react";
import { getTrack } from "../spotify";
import { catchErrors } from "../utils";

const useTracks = (trackId) => {
    const [track, setTrack] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getTrack(trackId);
            setTrack(data);
        };
        catchErrors(fetchData());
    }, [trackId]);

    return { track };
}

export default useTracks;