import { getToken } from "@/util/useToken";
import { useEffect, useState } from "react";

const Form = () => {
  const [secondChecked, setSecondChecked] = useState<boolean>(false);

  const [targetKey1, setTargetKey1] = useState<string>("");
  const [targetValue1, setTargetValue1] = useState<number>(0);
  const [targetKey2, setTargetKey2] = useState<string>("");
  const [targetValue2, setTargetValue2] = useState<number>(0);
  const [targetKey3, setTargetKey3] = useState<string>("");
  const [targetValue3, setTargetValue3] = useState<number>(0);

  const [inquiryKey, setInquiryKey] = useState<string>("");
  const [inquiryValue, setInquiryValue] = useState<string>("");

  const [data, setData] = useState({
    schoolClubName: "",
    googleForm: false,
    interview: false,
    test: false,
    gf_link: "",
    startDate: "",
    endDate: "",
    check: true,
    checkTime: "",
    checkPlace: "",
    target: {},
    a_method: "",
    a_place: "",
    a_time: "",
    a_inquiry: {},
  });

  function updateData(key: string, value: string | boolean) {
    setData({ ...data, [key]: value });
  }

  function updateTarget(key: string, value: number) {
    setData({ ...data, target: { ...data.target, [key]: value } });
  }

  function updateInquiry(key: string, value: string) {
    setData({ ...data, a_inquiry: { ...data.a_inquiry, [key]: value } });
  }

  function handleSelectChange(event: any) {
    const { value } = event.target;

    if (value === "테스트") {
      updateData("test", true);
      updateData("interview", false);
    } else if (value === "면접") {
      updateData("test", false);
      updateData("interview", true);
    }
  }

  useEffect(() => {
    if (secondChecked == false) {
      updateData("test", false);
      updateData("interview", false);
    }
  }, [secondChecked]);

  function onSubmit() {
    fetch(`http://localhost:8080/api/schoolclub/application/promotion`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      window.location.href = "/";
    });
  }

  return (
    <div className="w-full h-full flex justify-center items-center xs:p-3">
      <div className="max-w-4xl w-full h-full my-10 xs:my-0 py-20 xs:py-5 xs:px-5 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] flex justify-center bg-white ">
        <div className="max-w-[38rem] w-full">
          {/* 탑 */}
          <div className="w-full flex justify-between items-center">
            <span className="font-bold text-2xl xs:text-lg">
              동아리 홍보 신청
            </span>
            <button
              className="w-[6rem] flex justify-center ml-6 xs:mx-0 mb-3 xs:mb-0 bg-[#D97706] text-white text-sm rounded-sm py-1 px-5"
              onClick={onSubmit}
            >
              신청
            </button>
          </div>
          {/* 포스터 이미지 */}
          <input type="file" />
          {/* 동아리 명 */}
          <div className="w-full flex items-center justify-between mt-[3rem] xs:mt-5">
            <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
              동아리명
            </span>
            <input
              className="max-w-[28.5rem] w-full border border-[#DDDDDD] bg-[#F8F8F8] px-2 py-1 text-lg xs:text-base"
              value={"봉양클럽"}
              readOnly={true}
            />
          </div>
          {/* 지원방법 */}
          <div className="w-full mt-[1.5rem] relative">
            <div className="flex items-center justify-between">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                지원방법
              </span>
              <div className="max-w-[28.5rem] w-full flex items-center xs:flex-col xs:items-start">
                <div className="max-w-[8rem] w-full flex align-middle items-center">
                  <input
                    type="checkBox"
                    className="w-[1.2rem] h-[1.2rem]"
                    checked={data.googleForm}
                    onChange={({ target: { checked } }) =>
                      updateData("googleForm", checked)
                    }
                  />
                  <span className="ml-[0.7rem] leading-10 text-md text-[#B1B1B1] xs:text-base">
                    1차(구글폼)
                  </span>
                </div>
                <div className="max-w-[9rem] w-full ml-[2rem] xs:ml-0 flex align-middle items-center justify-between xs:mt-2">
                  <div className="flex align-middle items-center">
                    <input
                      type="checkBox"
                      className="w-[1.2rem] h-[1.2rem]"
                      checked={secondChecked}
                      onChange={({ target: { checked } }) =>
                        setSecondChecked(checked)
                      }
                    />
                    <span className="ml-[0.7rem] leading-10 text-md text-[#B1B1B1] xs:text-base">
                      2차
                    </span>
                  </div>
                  <div className="flex align-middle items-center xs:text-base">
                    <select
                      disabled={!secondChecked}
                      className={
                        secondChecked
                          ? ""
                          : "bg-[#F8F8F8] border border-1 rounded-sm"
                      }
                      onChange={handleSelectChange}
                    >
                      <option value="테스트">테스트</option>
                      <option value="면접">면접</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[#B1B1B1] text-xs font-thin w-full flex justify-end xs:mt-2">
              ※ 선택하지 않으면 바로 동아리에 가입됩니다.
            </span>
          </div>
          {/* 정보 */}
          <div className="w-full flex justify-end items-center ">
            <div className="max-w-[35rem] w-full">
              {data.googleForm ? (
                <div className="mt-[1rem]">
                  {/* 링크 */}
                  <div className="w-full flex justify-between items-center">
                    <span className="max-w-[7rem] w-full xs:pl-5 text-lg xs:text-base text-[#676767] leading-10">
                      링크
                    </span>
                    <input
                      className="w-[28.5rem] text-lg xs:text-base px-2 py-1 border border-[#DDDDDD]"
                      value={data.gf_link}
                      onChange={(e) => updateData("gf_link", e.target.value)}
                    />
                  </div>
                  {/* 신청기간 */}
                  <div className="w-full flex justify-between items-center mt-2">
                    <span className="max-w-[7rem] w-full xs:pl-5 text-lg xs:text-base text-[#676767] leading-10">
                      신청기간
                    </span>
                    <div className="w-[28.5rem] flex justify-between">
                      <input
                        className="w-[12.5rem] text-lg xs:text-base px-2 py-1 border border-[#DDDDDD]"
                        value={data.gf_link}
                        onChange={(e) => updateData("gf_link", e.target.value)}
                        placeholder="ex) 2023-06-22"
                      />
                      <span className="text-3xl">~</span>
                      <input
                        className="w-[12.5rem] text-lg xs:text-base px-2 py-1 border border-[#DDDDDD]"
                        value={data.gf_link}
                        onChange={(e) => updateData("gf_link", e.target.value)}
                        placeholder="ex) 2023-06-25"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
              {data.interview ? (
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
          <div className="w-full flex items-center  justify-between mt-[2rem]">
            <span className="max-w-[5rem] w-full text-lg text-[#676767] leading-10 xs:text-base">
              모집대상
            </span>
            <div className="flex flex-col">
              <div className="flex max-w-[28.5rem] w-full items-center">
                <input
                  className="max-w-[21rem] w-full border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
                  value={targetKey1}
                  onChange={(e) => {
                    setTargetKey1(e.target.value);
                    updateTarget(targetKey1, targetValue1);
                  }}
                />
                <input
                  className="max-w-[5rem] xs:max-w-[3rem] w-full ml-2 border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
                  type="number"
                  value={targetValue1}
                  onChange={(e) => {
                    setTargetValue1(parseInt(e.target.value, 10));
                    updateTarget(targetKey1, targetValue1);
                  }}
                />
                <span className="ml-2 text-lg xs:text-base">명</span>
              </div>
              <div className="flex max-w-[28.5rem] w-full items-center mt-2">
                <input
                  className="max-w-[21rem] w-full border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
                  value={targetKey2}
                  onChange={(e) => {
                    setTargetKey2(e.target.value);
                    updateTarget(targetKey2, targetValue2);
                  }}
                />
                <input
                  className="max-w-[5rem] xs:max-w-[3rem] w-full ml-2 border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
                  type="number"
                  value={targetValue2}
                  onChange={(e) => {
                    setTargetValue2(parseInt(e.target.value, 10));
                    updateTarget(targetKey2, targetValue2);
                  }}
                />
                <span className="ml-2 text-lg xs:text-base">명</span>
              </div>
              <div className="flex max-w-[28.5rem] w-full items-center mt-2">
                <input
                  className="max-w-[21rem] w-full border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
                  value={targetKey3}
                  onChange={(e) => {
                    setTargetKey3(e.target.value);
                    updateTarget(targetKey3, targetValue3);
                  }}
                />
                <input
                  className="max-w-[5rem] xs:max-w-[3rem] w-full ml-2 border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
                  type="number"
                  value={targetValue3}
                  onChange={(e) => {
                    setTargetValue3(parseInt(e.target.value, 10));
                    updateTarget(targetKey3, targetValue3);
                  }}
                />
                <span className="ml-2 text-lg xs:text-base">명</span>
              </div>
            </div>
          </div>
          {/* 활동 방법 */}
          <div className="w-full flex items-center justify-between mt-[2rem]">
            <span className="max-w-[5rem] w-full text-lg xs:text-base text-[#676767]">
              활동 방법
            </span>
            <textarea
              className="w-[28.5rem] h-[15rem] border border-[#DDDDDD] p-2 resize-none"
              value={data.a_method}
              onChange={(e) => updateData("a_method", e.target.value)}
            />
          </div>
          {/* 활동 장소 */}
          <div className="w-full flex items-center justify-between mt-[2rem]">
            <span className="max-w-[5rem] w-full text-lg xs:text-base text-[#676767] leading-10">
              활동 장소
            </span>
            <input
              className="w-[28.5rem] border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
              value={data.a_place}
              onChange={(e) => updateData("a_place", e.target.value)}
            />
          </div>
          {/* 활동 시간 */}
          <div className="w-full flex items-center justify-between mt-[2rem]">
            <span className="max-w-[5rem] w-full text-lg xs:text-base text-[#676767] leading-10">
              활동 시간
            </span>
            <input
              className="w-[28.5rem] border border-[#DDDDDD] text-lg xs:text-base px-2 py-1"
              value={data.a_time}
              onChange={(e) => updateData("a_time", e.target.value)}
            />
          </div>
          {/* 가입문의 */}
          <div className="w-full flex items-center justify-between mt-[2rem]">
            <span className="max-w-[5rem] w-full text-lg xs:text-base text-[#676767] leading-10">
              가입문의
            </span>
            <div className="w-[28.5rem] flex justify-between">
              <input
                className="w-[13.5rem] text-lg xs:text-base px-2 py-1 border border-[#DDDDDD]"
                value={inquiryKey}
                onChange={(e) => {
                  setInquiryKey(e.target.value);
                  updateInquiry(inquiryKey, inquiryValue);
                }}
                placeholder="ex. 인스타"
              />
              <input
                className="w-[13.5rem] text-lg xs:text-base px-2 py-1 border border-[#DDDDDD]"
                value={inquiryValue}
                onChange={(e) => {
                  setInquiryValue(e.target.value);
                  updateInquiry(inquiryKey, inquiryValue);
                }}
                placeholder="ex. wlqdp_rkffo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
