import React, { useEffect, useState } from "react";
import { getTopTracks } from "../spotify";
import { catchErrors } from "../utils";
import { Main, TrackItem } from "../components";

const TopTracks = () => {
    const [topTracks, settopTracks] = useState(null);
    const [activeRange, setActiveRange] = useState('short');

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getTopTracks(`${activeRange}_term`);
            settopTracks(data);
            console.log(data)
        };
        catchErrors(fetchData());
    }, [activeRange]);

    return (
        <Main>
            <header className="block md:flex md:justify-between md:items-center">
                <h2 className="m-0 text-center">Top Tracks</h2>
                <div className="flex justify-around mt-[30px] md:mr-[-11px]">
                <button
                    className={`bg-transparent font-medium text-[14px] p-[10px] ${
                        activeRange === 'short' ? 'text-white' : 'text-[#b3b3b3]'
                    }`}
                    onClick={() => setActiveRange('short')}
                    >
                        <span
                        className={`pb-[2px] leading-[1.5] whitespace-nowrap border-b
                            ${activeRange === 'short' ? 'border-white' : 'border-transparent'}`}
                        >Last 4 weeks</span> 
                    </button>
                    <button
                    className={`bg-transparent font-medium text-[14px] p-[10px] ${
                        activeRange === 'medium' ? 'text-white' : 'text-[#b3b3b3]'
                    }`}
                    onClick={() => setActiveRange('medium')}
                    >
                        <span
                        className={`pb-[2px] leading-[1.5] whitespace-nowrap border-b
                            ${activeRange === 'medium' ? 'border-white' : 'border-transparent'}`}
                        >Last 6 months</span> 
                    </button>
                    <button
                    className={`bg-transparent font-medium text-[14px] p-[10px] ${
                        activeRange === 'long' ? 'text-white' : 'text-[#b3b3b3]'
                    }`}
                    onClick={() => setActiveRange('long')}
                    >
                        <span
                        className={`pb-[2px] leading-[1.5] whitespace-nowrap border-b
                            ${activeRange === 'long' ? 'border-white' : 'border-transparent'}`}
                        >All time</span> 
                    </button>
                </div>
            </header>
            <ul className="mt-[50px]">
                {topTracks ? (
                    topTracks.items.map((track, index) =>
                        <TrackItem track={track} key={index} />
                    )
                ) : (
                    <div>Loading...</div>
                )}
            </ul>
        </Main>
    )
}

export default TopTracks;