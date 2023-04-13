import React, { useState } from "react";
import AdminMenu from "@/components/club/home/introduce/menu/admin";
import StudentMenu from "@/components/club/home/introduce/menu/student";
import Img from "@/components/club/home/introduce/img";

type Introduce = {
  user: User;
};

type User = {
  role: string;
};

const Introduce = ({ user }: Introduce) => {
  return (
    <div className="flex flex-row bg-[#Ffffff] max-w-4xl w-full drop-shadow-xl mt-10">
      {user.role === "ROLE_CLUB_LEADER" ? <AdminMenu /> : <StudentMenu />}
      <Img user={user} />
    </div>
  );
};

export default Introduce;
