/* eslint-disable @next/next/no-img-element */
import React from "react";
import SportsNavigationMenu from "../components/MenuNavigation";

export default function Home() {
  return (
    <>
      <div className="w-screen h-full  border-dotted border-white border-b-[0.5px]  flex gap-8 px-10 ">
        <img src="/vercel.svg" alt="" className="w-24 h-24" />

        <SportsNavigationMenu />
      </div>
    </>
  );
}
