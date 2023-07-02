import React, { useEffect, useState } from "react";
import Content from "@/components/club/main/promotion/content";
import Link from "next/link";
import axios from "axios";
import { setInterceptor } from "@/assets/setInterceptor";
import { getToken } from "@/util/useToken";

const test = [{ id: "1", img: "http://placehold.it/200x200" }];

const Club = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    axios
      .get("/api/schoolclub/promotions")
      .then((res) => {
        console.log(res);
        setData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
        setData(test);
      });
  };

  return (
    <div className="flex flex-col bg-[#Ffffff] max-w-4xl w-full xs:p-3 px-10 pt-7 pb-10 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] my-10 xs:mt-5 xs:mb-2">
      <div className="mx-6 xs:mx-0 mb-3 xs:mb-0 font-medium text-lg">
        동아리원 모집중
      </div>
      <div className="grid grid-cols-3 xs:grid-cols-2 gap-x-5 gap-y-10 justify-items-center mt-3">
        {data
          ? data.map((v: any, i: any) => (
              <div key={i}>
                <Link href={`/club/${v.id}/promotion`}>
                  <Content data={v} />
                </Link>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Club;
