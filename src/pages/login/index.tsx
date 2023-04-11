import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="bg-[#D97706] flex justify-center items-center h-screen">
      <div className="bg-white max-w-[1000px] w-full max-h-[550px] h-full flex flex-row">
        <div className="relative w-[450px] h-full overflow-hidden">
          <Image
            className="absolute z-10 top-2 left-2"
            src="/gbsw-logo.png"
            alt="gbsw-logo"
            width={30}
            height={30}
          />
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/school.jpg"
            alt="school"
            width={825}
            height={700}
          />
        </div>
        <div className="flex justify-center items-center max-w-[550px] w-full">
          <form className="flex flex-col max-w-[350px] w-full">
            <div className="flex flex-col my-3">
              <label htmlFor="id" className="text-[#B1B1B1] text-sm font-light">
                아이디
              </label>
              <input type="text" id="id" className="border-b p-1 outline-0" />
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="pw" className="text-[#B1B1B1] text-sm font-light">
                비밀번호
              </label>
              <input
                type="password"
                id="pw"
                className="border-b p-1 outline-0"
              />
            </div>
            <div className="flex flex-row items-center my-3">
              <input
                type="checkbox"
                id="login_check"
                className="hidden"
                onClick={() => setChecked(!checked)}
                // className="border appearance-none checked:bg-[#B1B1B1] checked:border-0 checked:bg-[url('/img/')] w-[20px] h-[20px] m-1 outline-0 rounded-full"
              />
              <label htmlFor="login_check">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className={
                    "border rounded-full border-[#B1B1B1] bg-[#B1B1B1] text-white mr-1 " +
                    (checked ? "block" : "hidden")
                  }
                />
                <FontAwesomeIcon
                  icon={faCircle}
                  className={
                    "text-white border rounded-full border-[#B1B1B1] mr-1 " +
                    (!checked ? "block" : "hidden")
                  }
                />
              </label>
              <label
                htmlFor="login_check"
                className="text-[#B1B1B1] text-sm font-light select-none"
              >
                로그인 유지
              </label>
            </div>
            <div className="bg-[#D97706] flex justify-center text-white py-2 px-10 my-5 mb-8 rounded-sm">
              <input type="button" value="로그인" />
            </div>
            <div className="my-2 text-[#949494] text-sm font-light">
              아직 계정이 없으신가요?
              <a href="#" className="text-[#007FD4] mx-2">
                회원가입
              </a>
            </div>
            <div className="my-2 text-[#949494] text-sm font-light">
              비밀번호가 기억나지 않으신가요?
              <a href="#" className="text-[#007FD4] mx-2">
                비밀번호 변경
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
