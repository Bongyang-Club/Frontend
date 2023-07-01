import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { setToken } from "@/util/useToken";

const Form = () => {
  const [checked, setChecked] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const send = async () => {
    const data = {
      si_number: id,
      password: pw,
    };

    // axios
    //   .post("/api/test/add")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => console.log(e));

    await axios
      .post("/api/login", data)
      .then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          setToken(res.data.result.token, 60);
          if (res.data.result.role === "ROLE_ADMIN") {
            location.href = "/admin";
          } else {
            location.href = "/";
          }
        } else if (res.data.code === 403) {
          alert(res.data.message);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex justify-center items-center max-w-[550px] w-full">
      <form className="flex flex-col max-w-[350px] w-full">
        <div className="flex flex-col my-3">
          <label htmlFor="id" className="text-[#B1B1B1] text-sm font-light">
            아이디
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border-b p-1 outline-0"
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="pw" className="text-[#B1B1B1] text-sm font-light">
            비밀번호
          </label>
          <input
            type="password"
            id="pw"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                send();
              }
            }}
            className="border-b p-1 outline-0"
          />
        </div>
        <div className="flex flex-row items-center my-3">
          <input
            type="checkbox"
            id="login_check"
            className="hidden"
            onClick={() => setChecked(!checked)}
          />
          <label htmlFor="login_check">
            {checked ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                className={
                  "border rounded-full border-[#B1B1B1] bg-[#B1B1B1] text-white mr-1 "
                }
              />
            ) : (
              <FontAwesomeIcon
                icon={faCircle}
                className={
                  "text-white border rounded-full border-[#B1B1B1] mr-1 "
                }
              />
            )}
          </label>
          <label
            htmlFor="login_check"
            className="text-[#B1B1B1] text-sm font-light select-none"
          >
            로그인 유지
          </label>
        </div>
        <div className="bg-[#D97706] flex justify-center text-white my-5 mb-8 rounded-sm">
          <input
            type="button"
            value="로그인"
            onClick={() => send()}
            className="w-full h-full py-2 px-10"
          />
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
  );
};

export default Form;
