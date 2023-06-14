import Image from "next/image";
import React from "react";
import Link from "next/link";
import User from "@/components/header/user";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-0 border-b bg-white border-[#DFDFDF] flex flex-row justify-center w-full">
      <div className="flex flex-row justify-between h-[64px] xs:h-[48px] items-center max-w-6xl w-full px-5">
        <div className="w-[128px] h-[48px] xs:hidden block">
          <Link href="/">
            <Image
              src="/봉양클럽.png"
              width={128}
              height={48}
              alt={"봉양클럽"}
            />
          </Link>
        </div>
        <div className="w-[32px] h-[32px] xs:block hidden">
          <Link href="/">
            <Image
              src="/봉양클럽1.png"
              width={32}
              height={32}
              alt={"봉양클럽"}
            />
          </Link>
        </div>
        <User />
      </div>
    </div>
  );
};

export default Header;
