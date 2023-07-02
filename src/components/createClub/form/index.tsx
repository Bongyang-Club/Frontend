import { useEffect, useState } from "react";
import useSWR from "swr";
import axios from "axios";
import { getToken } from "@/util/useToken";

type ReturnType = {
  code: number;
  count: number;
  httpStatus: string;
  message: string;
  result: any;
};

async function fetcher(url: string) {
  const token: string = getToken() ?? "";
  const res = await axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

const Form = () => {
  const { data, error } = useSWR<ReturnType>("/api/member", fetcher, {
    refreshInterval: 0,
  });

  const [major, setMajor] = useState<number>();
  const [clubName, setClubName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<number>();
  const [teacherName, setTeacherName] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");

  async function onClickHandler() {
    await fetch("/api/schoolclub/enroll", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        m_type: major,
        clubName: clubName,
        officer: number,
        teacher: teacherName,
        clubIntroduce: introduce,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  useEffect(() => {
    setTimeout(() => {
      setName(data?.result.name || "");
      setNumber(data?.result.sinumber || 0);
    }, 500);
  }, [data]);

  if (error) return <h1>error</h1>;
  else if (!data) return <h1>Loading...</h1>;
  else {
    if (data?.result == null || undefined) {
      window.location.href = "/";
    } else {
      return (
        <div className="w-full h-[63.3remw-full h-full flex justify-center items-center xs:p-3">
          <div className="max-w-4xl w-full h-full my-10 xs:my-0 py-20 xs:py-5 xs:px-5 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] flex justify-center bg-white">
            <div className="max-w-[38rem] w-full">
              {/* 탑 */}
              <div className="w-full flex justify-between items-center">
                <span className="font-bold text-2xl xs:text-lg">
                  동아리 생성 신청
                </span>
                <button
                  className="w-[6rem] flex justify-center ml-6 xs:mx-0 mb-3 xs:mb-0 bg-[#D97706] text-white text-sm rounded-sm py-1 px-5"
                  onClick={onClickHandler}
                >
                  신청
                </button>
              </div>
              {/* 동아리 분류 */}
              <div className="w-full flex items-center justify-between mt-[3rem] xs:mt-5">
                <span className="text-lg max-w-[8rem] w-full text-[#676767] leading-10 xs:text-base">
                  동아리 분류
                </span>
                <div className="max-w-[28.5rem] w-full flex items-center">
                  <div className="flex align-middle">
                    <input
                      type="radio"
                      name="interview"
                      value={1}
                      checked={major === 1}
                      onChange={() => setMajor(1)}
                      className="w-[1.2rem] h-[2.5rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-md text-[#B1B1B1]">
                      전공
                    </span>
                  </div>
                  <div className="ml-8 flex align-middle">
                    <input
                      type="radio"
                      name="interview"
                      value={2}
                      checked={major === 2}
                      onChange={() => setMajor(2)}
                      className="w-[1.2rem] h-[2.5rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-md text-[#B1B1B1]">
                      자율
                    </span>
                  </div>
                </div>
              </div>
              {/* 동아리 명 */}
              <div className="w-full flex items-center justify-between mt-[3rem] xs:mt-5">
                <span className="text-lg max-w-[8rem] w-full text-[#676767] leading-10 xs:text-base">
                  동아리명
                </span>
                <input
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                  className="max-w-[28.5rem] w-full border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
                />
              </div>
              {/* 동아리 장 이름 */}
              <div className="w-full flex items-center justify-between mt-[3rem] xs:mt-5">
                <span className="text-lg max-w-[8rem] w-full text-[#676767] leading-10 xs:text-base">
                  동아리장 이름
                </span>
                <input
                  className="max-w-[28.5rem] w-full border border-[#DDDDDD] bg-[#F8F8F8] px-2 py-1 text-lg xs:text-base"
                  value={name}
                  readOnly={true}
                />
              </div>
              {/* 담당 선생님 성함 */}
              <div className="w-full flex items-center justify-between mt-[3rem] xs:mt-5">
                <span className="text-lg max-w-[8rem] w-full text-[#676767] leading-10 xs:text-base">
                  담당선생님 성함
                </span>
                <input
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  className="max-w-[28.5rem] w-full border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
                />
              </div>
              {/* 동아리 설명 */}
              <div className="w-full flex items-center justify-between mt-[3rem] xs:mt-5">
                <span className="text-lg max-w-[8rem] w-full text-[#676767] leading-10 xs:text-base">
                  활동 방법
                </span>
                <textarea
                  value={introduce}
                  onChange={(e) => setIntroduce(e.target.value)}
                  className="max-w-[28.5rem] w-full h-[30rem] border border-[#DDDDDD] px-3 resize-none xs:text-base"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Form;
