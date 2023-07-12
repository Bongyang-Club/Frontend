import { getToken } from "@/util/useToken";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const router = useRouter();
  const clubid: any = router.query.clubid;

  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);

  const fetcher = (url: string) =>
    fetch(url, {
      method: "get",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => data.result);

  const { data, error } = useSWR<any>(
    `/api/schoolclub/promotion/${clubid}`,
    fetcher
  );

  // 클릭시 링크 복사
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  if (error) return "에러";
  else if (!data) return <></>;
  else {
    console.log(data);
    return (
      <div className="w-full h-full flex justify-center items-center xs:p-3">
        <div className="max-w-4xl w-full h-full my-10 xs:my-0 py-20 xs:py-5 xs:px-5 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] flex justify-center bg-white ">
          <div className="max-w-[38rem] w-full">
            {/* 탑 */}
            <div className="w-full flex justify-between items-center">
              <span className="font-bold text-2xl xs:text-lg">
                {"봉양클럽"}
              </span>
              <button className="w-[6rem] flex justify-center ml-6 xs:mx-0 mb-3 xs:mb-0 bg-[#D97706] text-white text-sm rounded-sm py-1 px-5">
                지원
              </button>
            </div>
            {/* 지원방법 */}
            <div className="w-full mt-[1.5rem] relative">
              <div className="flex items-center justify-between">
                <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                  지원방법
                </span>
                <div className="max-w-[28.5rem] w-full flex items-center xs:flex-col xs:items-start">
                  <div className="max-w-[8rem] w-full flex align-middle items-center">
                    <span
                      className="ml-[0.7rem] leading-10 text-md  xs:text-base cursor-pointer text-[#D97706]"
                      onClick={() =>
                        handleCopyClipBoard(data.postForm?.gf_link)
                      }
                    >
                      1차(구글폼)
                    </span>
                    <FontAwesomeIcon
                      icon={faCopy}
                      style={{ color: "#D97706" }}
                    />
                  </div>
                  <div className="max-w-[9rem] w-full ml-[2rem] xs:ml-0 flex align-middle items-center justify-between xs:mt-2">
                    <div className="flex align-middle items-center">
                      {/* <i */}
                      <span className="ml-[0.7rem] leading-10 text-md  xs:text-base">
                        2차 여부:
                      </span>
                    </div>
                    <div className="flex align-middle items-center xs:text-base">
                      <span>{data.postForm?.gf_check ? "있음" : "없음"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 정보 */}
            <div className="w-full flex justify-end items-center ">
              <div className="max-w-[35rem] w-full">
                {firstChecked ? (
                  <div className="mt-[1rem]">
                    {/* 링크 */}
                    <div className="w-full flex justify-between items-center">
                      <span className="max-w-[7rem] w-full xs:pl-5 text-lg xs:text-base text-[#676767] leading-10">
                        링크
                      </span>
                      <input className="w-[28.5rem] text-lg xs:text-base px-2 py-1 border border-[#DDDDDD]" />
                    </div>
                    {/* 신청기간 */}
                    <div className="w-full flex justify-between items-center mt-2">
                      <span className="max-w-[7rem] w-full xs:pl-5 text-lg xs:text-base text-[#676767] leading-10">
                        신청기간
                      </span>
                      <input className="w-[28.5rem] text-lg xs:text-base px-2 py-1 border border-[#DDDDDD]" />
                    </div>
                  </div>
                ) : null}
                {secondChecked ? (
                  <div className="w-full">
                    <div className="w-full flex justify-between items-center mt-2">
                      <span className="max-w-[7rem] w-full xs:pl-5 text-lg xs:text-base text-[#676767] leading-10">
                        면접
                      </span>
                      <div className="w-[28.5rem] flex relative">
                        <div className="flex align-middle">
                          <input
                            type="radio"
                            name="interview"
                            className="w-[1.4rem] accent-gray-500"
                          />
                          <span className="ml-2 leading-9 text-base text-[#B1B1B1]">
                            개인별
                          </span>
                        </div>
                        <div className="ml-8 flex align-middle">
                          <input
                            type="radio"
                            name="interview"
                            className="w-[1.4rem] accent-gray-500"
                          />
                          <span className="ml-2 leading-9 text-base text-[#B1B1B1]">
                            전체
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[#B1B1B1] text-xs font-thin w-full flex justify-end xs:mt-2">
                      ※ 개인별의 경우 신청자 확인후 면접 일정을 공지해주시기
                      바랍니다.
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
            {/* 모집대상 */}
            {data.postForm?.r_targets[0].length !== 0 ? (
              <div className="w-full flex items-center  justify-between mt-[2rem]">
                <span className="max-w-[5rem] w-full text-lg text-[#676767] leading-10 xs:text-base">
                  모집대상
                </span>
                <div className="flex flex-col max-w-[28.5rem] w-full">
                  {data.postForm?.r_targets.map((target: any, key: any) => {
                    target.department.length !== 0 ? (
                      <div className="flex w-full items-center py-1" key={key}>
                        <div className="max-w-[2rem] w-full text-lg xs:text-base text-[#676767]">
                          ●
                        </div>
                        <div className="max-w-[21.5rem] w-full text-lg xs:text-base text-[#676767]">
                          {/* {data.postForm?.r_targets[0].department} */}
                          {target.department}
                        </div>
                        <div className="max-w-[5rem] xs:max-w-[3rem] w-full ml-2 text-lg xs:text-base text-[#676767] text-center">
                          {/* {data.postForm?.r_targets[0].total}명 */}
                          {target.total}명
                        </div>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </div>
              </div>
            ) : null}
            {/* 활동 방법 */}
            <div className="w-full flex items-center justify-between mt-[2rem]">
              <span className="max-w-[5rem] w-full text-lg xs:text-base text-[#676767]">
                활동 방법
              </span>
              <div className="w-[28.5rem] p-2">{data.postForm?.p_how}</div>
            </div>
            {/* 활동 장소 */}
            <div className="w-full flex items-center justify-between mt-[2rem]">
              <span className="max-w-[5rem] w-full text-lg xs:text-base text-[#676767] leading-10">
                활동 장소
              </span>
              <div className="w-[28.5rem] text-lg xs:text-base px-2 py-1">
                {data.postForm?.p_place}
              </div>
            </div>
            {/* 활동 시간 */}
            <div className="w-full flex items-center justify-between mt-[2rem]">
              <span className="max-w-[5rem] w-full text-lg xs:text-base text-[#676767] leading-10">
                활동 시간
              </span>
              <div className="w-[28.5rem] text-lg xs:text-base px-2 py-1">
                {data.postForm?.p_time}
              </div>
            </div>
            {/* 가입문의 */}
            <div className="w-full flex items-center justify-between mt-[2rem]">
              <span className="max-w-[5rem] w-full text-lg xs:text-base text-[#676767] leading-10">
                가입문의
              </span>
              <div className="w-[28.5rem] text-lg xs:text-base px-2 py-1 font-normal">
                {data.postForm?.inquiry}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Form;
