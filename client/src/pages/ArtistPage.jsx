import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtist } from "../spotify";
import { catchErrors } from "../utils";
import { Main } from "../components";

const ArtistPage = () => {
    const { artistId } = useParams();
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getArtist(artistId);
            setArtist(data);
            console.log(data)
        };
        catchErrors(fetchData());
    },[artistId]);

    return (
        <Main></Main>
    )
}

export default ArtistPage;