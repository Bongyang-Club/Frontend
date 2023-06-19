import React, { useEffect, useState } from "react";
import Content from "@/components/club/main/promotion/content";
import Link from "next/link";
import axios from "axios";
import { setInterceptor } from "@/assets/setInterceptor";

const test = [{ id: "1", img: "http://placehold.it/200x200" }];

const Club = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    const token = localStorage.getItem("token");
    setInterceptor(token);

    axios
      .get("/api/schoolclub/my/club")
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          // alert(res.data.message);
          // location.href = "/";
        } else {
          // setData(res.data.result);
          setData(test);
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          location.href = "/login";
        } else {
          setData(test);
        }
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
