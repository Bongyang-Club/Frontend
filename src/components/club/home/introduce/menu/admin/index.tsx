import React, { useState } from "react";

const Menu = () => {
  const [club, setClub] = useState({ name: "봉양클럽" });

  return (
    <div className="max-w-[26rem] w-full flex flex-col justify-center items-center">
      <div className="select-none font-semibold text-4xl mb-8">{club.name}</div>
      <input
        type="button"
        className="cursor-pointer border py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
        value="동아리장 변경"
      />
      <input
        type="button"
        className="cursor-pointer border py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
        value="공지 등록"
      />
      <input
        type="button"
        className="cursor-pointer border py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
        value="동아리 홍보하기"
      />
      <input
        type="button"
        className="cursor-pointer border py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
        value="가입신청 확인"
      />
      <input
        type="button"
        className="cursor-pointer border py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
        value="동아리원 확인"
      />
    </div>
  );
};

export default Menu;
