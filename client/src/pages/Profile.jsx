import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Main, User } from "../components";
import { getTopArtists, getTopTracks } from "../spotify";
import { catchErrors } from "../utils";
import TrackItem from "../components/TrackItem";

const Preview = ({ children }) => (
  <section className="block mt-[70px] md:grid md:grid-cols-2 md:gap-[70px] md:mt-[100px] w-full">
    {children}
  </section>
);

const Tracklist = ({ children }) => (
  <div className="last:mt-[50px] md:last:mt-0">{children}</div>
);

const TracklistHeading = ({ children }) => (
  <div className="flex justify-between items-center mb-[40px]">{children}</div>
);

const Mask = ({ children }) => (
    <div className="flex justify-center items-center absolute w-full h-full bg-[rgba(0,0,0,0.5)] top-0 bottom-0 left-0 right-0 text-white opacity-0 transition-all">
      {children}
    </div>
  );
  
  const Artist = ({ children }) => (
    <li className="flex items-center mb-[16px] md:mb-[20px] hover:[&>*]:opacity-100 focus:[&>*]:opacity-100">
      {children}
    </li>
  );

const Profile = (profile) => {
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userTopArtists = await getTopArtists();
            setTopArtists(userTopArtists.data);
            console.log(userTopArtists.data)

            const userTopTracks = await getTopTracks();
            setTopTracks(userTopTracks.data);
            console.log(userTopTracks.data)
        }

        catchErrors(fetchData());
    }, [])
  return (
    <>
      {profile ? (
        <Main>
          <User />
          <Preview>
            <Tracklist>
              <TracklistHeading>
                <h3 className="inline-block m-0">Top artists this month</h3>
                <Link
                  to="/artists"
                  className="inline-block text-white font-bold text-[12px] tracking-[1px] uppercase border border-white rounded-[50px] px-[24px] py-[11px] cursor-pointer transition-all text-center whitespace-nowrap hover:bg-white hover:text-black focus:bg-white focus:text-black"
                >
                  See More
                </Link>
              </TracklistHeading>
              <div>
                {topArtists ? (
                    <ul>
                        {topArtists.items.slice(0, 10).map((artist, index) => (
                            <Artist key={index}>
                                <Link
                                className="inline-block relative w-[50px] min-w-[50px] mr-[20px]"
                                >
                                    {artist.images.length && 
                                    <img 
                                    className="w-[50px] min-w-[50px] h-[50px] rounded-full"
                                    src={artist.images[2].url} alt="Artist" />}
                                </Link>
                                <Link className="flex-grow" to={`/artist/${artist.id}`}>
                                    <span className="border-b border-transparent hover:border-white focus:border-white">{artist.name}</span>
                                </Link>
                            </Artist>
                        ))}
                    </ul>
                ) : (
                    <div>Loading...</div>
                )}
              </div>
            </Tracklist>

            <Tracklist>
                <TracklistHeading>
                  <h3 className="inline-block m-0">Top tracks this month</h3>
                  <Link
                  to="/tracks"
                  className="inline-block text-white font-bold text-[12px] tracking-[1px] uppercase border border-white rounded-[50px] px-[24px] py-[11px] cursor-pointer transition-all text-center whitespace-nowrap hover:bg-white hover:text-black focus:bg-white focus:text-black"
                >
                  See More
                </Link>
                </TracklistHeading>
                <ul>
                  {topTracks ? (
                    topTracks.items
                    .slice(0, 10)
                    .map((track, index) => <TrackItem track={track} key={index} />)
                  ) : (
                    <div>Loading...</div>
                  )}
                </ul>
            </Tracklist>
          </Preview>
        </Main>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Profile;
