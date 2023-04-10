import React from "react";
import Header from "@/components/header";
import Club from "@/components/club/promotion";
import ClubHome from "@/components/club/subscribe";

const Main = () => {
  return (
    <>
      <Header />
      <div className="bg-[#F5F5F5] min-h-screen flex flex-row justify-center">
        <div className="flex flex-col max-w-4xl w-full">
          <ClubHome />
          <Club />
        </div>
      </div>
    </>
  );
};

export default Main;
