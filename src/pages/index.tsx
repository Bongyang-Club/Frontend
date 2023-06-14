import React from "react";
import Club from "@/components/club/main/promotion";
import ClubHome from "@/components/club/main/subscribe";

const Main = () => {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex flex-col max-w-4xl w-full xs:px-2">
          <ClubHome />
          <Club />
        </div>
      </div>
    </>
  );
};

export default Main;
