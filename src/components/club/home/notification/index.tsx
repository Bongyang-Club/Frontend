import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

type Notification = {
  user: User;
};

type User = {
  role: string;
};

const Notification = ({ user }: Notification) => {
  // const [user, setUser] = useState({ name: "김무일", role: "admin" });
  // const [time, setTime] = useState("21시간 전");
  const [check, setCheck] = useState(false);
  const [club, setClub] = useState({
    name: "김무일",
    time: "21시간 전",
    text: "가입이 완료되면\n카카오톡 : (카카오톡 링크)\n디스코드 : (디스코드 링크)\n로 들어와 주세요 :)",
  });
  return (
    <div className="flex flex-col bg-[#Ffffff] max-w-4xl w-full px-10 pt-7 pb-10 drop-shadow-xl mt-10">
      <div className="flex flex-row justify-between items-center mb-3">
        <div className="flex flex-col justify-start">
          <div className="mb-1 font-medium text-lg">동아리장 {club.name}</div>
          <div className="text-[#969696] font-light text-sm">{club.time}</div>
        </div>
        {user.role === "admin" ? (
          <div
            className={
              "rounded-full w-10 h-10 flex justify-center items-center " +
              (check ? "bg-[#eeeeee]" : "")
            }
            onClick={() => setCheck(!check)}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
            {check ? (
              <div className="absolute top-16 z-10 mt-5 flex w-[8rem] -translate-x-10">
                <div className="flex-auto rounded-lg bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                  <div className="group relative text-center py-3 px-4 hover:bg-gray-50 rounded-t-lg  border-b">
                    <div>
                      <a
                        href="#"
                        className="select-none font-regular text-gray-900"
                      >
                        수정하기
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="justify-items-center mt-3 whitespace-pre-wrap">
        {club.text}
      </div>
    </div>
  );
};

export default Notification;