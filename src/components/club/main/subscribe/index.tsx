import React, { useState } from "react";
import Content from "@/components/club/main/subscribe/content";

const Club = () => {
  const [user, setUser] = useState({ role: "admin" });
  return (
    <div className="flex flex-col bg-[#Ffffff] max-w-4xl w-full px-10 pt-7 pb-10 drop-shadow-xl mt-10">
      <div className="flex flex-row justify-between items-center">
        <div className="mx-6 mb-3 font-medium text-lg">내동아리</div>
        {user.role === "admin" ? (
          <button className="mx-6 mb-3 bg-[#D97706] text-white text-sm rounded-sm py-1 px-5">
            홍보하기
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-10 justify-items-center mt-3">
        <Content />
      </div>
    </div>
  );
};

export default Club;
