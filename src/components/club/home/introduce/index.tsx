import React, { useState } from "react";
import AdminMenu from "@/components/club/home/introduce/menu/admin";
import StudentMenu from "@/components/club/home/introduce/menu/student";
import Img from "@/components/club/home/introduce/img";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

type Introduce = {
  user: User;
  router: ParsedUrlQuery;
};

type User = {
  role: string;
};

const Introduce = ({ user, router }: Introduce) => {
  return (
    <div className="flex flex-row bg-[#Ffffff] max-w-4xl w-full shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-10">
      {user.role === "ROLE_CLUB_LEADER" ? (
        <AdminMenu router={router} />
      ) : (
        <StudentMenu />
      )}
      <Img user={user} />
    </div>
  );
};

export default Introduce;
