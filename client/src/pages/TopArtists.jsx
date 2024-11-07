import React, { useEffect, useState } from "react";
import { getTopArtists } from "../spotify";
import { catchErrors } from "../utils";
import { Main } from "../components";
import { Link } from "react-router-dom";

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

    return (
        <Main>
            <header className="block md:flex md:justify-between md:items-center">
                <h2 className="m-0 text-center">Top Artists</h2>
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
            <div className="mt-[50px] grid gap-[20px] grid-cols-[repeat(auto-fit,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                {topArtists ? (
                    topArtists.items.map(({ id, external_urls, images, name }, index) => (
                        <div key={index}
                        className="flex flex-col items-center text-center"
                        >
                            <Link 
                            to={`/artist/${id}`}
                            className="inline-block relative h-[120px] w-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
                            >
                                {images.length && <img
                                className="rounded-full object-cover h-[120px] w-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
                                 src={images[1].url} alt="Artist" />}
                            </Link>
                            <Link to={`/artist/${id}`}
                            className="my-[20px] border-b border-transparent hover:border-white focus:border-white"
                            >
                                {name}
                            </Link>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </Main>
    )
}

export default TopArtists;