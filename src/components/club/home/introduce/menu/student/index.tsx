import { setInterceptor } from "@/assets/setInterceptor";
import { getToken } from "@/util/useToken";
import axios from "axios";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import React, { useState } from "react";

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
  const withDraw = () => {
    setInterceptor(getToken());

    const body = {
      id: Number(router.clubid),
    };

    axios
      .put("/api/schoolclub/withdraw", body)
      .then((res) => {
        if (res.data.code === 403) {
          alert(res.data.message);
        }
        location.href = "/";
      })
      .catch((e) => {
        if (e.response.status === 401) {
          alert(e.response.data);
          location.href = "/login";
        }
      });
  };

  return (
    <div className="max-w-[26rem] w-full flex flex-col justify-center items-center">
      <div className="select-none font-semibold text-4xl mb-8">
        {club.clubName}
      </div>
      <Link
        href="/"
        onClick={withDraw}
        className="cursor-pointer border text-center py-1 my-2 rounded-sm w-36 border-[#B1B1B1] text-[#B1B1B1] hover:text-white hover:bg-[#B1B1B1]"
      >
        탈퇴하기
      </Link>
      <div className="mt-8 text-[#B1B1B1] w-[11rem]">
        동아리장 : {club.leaderName}
      </div>
      <div className="mt-2 text-[#B1B1B1] w-[11rem]">
        동아리장 : {club.teacherName} 선생님
      </div>
    </div>
  );
};

export default Menu;
