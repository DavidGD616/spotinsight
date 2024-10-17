import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getUserInfo, logout } from '../spotify';
import { catchErrors } from "../../utils";

const User = () => {
    const [user, setUser] = useState(null);
    const [followedArtists, setFollowedArtists] = useState(null);
    const [playlists, setPlaylists] = useState(null);
    const [topArtists, setTopArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { user, followedArtists, playlists, topArtists, topTracks } = await getUserInfo();
            setUser(user);
            setFollowedArtists(followedArtists);
            setPlaylists(playlists);
            setTopArtists(topArtists);
            setTopTracks(topTracks);
          };
          catchErrors(fetchData());
    }, []);

    const totalPlaylists = playlists ? playlists.total : 0;

    return (
        <React.Fragment>
            {user ? (
                <div>
                    {user.images.length > 0 ? (
                        <img src={user.images[0].url} alt="avatar" />
                    ) : (
                        <div>
                            No Avatar
                        </div>
                    )}
                </div>
            ) : (
                <div>Loading ...</div>
            )}
        </React.Fragment>
    )
}

export default User;