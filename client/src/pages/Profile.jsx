import React, { useEffect, useState } from "react";
import { User } from "../components";
import tw from 'tailwind-styled-components';

const Text = tw.p`
    text-red-700
`;

const Profile = () => {
    return (
        <User />   
    )
}

export default Profile;