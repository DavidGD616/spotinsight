import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser, getFollowing, logout, getPlaylists } from "../spotify";
import { catchErrors } from "../utils";

// Tailwind Components **********************************************
const UserName = ({ children }) => (
  <a className="hover:text-[#1ed760] focus:text-[#1ed760]">{children}</a>
);

const Avatar = ({ children }) => (
  <div className="w-[150px] h-[150px]">{children}</div>
);

const Name = ({ children }) => (
  <h1 className="text-[8vw] sm:text-[50px] font-bold mt-5">{children}</h1>
);

const Stats = ({ children }) => (
  <div className="grid grid-cols-3 gap-[30px] mt-4">{children}</div>
);

const Stat = ({ children }) => <div className="text-center">{children}</div>;

const Number = ({ children }) => (
  <div className="text-[#1DB954] font-bold text-md">{children}</div>
);

const NumLabel = ({ children }) => (
  <p className="text-[#9B9B9B] text-[12px] uppercase tracking-[1px] mt-[5px]">
    {children}
  </p>
);

const LogoutButton = ({ children }) => (
  <a
    onClick={logout}
    className="bg-transparent text-white border border-white rounded-[30px] mt-[30px] px-[30px] py-[12px] text-[12px] font-bold tracking-[1px] uppercase text-center hover:bg-white hover:text-[#181818] focus:bg-white focus:text-[#181818] cursor-pointer"
  >
    {children}
  </a>
);

const Preview = ({ children }) => (
  <section className="block mt-[70px] md:grid md:grid-cols-2 md:gap-[70px] md:mt-[100px] w-full">
    {children}
  </section>
);

const Tracklist = ({ children }) => (
  <div className="md:last:mt-[50px]">{children}</div>
);

const TracklistHeading = ({ children }) => (
  <div className="flex justify-between items-center mb-[40px]">{children}</div>
);

// User Component *********************************************
const User = () => {
  const [user, setUser] = useState(null);
  const [followedArtists, setFollowedArtists] = useState(null);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getUser();
      setUser(userProfile.data);

      const userFollowedArtists = await getFollowing();
      setFollowedArtists(userFollowedArtists.data);

      const userPlaylists = await getPlaylists();
      setPlaylists(userPlaylists.data);
    };

    catchErrors(fetchData());
  }, []);

  const totalPlaylists = playlists ? playlists.total : 0;

  return (
    <>
      {user ? (
        <main className="w-full mx-auto max-w-[1400px] min-h-screen p-[30px_25px] sm:p-[50px_40px] md:p-[60px_50px] lg:p-[80px]">
          <header className="flex justify-center items-center flex-col relative">
            <Avatar>
              {user.images.length > 0 ? (
                <img
                  className="rounded-full"
                  src={user.images[0].url}
                  alt="avatar"
                />
              ) : (
                <div>NoIconUser</div>
              )}
            </Avatar>
            <UserName>
              <Name>{user.display_name}</Name>
            </UserName>
            <Stats>
              <Stat>
                <Number>{user.followers.total}</Number>
                <NumLabel>Followers</NumLabel>
              </Stat>
              {followedArtists && (
                <Stat>
                  <Number>{followedArtists.artists.total}</Number>
                  <NumLabel>Following</NumLabel>
                </Stat>
              )}
              {totalPlaylists && (
                <Stat>
                  <Link to="playlists">
                    <Number>{totalPlaylists}</Number>
                    <NumLabel>Playlists</NumLabel>
                  </Link>
                </Stat>
              )}
            </Stats>
            <LogoutButton>Logout</LogoutButton>
          </header>
          <Preview>
            <Tracklist>
              <TracklistHeading>
                <h3 className="inline-block m-0">Top Artists of All Time</h3>
                <Link
                  to="/artists"
                  className="inline-block text-white font-bold text-[12px] tracking-[1px] uppercase border border-white rounded-[50px] px-[24px] py-[11px] cursor-pointer transition-all text-center whitespace-nowrap hover:bg-white hover:text-black focus:bg-white focus:text-black"
                >
                  See More
                </Link>
              </TracklistHeading>
            </Tracklist>
          </Preview>
        </main>
      ) : (
        <div>Loading ....</div>
      )}
    </>
  );
};

export default User;
