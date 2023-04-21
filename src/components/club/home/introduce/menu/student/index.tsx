import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [club, setClub] = useState({
    name: "봉양클럽",
    leader: "김무일",
    teacher: "이현정",
  });

  return (
    <div className="max-w-[26rem] w-full flex flex-col justify-center items-center">
      <div className="select-none font-semibold text-4xl mb-8">{club.name}</div>
      <Link
        href="/"
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        탈퇴하기
      </Link>
      <Link
        href="/"
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        공지보기
      </Link>
      <div className="mt-8 text-[#B1B1B1] w-[11rem]">
        동아리장 : {club.leader}
      </div>
      <div className="mt-2 text-[#B1B1B1] w-[11rem]">
        동아리장 : {club.teacher} 선생님
      </div>
    </div>
  );
};

export default Menu;
