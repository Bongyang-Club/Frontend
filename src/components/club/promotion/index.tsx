const Form = () => {
  return (
    <div className="w-full min-h-full flex flex-col">
      <div className="max-w-4xl w-full h-[100rem] my-10 mx-auto shadow-[0_0_8px_0_rgba(0,0,0,0.3)] flex justify-center bg-white ">
        <div className="mt-[5rem] w-[38rem] relative">
          {/* 탑 */}
          <div className="w-full flex justify-between items-center">
            <span className="font-bold font text-2xl">동아리 홍보 신청</span>
            <button className="w-[6rem] flex justify-center bg-[#D97706] text-white text-sm rounded-sm py-1 px-5">
              신청
            </button>
          </div>
          {/* 동아리 명 */}
          <div className="w-full flex justify-between items-center mt-[3rem]">
            <span className="text-lg text-[#676767] leading-10">동아리명</span>
            <input
              className="w-[28.5rem] py-1 px-2 border border-[#DDDDDD] bg-[#F8F8F8]"
              value={"봉양클럽"}
              readOnly={true}
            />
          </div>
          {/* 지원방법 */}
          <div className="w-full flex justify-between items-center mt-[1.5rem] relative">
            <span className="text-lg text-[#676767] leading-10">지원방법</span>
            <div className="w-[28.5rem] flex">
              <div className="w-[6rem] flex align-middle">
                <input type="checkBox" className="w-[1.2rem] h-[2.5rem]" />
                <span className="ml-[0.7rem] leading-10 text-[1rem] text-[#B1B1B1] ">
                  구글폼
                </span>
              </div>
              <div className="w-[6rem] ml-[2rem] flex align-middle">
                <input type="checkBox" className="w-[1.2rem] h-[2.5rem]" />
                <span className="ml-[0.7rem] leading-10 text-[1rem] text-[#B1B1B1] ">
                  면접
                </span>
              </div>
              <div className="w-[6rem] ml-[2rem] flex align-middle">
                <input type="checkBox" className="w-[1.2rem] h-[2.5rem]" />
                <span className="ml-[0.7rem] leading-10 text-[1rem] text-[#B1B1B1] ">
                  테스트
                </span>
              </div>
            </div>
            <span className="absolute right-0 bottom-0 translate-y-6 font-thin text-[0.8rem] text-[#B1B1B1]">
              ※ 선택하지 않으면 바로 동아리에 가입됩니다.
            </span>
          </div>
          {/* 정보 */}
          <div className="w-full flex justify-end">
            <div className="w-[35rem] mt-[2rem]">
              {/* 링크 */}
              <div className="w-full flex justify-between items-center">
                <span className="text-lg text-[#676767] leading-10">링크</span>
                <input className="w-[28.5rem] py-1 px-2 border border-[#DDDDDD]" />
              </div>
              {/* 신청기간 */}
              <div className="w-full flex justify-between mt-[2rem] items-center">
                <span className="text-lg text-[#676767] leading-10">
                  신청기간
                </span>
                <input className="w-[28.5rem] py-1 px-2 border border-[#DDDDDD]" />
              </div>
              {/* 면접 */}
              <div className="w-full flex justify-between mt-[2rem]">
                <span className="text-lg text-[#676767] leading-10">면접</span>
                <div className="w-[28.5rem] flex relative">
                  <div className="flex align-middle items-center">
                    <input
                      type="radio"
                      name="interview"
                      className="w-[1.4rem] h-[2rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-[1rem] text-[#B1B1B1]">
                      개인별
                    </span>
                  </div>
                  <div className="ml-8 flex align-middle items-center">
                    <input
                      type="radio"
                      name="interview"
                      className="w-[1.4rem] h-[2rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-[1rem] text-[#B1B1B1]">
                      전체
                    </span>
                  </div>
                  <span className="absolute bottom-0 translate-y-7 font-thin text-[#B1B1B1] text-[0.8rem]">
                    ※ 개인별의 경우 신청자 확인후 면접 일정을 공지해주시기
                    바랍니다.
                  </span>
                </div>
              </div>
              {/* 테스트 */}
              <div className="w-full flex justify-between mt-[2rem]">
                <span className="text-lg text-[#676767] leading-10">
                  테스트
                </span>
                <div className="w-[28.5rem] flex">
                  <div className="flex align-middle items-center">
                    <input
                      type="radio"
                      name="interview"
                      className="w-[1.4rem] h-[2rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-[1rem] text-[#B1B1B1]">
                      개인별
                    </span>
                  </div>
                  <div className="ml-8 flex align-middle items-center">
                    <input
                      type="radio"
                      name="interview"
                      className="w-[1.4rem] h-[2rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-[1rem] text-[#B1B1B1]">
                      전체
                    </span>
                  </div>
                </div>
              </div>
              {/* 시간 */}
              <div className="w-full flex justify-between mt-[1.5rem] items-center">
                <span className="text-lg text-[#676767] leading-10">시간</span>
                <input className="w-[28.5rem] py-1 px-2 border border-[#DDDDDD]" />
              </div>
              {/* 장소 */}
              <div className="w-full flex justify-between mt-[1.5rem] items-center">
                <span className="text-lg text-[#676767] leading-10">장소</span>
                <div className="relative flex">
                  <input className="w-[28.5rem] py-1 px-2 border border-[#DDDDDD]" />
                  <span className="absolute bottom-0 translate-y-10 font-thin text-[#B1B1B1] text-[0.8rem]">
                    ※ 아직 정해지지 않았다면 신청자 확인후 공지해주시기
                    바랍니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 모집대상 */}
          <div className="w-full flex justify-between mt-[4rem]">
            <span className="text-lg text-[#676767] leading-10">모집대상</span>
            <div className="flex flex-col">
              <div className="w-[28.5rem]">
                <input className="w-[21rem] py-1 px-2 border text-sm border-[#DDDDDD]" />
                <input className="w-[5rem] py-1 px-2 border text-sm ml-2 border-[#DDDDDD]" />
                <span className="ml-2 text-[1.2rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] py-1 px-2 border text-sm border-[#DDDDDD]" />
                <input className="w-[5rem] py-1 px-2 border text-sm ml-2 border-[#DDDDDD]" />
                <span className="ml-2 text-[1.2rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] py-1 px-2 border text-sm border-[#DDDDDD]" />
                <input className="w-[5rem] py-1 px-2 border text-sm ml-2 border-[#DDDDDD]" />
                <span className="ml-2 text-[1.2rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] py-1 px-2 border text-sm border-[#DDDDDD]" />
                <input className="w-[5rem] py-1 px-2 border text-sm ml-2 border-[#DDDDDD]" />
                <span className="ml-2 text-[1.2rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] py-1 px-2 border text-sm border-[#DDDDDD]" />
                <input className="w-[5rem] py-1 px-2 border text-sm ml-2 border-[#DDDDDD]" />
                <span className="ml-2 text-[1.2rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] py-1 px-2 border text-sm border-[#DDDDDD]" />
                <input className="w-[5rem] py-1 px-2 border text-sm ml-2 border-[#DDDDDD]" />
                <span className="ml-2 text-[1.2rem]">명</span>
              </div>
            </div>
          </div>
          {/* 활동 방법 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767]">활동 방법</span>
            <textarea className="w-[28.5rem] h-[15rem] py-1 px-2 border border-[#DDDDDD] resize-none" />
          </div>
          {/* 활동 장소 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">활동 장소</span>
            <input className="w-[28.5rem] py-1 px-2 border text-sm border-[#DDDDDD]" />
          </div>
          {/* 활동 시간 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">활동 시간</span>
            <input className="w-[28.5rem] py-1 px-2 border text-sm border-[#DDDDDD]" />
          </div>
          {/* 가입문의 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">가입문의</span>
            <input
              className="w-[28.5rem] py-1 px-2 border text-sm border-[#DDDDDD]"
              placeholder="ex. 인스타 : wlqdp_rkffo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
