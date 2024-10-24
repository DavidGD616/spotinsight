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
        <>
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
        </>
      ) : (
        <div>Loading ....</div>
      )}
    </>
  );
};

export default User;
