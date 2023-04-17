import React from "react";
import Club from "@/components/club/main/promotion";
import ClubHome from "@/components/club/main/subscribe";

const Main = () => {
  return (
    <>
      <div
        className="bg-[#F5F5F5] flex flex-row justify-center"
        style={{ minHeight: "calc(100vh - 65px)" }}
      >
        <div className="flex flex-col max-w-4xl w-full">
          <ClubHome />
          <Club />
        </div>
      </div>
    </>
  );
};

export default Main;
