import React, { useEffect, useState } from "react";
import { getRecentlyPlayed } from "../spotify";
import { catchErrors } from "../utils";
import { Loader, Main, TrackItem } from "../components";

const RecentlyPlayed = () => {
    const [recentlyPlayed, setRecentlyPlayed] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getRecentlyPlayed();
            setRecentlyPlayed(data);
        };
        catchErrors(fetchData());
    }, []);

    return (
        <Main>
            <h2 className="m-0 text-center">Recently Played Tracks</h2>
            <ul className="mt-[50px]">
                {recentlyPlayed ? (
                    recentlyPlayed.items.map(({ track }, index) => 
                        <TrackItem track={track} key={index} />
                    )
                ) : (
                    <Loader />
                )}
            </ul>
        </Main>
    )
}

export default RecentlyPlayed;