import React from "react";
import Content from "@/components/club/main/promotion/content";

const Club = () => {
  return (
    <div className="flex flex-col bg-[#Ffffff] max-w-4xl w-full xs:p-3 px-10 pt-7 pb-10 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] my-10 xs:mt-5 xs:mb-2">
      <div className="mx-6 xs:mx-0 mb-3 xs:mb-0 font-medium text-lg">
        동아리원 모집중
      </div>
      <div className="grid grid-cols-3 xs:grid-cols-2 gap-x-5 gap-y-10 justify-items-center mt-3">
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
};

export default Club;
