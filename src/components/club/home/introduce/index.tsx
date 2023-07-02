import React, { useEffect, useState } from "react";
import AdminMenu from "@/components/club/home/introduce/menu/admin";
import StudentMenu from "@/components/club/home/introduce/menu/student";
import Img from "@/components/club/home/introduce/img";
import { ParsedUrlQuery } from "querystring";
import { setInterceptor } from "@/assets/setInterceptor";
import { getToken } from "@/util/useToken";
import axios from "axios";

type Introduce = {
  user: any;
  router: ParsedUrlQuery;
};

const dummyData = {
  clubName: "봉양클럽",
  leaderName: "김무일",
  teacherName: "이현정",
  imageUrl: "",
};

const Introduce = ({ user, router }: Introduce) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (!router || Object.keys(router).length === 0) return;
    load();
  }, [router]);

  const load = () => {
    setInterceptor(getToken());
    axios
      .get(`/api/schoolclub/${router.clubid}`)
      .then((res) => {
        console.log(res.data.result);
        if (res.data.code === 403) {
          alert(res.data.message);
          // location.href = "/";
        } else {
          setData(res.data.result);
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          // location.href = "/login";
        } else {
          setData(dummyData);
        }
      });
  };

  return data ? (
    <div className="flex flex-row bg-[#Ffffff] max-w-4xl w-full shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-10 xs:mt-5 xs:h-max-[10rem] xs:h-full">
      {user ? (
        <AdminMenu router={router} club={data} />
      ) : (
        <StudentMenu router={router} club={data} />
      )}
      <Img user={user} club={data} />
    </div>
  ) : (
    <></>
  );
};

export default Introduce;
