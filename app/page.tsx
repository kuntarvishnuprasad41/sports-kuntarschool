import React from "react";
import SportsNavigationMenu from "../components/MenuNavigation";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="m-0 p-0 w-screen h-full  border-opacity-15 border-solid border-white border-b-[0.5px]  flex gap-8 px-10  ">
        <Image
          src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image-300x300.png"
          alt="asd"
          className="w-24 h-24"
          height={1000}
          width={1000}
        />

        <SportsNavigationMenu />
      </div>
    </>
  );
}
