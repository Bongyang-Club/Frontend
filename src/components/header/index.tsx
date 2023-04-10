import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  const [check, setCheck] = useState(false);

  return (
    <div className=" border-0 border-b border-[#DFDFDF] flex flex-row justify-center w-full">
      <div className="flex flex-row justify-between h-[64px] items-center max-w-6xl w-full px-5">
        <div className="w-[128px] h-[48px]">
          <Link href="/">
            <Image
              src="/봉양클럽.png"
              width={128}
              height={48}
              alt={"봉양클럽"}
            />
          </Link>
        </div>
        {!check ? (
          <div
            className="flex flex-row items-center"
            onClick={() => setCheck(true)}
          >
            <div className="text-[#D97706] font-medium pr-2">
              3208 박대형 님
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-[#D97706] pt-1 w-10"
            />
          </div>
        ) : (
          <div
            className="flex flex-row items-center"
            onClick={() => setCheck(false)}
          >
            <div className="text-[#D97706] font-medium pr-2">
              3208 박대형 님
            </div>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="text-[#D97706] pt-1 w-10"
            />
            <div className="absolute top-16 z-10 mt-5 flex w-[10rem] -translate-x-5">
              <div className="flex-auto w-[24px] rounded-lg bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                <div className="group relative text-center py-3 px-4 hover:bg-gray-50  border-b">
                  <div>
                    <a href="#" className="font-regular text-gray-900">
                      마이페이지
                    </a>
                  </div>
                </div>
                <div className="group relative text-center py-3 px-4 hover:bg-gray-50">
                  <div>
                    <a href="#" className="font-regular text-gray-900">
                      로그아웃
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
