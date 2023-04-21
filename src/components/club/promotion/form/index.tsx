import { useState } from "react";

const Form = () => {
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="max-w-4xl w-full h-full my-10 py-20 shadow-xl flex justify-center bg-white ">
        <div className="w-[38rem]">
          {/* 탑 */}
          <div className="w-full flex justify-between">
            <span className="font-bold font text-2xl">동아리 홍보 신청</span>
            <button className="w-[6rem] bg-[#D97706] text-white">신청</button>
          </div>
          {/* 동아리 명 */}
          <div className="w-full flex items-center justify-between mt-[3rem]">
            <span className="text-lg text-[#676767] leading-10">동아리명</span>
            <input
              className="w-[28.5rem] border border-[#DDDDDD] bg-[#F8F8F8] px-2 py-1 text-lg"
              value={"봉양클럽"}
              readOnly={true}
            />
          </div>
          {/* 지원방법 */}
          <div className="w-full mt-[1.5rem] relative">
            <div className="flex items-center justify-between">
              <span className="text-lg text-[#676767] leading-10">
                지원방법
              </span>
              <div className="w-[28.5rem] flex items-center">
                <div className="w-[8rem] flex align-middle items-center">
                  <input
                    type="checkBox"
                    className="w-[1.2rem] h-[1.2rem]"
                    checked={firstChecked}
                    onChange={({ target: { checked } }) =>
                      setFirstChecked(checked)
                    }
                  />
                  <span className="ml-[0.7rem] leading-10 text-md text-[#B1B1B1] ">
                    1차(구글폼)
                  </span>
                </div>
                <div className="w-[9rem] ml-[2rem] flex align-middle items-center justify-between">
                  <div className="flex align-middle items-center">
                    <input
                      type="checkBox"
                      className="w-[1.2rem] h-[1.2rem]"
                      checked={secondChecked}
                      onChange={({ target: { checked } }) =>
                        setSecondChecked(checked)
                      }
                    />
                    <span className="ml-[0.7rem] leading-10 text-md text-[#B1B1B1]  ">
                      2차
                    </span>
                  </div>
                  <div className="flex align-middle items-center">
                    <select
                      disabled={!secondChecked}
                      className={
                        secondChecked
                          ? ""
                          : "bg-[#F8F8F8] border border-1 rounded-sm"
                      }
                    >
                      <option>테스트</option>
                      <option>면접</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[#B1B1B1] text-xs font-thin w-full flex justify-end">
              ※ 선택하지 않으면 바로 동아리에 가입됩니다.
            </span>
          </div>
          {/* 정보 */}
          <div className="w-full flex justify-end items-center ">
            <div className="w-[35rem]">
              {firstChecked ? (
                <div className="mt-[1rem]">
                  {/* 링크 */}
                  <div className="w-full flex justify-between">
                    <span className="text-lg text-[#676767] leading-10">
                      링크
                    </span>
                    <input className="w-[28.5rem] text-lg px-2 py-1 border border-[#DDDDDD]" />
                  </div>
                  {/* 신청기간 */}
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-lg text-[#676767] leading-10">
                      신청기간
                    </span>
                    <input className="w-[28.5rem] text-lg px-2 py-1 border border-[#DDDDDD]" />
                  </div>
                </div>
              ) : null}
              {secondChecked ? (
                <div className="w-full">
                  <div className="w-full flex justify-between mt-2">
                    <span className="text-lg text-[#676767] leading-10">
                      면접
                    </span>
                    <div className="w-[28.5rem] flex relative">
                      <div className="flex align-middle">
                        <input
                          type="radio"
                          name="interview"
                          className="w-[1.4rem] accent-gray-500"
                        />
                        <span className="ml-2 leading-9 text-md text-[#B1B1B1]">
                          개인별
                        </span>
                      </div>
                      <div className="ml-8 flex align-middle">
                        <input
                          type="radio"
                          name="interview"
                          className="w-[1.4rem] accent-gray-500"
                        />
                        <span className="ml-2 leading-9 text-md text-[#B1B1B1]">
                          전체
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#B1B1B1] text-xs font-thin w-full flex justify-end">
                    ※ 개인별의 경우 신청자 확인후 면접 일정을 공지해주시기
                    바랍니다.
                  </span>
                </div>
              ) : null}
            </div>
          </div>
          {/* 모집대상 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">모집대상</span>
            <div className="flex flex-col">
              <div className="w-[28.5rem]">
                <input className="w-[21rem] border border-[#DDDDDD] text-lg px-2 py-1" />
                <input className="w-[5rem] ml-2 border border-[#DDDDDD] text-lg px-2 py-1" />
                <span className="ml-2 text-lg">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] border border-[#DDDDDD] text-lg px-2 py-1" />
                <input className="w-[5rem] ml-2 border border-[#DDDDDD] text-lg px-2 py-1" />
                <span className="ml-2 text-lg">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] border border-[#DDDDDD] text-lg px-2 py-1" />
                <input className="w-[5rem] ml-2 border border-[#DDDDDD] text-lg px-2 py-1" />
                <span className="ml-2 text-lg">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] border border-[#DDDDDD] text-lg px-2 py-1" />
                <input className="w-[5rem] ml-2 border border-[#DDDDDD] text-lg px-2 py-1" />
                <span className="ml-2 text-lg">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] border border-[#DDDDDD] text-lg px-2 py-1" />
                <input className="w-[5rem] ml-2 border border-[#DDDDDD] text-lg px-2 py-1" />
                <span className="ml-2 text-lg">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] border border-[#DDDDDD] text-lg px-2 py-1" />
                <input className="w-[5rem] ml-2 border border-[#DDDDDD] text-lg px-2 py-1" />
                <span className="ml-2 text-lg">명</span>
              </div>
            </div>
          </div>
          {/* 활동 방법 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767]">활동 방법</span>
            <textarea className="w-[28.5rem] h-[15rem] border border-[#DDDDDD] p-2 resize-none" />
          </div>
          {/* 활동 장소 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">활동 장소</span>
            <input className="w-[28.5rem] border border-[#DDDDDD] text-lg px-2 py-1" />
          </div>
          {/* 활동 시간 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">활동 시간</span>
            <input className="w-[28.5rem] border border-[#DDDDDD] text-lg px-2 py-1" />
          </div>
          {/* 가입문의 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">가입문의</span>
            <input
              className="w-[28.5rem] border border-[#DDDDDD] text-lg px-2 py-1 font-normal"
              placeholder="ex. 인스타 : wlqdp_rkffo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
