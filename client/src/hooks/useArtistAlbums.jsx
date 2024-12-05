import { useEffect, useState } from "react";
import { getArtistAlbum } from "../spotify";
import { catchErrors } from "../utils";

const useArtistAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getArtistAlbum(artistId);
            setAlbums(data.items);
        };

        catchErrors(fetchData());
    }, [artistId]);

    return { albums };
}

export default useArtistAlbums;