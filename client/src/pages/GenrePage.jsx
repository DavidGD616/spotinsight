import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Main } from "../components";

const GenrePage = () => {
    const location = useLocation();
    const { genre, artists } = location.state || {};
  
    if (!genre || !artists) {
      return <p>No data available for this genre.</p>;
    }
  
    return (
      <Main>
        <header className="block md:flex md:justify-between md:items-center">
          <h2 className="m-0 text-center">
            {genre.charAt(0).toUpperCase() + genre.slice(1)}
          </h2>
        </header>
        <ul className="mt-[50px]">
          {artists.map((artist, index) => (
            <li key={index}>
              <Link className="grid grid-cols-[auto_1fr] items-center mb-[20px] md:mb-[20px]">
                <div>
                  <div className="relative mr-[16px]">
                    <img
                      src={artist.images[0].url}
                      alt={artist.name}
                      className="rounded-full h-16 w-16 object-cover"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_max-content] gap-[10px]">
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap pr-[1px]">
                    {artist.name}
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap pr-[1px] text-[#9B9B9B] text-[14px] mt-[3px]">
                        {artist.genres.map((genre, index) => (
                        <span
                            key={index}
                            className="bg-gray-700 text-gray-300 text-xs font-medium py-1 px-2 rounded-full shadow-sm mr-2"
                        >
                            {genre}
                        </span>
                        ))}
                    </div>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Main>
    );
  };

export default GenrePage;
