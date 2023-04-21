import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [club, setClub] = useState({ name: "봉양클럽" });

  return (
    <div className="max-w-[26rem] w-full flex flex-col justify-center items-center">
      <div className="select-none font-semibold text-4xl mb-8">{club.name}</div>
      <Link
        href="/"
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        동아리장 변경
      </Link>
      <Link
        href="/"
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        공지 등록
      </Link>
      <Link
        href="/club/promotion"
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        동아리 홍보하기
      </Link>
      <Link
        href="/"
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        가입신청 확인
      </Link>
      <Link
        href="/member"
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        동아리원 확인
      </Link>
    </div>
  );
};

export default Menu;
