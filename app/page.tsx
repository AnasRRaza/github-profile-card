"use client";

import React, { useState } from "react";
import Form from "@/src/components/Form";
import UserCard from "@/src/components/UserCard";
import { getUserProfile } from "@/src/container";
import { UserDetails } from "@/src/type";

type GetUserFunction = (userName: string) => Promise<void>;

const Home: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    avatar_url: "https://avatars.githubusercontent.com/u/79412884?v=4",
    bio: "Software Developer",
    followers: 4,
    following: 13,
    location: "Karachi",
    name: "Anas Raza",
    public_repos: 20,
    html_url: "https://github.com/AnasRRaza",
  });

  const handleGetUser: GetUserFunction = async (userName) => {
    const response = await getUserProfile(userName);
    setUserDetails(response);
  };

  return (
    <div>
      <UserCard userDetails={userDetails} />
      <div className="my-10">
        <Form getUser={handleGetUser} />
      </div>
    </div>
  );
};

export default Home;
