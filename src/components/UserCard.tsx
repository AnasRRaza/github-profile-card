import React from "react";
import Image from "next/image";
import { UserDetails } from "../type";

interface UserCardProps {
  userDetails: UserDetails;
}

const UserCard: React.FC<UserCardProps> = ({ userDetails }) => {
  const {
    name,
    bio,
    followers,
    following,
    avatar_url,
    public_repos,
    html_url,
  } = userDetails;

  const openGithubProfile = () => {
    window.open(html_url, "_blank");
  };

  return (
    <>
      <div className="shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] ">
        <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover bg-bluePrimary">
          <div className="absolute -bottom-12 flex h-[150px] w-[150px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
            <Image
              className="h-full w-full rounded-full cursor-pointer"
              src={avatar_url}
              alt="github_pic"
              width={200}
              height={200}
              onClick={openGithubProfile}
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-bluePrimary text-xl font-bold">{name}</h4>
          <p className="text-lightSecondary text-center text-base font-normal">
            {bio}
          </p>
        </div>
        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">
              {public_repos}
            </h3>
            <p className="text-lightSecondary text-sm font-normal">
              Public Repos
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">{followers}</h3>
            <p className="text-lightSecondary text-sm font-normal">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">{following}</h3>
            <p className="text-lightSecondary text-sm font-normal">Following</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
