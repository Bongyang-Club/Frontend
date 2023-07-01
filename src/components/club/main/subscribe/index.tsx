import React, { useEffect, useState } from "react";
import Content from "@/components/club/main/subscribe/content";
import Link from "next/link";
import axios from "axios";
import { setInterceptor } from "@/assets/setInterceptor";
import { getToken } from "@/util/useToken";

const dummyData = [{ clubId: "1", image: "http://placehold.it/200x200" }];
const dummyUser = "ROLE_CLUB_LEADER";

const Club = () => {
  const [user, setUser] = useState("");
  const [data, setData] = useState<any>();
  const [check, setChekc] = useState(false);

  useEffect(() => {
    if (check) return;
    load();
  }, []);

  const load = () => {
    setInterceptor(getToken());

    axios
      .get("/api/schoolclub/my/club")
      .then((res) => {
        console.log(res);
        setData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
        setData(dummyData);
      });

    axios
      .get("/api/member")
      .then((res) => {
        console.log(res);
        setUser(res.data.result.role);
      })
      .catch((e) => {
        console.log(e);
        setUser(dummyUser);
      });

    setChekc(true);
  };

  return (
    <div className="flex flex-col bg-[#Ffffff] max-w-4xl w-full xs:p-3 px-10 pt-7 pb-10 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-10 xs:mt-5">
      <div className="flex flex-row justify-between items-center">
        <div className="mx-6 xs:mx-0 mb-3 xs:mb-0 font-medium text-lg">
          내동아리
        </div>
        {user === "ROLE_CLUB_LEADER" ? (
          <Link
            href={"/club/promotion"}
            className="w-[6rem] flex justify-center mx-6 xs:mx-0 mb-3 xs:mb-0 bg-[#D97706] text-white text-sm rounded-sm py-1 px-5"
          >
            홍보하기
          </Link>
        ) : null}
      </div>
      <div className="xs:flex xs:flex-row grid grid-cols-3 gap-x-5 gap-y-10 justify-items-center mt-3 overflow-x-auto">
        {data
          ? data.map((v: any, i: any) => (
              <div key={i}>
                <Link href={`/club/${v.clubId}`}>
                  <Content data={v} />
                </Link>
              </div>
            ))
          : ""}
        <Link href={`/createClub`}>
          <Content
            data={{
              clubId: "",
              image: "",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Club;
