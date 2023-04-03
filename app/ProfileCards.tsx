import React from "react";
import imageOliverPan from "@/public/images/oliver-pan.jpg";
import imageAllisonKuo from "@/public/images/allison-kuo.jpg";
import imageJaniceKim from "@/public/images/janice-kim.jpg";
import imageHannahCho from "@/public/images/hannah-cho.jpg";
import Image, { StaticImageData } from "next/image";

const profiles = [
  {
    name: "Oliver Pan",
    image: imageOliverPan,
  },
  {
    name: "Allison Kuo",
    image: imageAllisonKuo,
  },
  {
    name: "Janice Kim",
    image: imageJaniceKim,
  },
  {
    name: "Hannah Cho",
    image: imageHannahCho,
  },
];

export const ProfileCard = ({
  name,
  image,
}: {
  name: string;
  image: StaticImageData;
}) => {
  return (
    <div className='flex flex-col items-center p-2 rounded ring-zinc-800 ring-opacity-5 ring-1 backdrop-blur-sm bg-zinc-50/20 pt-4'>
      <div className='p-2 ring-1 ring-zinc-800 ring-opacity-5 rounded-full'>
        <Image
          src={image}
          alt={name}
          className='w-24 h-24 object-cover object-center rounded-full'
          placeholder='blur'
        />
      </div>
      <h6 className='mb-2 mt-2.5 uppercase md:text-base text-sm'>{name}</h6>
    </div>
  );
};

export const ProfileCards = () => {
  return (
    <>
      {profiles.map((profile) => (
        <ProfileCard key={profile.name} {...profile} />
      ))}
    </>
  );
};
