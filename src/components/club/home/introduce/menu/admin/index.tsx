import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import React, { useState } from "react";
import Write from "./write";
import LeaderChange from "./leaderChange";

type Menu = {
  router: ParsedUrlQuery;
  club: Club;
};

type Club = {
  clubName: string;
  leaderName: string;
  teacherName: string;
  imageUrl: string;
};

const Menu = ({ router, club }: Menu) => {
  const [openWrite, setOpenWrite] = useState(false);
  const [openLeaderChange, setOpenLeaderChange] = useState(false);

  // 클릭시 공지 작성 모달 활성화
  function onClickWriteHandler() {
    setOpenWrite(!openWrite);
  }

  // 클릭시 동아리장 변경 모달 활성화
  function onClickLeaderChangeHandler() {
    setOpenLeaderChange(!openLeaderChange);
  }

  return (
    <div className="max-w-[26rem] w-full flex flex-col justify-center items-center">
      {openWrite ? <Write setModal={setOpenWrite} router={router} /> : ""}
      {openLeaderChange ? (
        <LeaderChange setModal={setOpenLeaderChange} router={router} />
      ) : (
        ""
      )}
      <div className="select-none font-semibold text-4xl mb-8">
        {club.clubName}
      </div>
      <button
        onClick={onClickLeaderChangeHandler}
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        동아리장 변경
      </button>
      <button
        onClick={onClickWriteHandler}
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        공지 등록
      </button>
      <Link
        href={`/club/${router.clubid}/journal`}
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        동아리 일지 작성
      </Link>
      <Link
        href="/club/promotion"
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        동아리 홍보하기
      </Link>
      <Link
        href={`/club/${router.clubid}/application`}
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        가입신청 확인
      </Link>

      <Link
        href={`/club/${router.clubid}/member`}
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        동아리원 확인
      </Link>
    </div>
  );
};

export default Menu;
