import React, { useEffect, useState } from "react";
import { getRecentlyPlayed } from "../spotify";
import { catchErrors } from "../utils";
import { Main } from "../components";

const RecentlyPlayed = () => {
    const [recentlyPlayed, setRecentlyPlayed] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getRecentlyPlayed();
            setRecentlyPlayed(data);
            console.log(data)
        };
        catchErrors(fetchData());
    }, []);

    return (
        <Main>
            <h2>Recently Played Tracks</h2>
        </Main>
    )
}

export default RecentlyPlayed;