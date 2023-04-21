import React, { useState } from "react";
import Content from "@/components/club/main/subscribe/content";
import Link from "next/link";

const Club = () => {
  const [user, setUser] = useState({ role: "ROLE_CLUB_LEADER" });
  const [id, setId] = useState(1);
  const [data, setData] = useState([
    { id: "asdf", img: "http://placehold.it/200x200" },
  ]);

  return (
    <div className="flex flex-col bg-[#Ffffff] max-w-4xl w-full px-10 pt-7 pb-10 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-10">
      <div className="flex flex-row justify-between items-center">
        <div className="mx-6 mb-3 font-medium text-lg">내동아리</div>
        {user.role === "ROLE_CLUB_LEADER" ? (
          <Link
            href={"/club/promotion"}
            className="w-[6rem] flex justify-center mx-6 mb-3 bg-[#D97706] text-white text-sm rounded-sm py-1 px-5"
          >
            홍보하기
          </Link>
        ) : null}
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-10 justify-items-center mt-3">
        {data.map((i, v) => (
          <div key={v}>
            <Link href={`/club/${i.id}`}>
              <Content data={i} />
            </Link>
          </div>
        ))}
        <Link href={`/createClub`}>
          <Content
            data={{
              id: "",
              img: "",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Club;
