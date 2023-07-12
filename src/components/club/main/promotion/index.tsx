import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Content from "@/components/club/main/promotion/content";
import Link from "next/link";
import { getToken } from "@/util/useToken";

const test = [{ id: "1", img: "http://placehold.it/200x200" }];

const fetcher = (url: string) =>
  fetch(url, {
    method: "get",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }).then((res) => res.json());

const Club = () => {
  const { data, error } = useSWR<any>("/api/schoolclub/promotions", fetcher);

  if (error) return <></>;
  else if (!data) return <></>;
  else {
    return (
      <div className="flex flex-col bg-[#Ffffff] max-w-4xl w-full xs:p-3 px-10 pt-7 pb-10 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] my-10 xs:mt-5 xs:mb-2">
        <div className="mx-6 xs:mx-0 mb-3 xs:mb-0 font-medium text-lg">
          동아리원 모집중
        </div>
        <div className="grid grid-cols-3 xs:grid-cols-2 gap-x-5 gap-y-10 justify-items-center mt-3">
          {data.result?.map((v: any, i: any) => (
            <div
              className="w-[200px] h-[200px] bg-black opacity-[0.2] bg-"
              key={i}
            >
              <Link href={`/club/viewPromotion/${v.id}`}>
                <Content data={v} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Club;
