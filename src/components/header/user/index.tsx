import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { getToken } from "@/util/useToken";
import { getName, getStudentId } from "@/util/useUser";

const User = () => {
  const [check, setCheck] = useState(false);
  const [token, setToken] = useState<any>();
  const [user, setUser] = useState<any>();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    // window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const accessToken = getToken();
      const name = getName();
      const id = getStudentId();
      if (accessToken) {
        setToken(accessToken);
        setUser({ name: name, id: id });
      }
    }
  }, []);

  return token ? (
    !check ? (
      <div
        className="flex flex-row items-center cursor-pointer"
        onClick={() => setCheck(true)}
      >
        <div className="text-[#D97706] font-medium pr-2 select-none xs:text-sm">
          {user.name} 님
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-[#D97706] pt-1 w-7"
        />
      </div>
    ) : (
      <div
        className="flex flex-row cursor-pointer"
        onClick={() => setCheck(false)}
      >
        <div className="flex flex-row items-center">
          <div className="text-[#D97706] font-medium pr-2 select-none xs:text-sm">
            {user.studentId} {user.name} 님
          </div>
          <FontAwesomeIcon
            icon={faAngleDown}
            className="text-[#D97706] pt-1 w-7"
          />
        </div>
        <div className="absolute top-16 z-10 mt-5 flex w-[10rem] -translate-x-10 xs:top-9 xs:-translate-x-14">
          <div className="flex-auto rounded-lg bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
            <div className="group relative text-center py-3 px-4 hover:bg-gray-50 rounded-t-lg  border-b">
              <a href="#" className="font-regular text-gray-900 w-max h-max">
                비밀번호변경
              </a>
            </div>
            <div
              className="group relative text-center py-3 px-4 hover:bg-gray-50 rounded-b-lg"
              onClick={() => logout()}
            >
              <div className="font-regular text-gray-900">로그아웃</div>
            </div>
          </div>
        </div>
      </div>
    )
  ) : (
    <div className="flex flex-row items-center cursor-pointer">
      <Link
        href="/login"
        className="text-[#D97706] font-medium pr-2 select-none xs:text-sm"
      >
        로그인
      </Link>
    </div>
  );
};

export default User;
