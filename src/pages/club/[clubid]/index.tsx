import React, { useState } from "react";
import Introduce from "@/components/club/home/introduce";
import Notification from "@/components/club/home/notification";
import Header from "@/components/header";
import { useRouter } from "next/router";

const ClubHome = () => {
  const router = useRouter();
  const clubid = router.query;
  const [user, setUser] = useState({ role: "ROLE_CLUB_LEADER" });

  return (
    <>
      <Header />
      <div
        className="bg-[#F5F5F5] flex flex-row justify-center"
        style={{ minHeight: "calc(100vh - 65px)" }}
      >
        <div className="flex flex-col max-w-4xl w-full">
          <Introduce user={user} />
          <Notification user={user} />
        </div>
      </div>
    </>
  );
};

export default ClubHome;
