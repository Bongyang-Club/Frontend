import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex flex-row justify-between h-[64px] items-center px-56 border-0 border-b border-[#DFDFDF]">
      <div className="w-[128px] h-[48px]">
        <Image src="/봉양클럽.png" width={128} height={48} alt={"봉양클럽"} />
      </div>
      <div className="flex flex-row items-center">
        <div className="text-[#D97706] font-medium pr-2">3208 박대형 님</div>
        <FontAwesomeIcon icon={faAngleRight} className="text-[#D97706] pt-1" />
      </div>
    </div>
  );
};

export default Header;
