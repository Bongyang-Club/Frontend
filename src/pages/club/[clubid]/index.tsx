import React, { useEffect, useState } from "react";
import Introduce from "@/components/club/home/introduce";
import Notification from "@/components/club/home/notification";
import { useRouter } from "next/router";
import { setInterceptor } from "@/assets/setInterceptor";
import axios from "axios";

const ClubHome = () => {
  const router = useRouter();
  const clubid = router.query.clubid;
  const [user, setUser] = useState(false);
  // const [user, setUser] = useState({ role: "ROLE_STUDENT" });
  useEffect(() => {
    if (!router.query || Object.keys(router.query).length === 0) return;
    load();
  }, [router.query]);

  const load = () => {
    const token = localStorage.getItem("token");
    setInterceptor(token);
    axios
      .get(`/api/member/${clubid}`)
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          alert(res.data.message);
          // location.href = "/";
        } else {
          setUser(res.data.result);
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          // location.href = "/login";
        }
      });
  };

  return (
    <>
      <div
        className="flex flex-row justify-center"
        style={{ minHeight: "calc(100vh - 65px)" }}
      >
        <div className="flex flex-col max-w-4xl w-full xs:p-3">
          <Introduce user={user} router={router.query} />
          <Notification user={user} />
        </div>
      </div>
    </>
  );
};

export default ClubHome;
