import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser, logout } from "../spotify";
import { catchErrors } from "../utils";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userProfile = await getUser();
      setUser(userProfile.data);
    };

    catchErrors(fetchData());
  }, []);

  return (
    <>
      {user ? (
        <>
          <div className="w-[150px] h-[150px]">
            {user.images.length > 0 ? (
              <img
                className="rounded-full"
                src={user.images[0].url}
                alt="avatar"
              />
            ) : (
              <div>NoIconUser</div>
            )}
          </div>
          <a className="hover:text-[#1ed760] focus:text-[#1ed760]">
            <h1 className="text-[8vw] sm:text-[50px] font-bold mt-5">
              {user.display_name}
            </h1>
          </a>
          <div>
            <div>
                <div></div>
                <p></p>
            </div>
          </div>
        </>
      ) : (
        <div>Loading ....</div>
      )}
    </>
  );
};

export default User;
