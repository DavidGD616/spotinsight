import React from "react";
import { useParams } from "react-router-dom";
import { useTracks } from "../hooks";
import { Loader, Main } from "../components";
import { formatDuration } from "../utils";

const TrackPage = () => {
  const { trackId } = useParams();
  const { track } = useTracks(trackId);
  return (
    <Main>
      {track ? (
        <>
          <div className="flex flex-col items-center">
            <img
              src={track.album?.images?.[0].url}
              alt={track.name}
              className="w-64 h-64 rounded-lg object-cover mb-4"
            />
            <h1 className="text-3xl font-bold">{track.name}</h1>
            <p className="text-gray-400">{track.album?.artists?.[0].name}</p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-[#282828] rounded-lg p-4 flex flex-col items-center w-full md:w-48 shadow-md">
              <p className="text-[#1ed760] text-2xl font-bold">
                {formatDuration(track.duration_ms)}
              </p>
              <p className="text-white text-sm mt-1">Track length</p>
            </div>
            <div className="bg-[#282828] p-4 rounded-lg flex flex-col items-center w-full md:w-48 shadow-md">
              <p className="text-[#1ed760] text-2xl font-bold">
                {track.popularity}
              </p>
              <p className="text-white text-sm mt-1">0-100 popularity</p>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </Main>
  );
};

export default TrackPage;