import React from "react";
import { Link } from "react-router-dom";
import { useTopArtists, useTopGenres } from "../hooks";
import { Loader, Main } from "../components";

const Genres = () => {
  const { topArtists, activeRange, setActiveRange } = useTopArtists();
  const topGenres = useTopGenres(topArtists);

  return (
    <Main>
      <header className="block md:flex md:justify-between md:items-center">
        <h2 className="m-0 text-center">Top Genres</h2>
      </header>
      <div className="flex justify-around mt-[30px] md:mr-[-11px] pb-8">
        <button
          className={`bg-transparent font-medium text-[14px] p-[10px] ${
            activeRange === "short" ? "text-white" : "text-[#b3b3b3]"
          }`}
          onClick={() => setActiveRange("short")}
        >
          <span
            className={`pb-[2px] leading-[1.5] whitespace-nowrap border-b
                            ${
                              activeRange === "short"
                                ? "border-white"
                                : "border-transparent"
                            }`}
          >
            Last 4 weeks
          </span>
        </button>
        <button
          className={`bg-transparent font-medium text-[14px] p-[10px] ${
            activeRange === "medium" ? "text-white" : "text-[#b3b3b3]"
          }`}
          onClick={() => setActiveRange("medium")}
        >
          <span
            className={`pb-[2px] leading-[1.5] whitespace-nowrap border-b
                            ${
                              activeRange === "medium"
                                ? "border-white"
                                : "border-transparent"
                            }`}
          >
            Last 6 months
          </span>
        </button>
        <button
          className={`bg-transparent font-medium text-[14px] p-[10px] ${
            activeRange === "long" ? "text-white" : "text-[#b3b3b3]"
          }`}
          onClick={() => setActiveRange("long")}
        >
          <span
            className={`pb-[2px] leading-[1.5] whitespace-nowrap border-b
                            ${
                              activeRange === "long"
                                ? "border-white"
                                : "border-transparent"
                            }`}
          >
            All time
          </span>
        </button>
      </div>
      <ul>
        {topGenres.length > 0 ? (
          topGenres.slice(0, 25).map(([genre, artists], index) => (
            <li key={index}>
              <Link
                className="grid grid-cols-[auto_1fr] items-center mb-[20px] md:mb-[20px]"
                to={`/genre/${genre.toLowerCase().replace(/\s+/g, "-")}`}
                state={{ genre, artists }}
              >
                <div>
                  <div className="relative w-16 h-16 mr-[16px]">
                    {/* First Image */}
                    {artists[0]?.images?.[0]?.url ? (
                      <img
                        src={artists[0].images[0].url}
                        alt={artists[0].name}
                        className="absolute top-0 left-0 w-8 h-8 rounded-tl-lg"
                      />
                    ) : (
                      <div className="absolute top-0 left-0 w-8 h-8 rounded-tl-lg bg-gray-900"></div>
                    )}
                    {/* Second Image */}
                    {artists[1]?.images?.[0]?.url ? (
                      <img
                        src={artists[1].images[0].url}
                        alt={artists[1].name}
                        className="absolute top-0 right-0 w-8 h-8 rounded-tr-lg"
                      />
                    ) : (
                      <div className="absolute top-0 right-0 w-8 h-8 rounded-tr-lg bg-gray-900"></div>
                    )}
                    {/* Third Image */}
                    {artists[2]?.images?.[0]?.url ? (
                      <img
                        src={artists[2].images[0].url}
                        alt={artists[2].name}
                        className="absolute bottom-0 left-0 w-8 h-8 rounded-bl-lg"
                      />
                    ) : (
                      <div className="absolute bottom-0 left-0 w-8 h-8 rounded-bl-lg bg-gray-900"></div>
                    )}
                    {/* Fourth Image */}
                    {artists[3]?.images?.[0]?.url ? (
                      <img
                        src={artists[3].images[0].url}
                        alt={artists[3].name}
                        className="absolute bottom-0 right-0 w-8 h-8 rounded-br-lg"
                      />
                    ) : (
                      <div className="absolute bottom-0 right-0 w-8 h-8 rounded-br-lg bg-gray-900"></div>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_max-content] gap-[10px]">
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap pr-[1px]">
                    {genre && (
                      <span className="mb-[5px] border-b border-transparent hover:border-white focus:border-white">
                        {genre.charAt(0).toUpperCase() + genre.slice(1)}
                      </span>
                    )}
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap pr-[1px] text-[#9B9B9B] text-[14px] mt-[3px]">
                      {artists
                        .slice(0, 3)
                        .map((artist) => artist.name)
                        .join(", ")}
                      {artists.length > 3 && " ..."}
                    </div>
                  </span>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <Loader />
        )}
      </ul>
    </Main>
  );
};

export default Genres;
