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
    };
    catchErrors(fetchData());
  }, [artistId]);

  return (
    <Main>
      {artist ? (
        <>
          <div className="flex flex-col items-center">
            <img
              src={artist.images?.[0]?.url}
              alt={artist.name}
              className="w-64 h-64 rounded-lg object-cover mb-4"
            />
            <h1 className="text-3xl font-bold">{artist.name}</h1>
            <p className="text-gray-400">{artist.type}</p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <div className="bg-[#282828] rounded-lg p-4 flex flex-col items-center w-full md:w-48 shadow-md">
              <p className="text-[#1ed760] text-2xl font-bold">
                {artist.followers.total.toLocaleString()}
              </p>
              <p className="text-white text-sm mt-1">Followers</p>
            </div>
            <div className="bg-[#282828] p-4 rounded-lg flex flex-col items-center w-full md:w-48 shadow-md">
              <p className="text-[#1ed760] text-2xl font-bold">
                {artist.popularity}
              </p>
              <p className="text-white text-sm mt-1">0-100 popularity</p>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Main>
  );
};

export default ArtistPage;
