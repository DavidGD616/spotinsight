import React from "react";
import { useParams } from "react-router-dom";
import { Main } from "../components";
import { useArtist, useArtistAlbums } from "../hooks";

const ArtistPage = () => {
  const { artistId } = useParams();
  const { artist } = useArtist(artistId);
  const { albums } = useArtistAlbums(artistId);
  console.log(albums)

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
          {/* Albums Section */}
          <div className="mt-8">
  <h2 className="text-2xl font-bold mb-4">Albums</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {albums.map((album) => (
      <div key={album.id} className="text-center">
        <img
          src={album.images?.[0]?.url}
          alt={album.name}
          className="w-full h-25 object-cover rounded-lg"
        />
        <p className="text-white text-sm mt-2 font-bold">{album.name}</p>
        <p className="text-gray-400 text-xs">
          {new Date(album.release_date).toISOString().split("T")[0]}
        </p>
      </div>
    ))}
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
