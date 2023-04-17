const Form = () => {
  return (
    <div className="w-full h-[100.3rem]">
      <div className="max-w-4xl h-[100rem] mt-10 mx-auto shadow-[0_0_8px_0_rgba(0,0,0,0.3)] flex justify-center bg-white ">
        <div className="mt-[5rem] w-[38rem] h-[66rem] relative">
          {/* 탑 */}
          <div className="w-full flex justify-between">
            <span className="font-bold font text-3xl">동아리 홍보 신청</span>
            <button className="w-[7rem] bg-[#D97706] text-white">신청</button>
          </div>
          {/* 동아리 명 */}
          <div className="w-full flex justify-between mt-[3rem]">
            <span className="text-xl text-[#676767] leading-10">동아리명</span>
            <input
              className="w-[28.5rem] h-[2.5rem] border border-[#DDDDDD] bg-[#F8F8F8] px-3 text-[1.3rem]"
              value={"봉양클럽"}
              readOnly={true}
            />
          </div>
          {/* 지원방법 */}
          <div className="w-full flex justify-between mt-[1.5rem] relative">
            <span className="text-xl text-[#676767] leading-10">지원방법</span>
            <div className="w-[28.5rem] flex">
              <div className="w-[6rem] flex align-middle">
                <input type="checkBox" className="w-[1.4rem] h-[2.5rem]" />
                <span className="ml-[0.7rem] leading-10 text-[1.2rem] text-[#B1B1B1] ">
                  구글폼
                </span>
              </div>
              <div className="w-[6rem] ml-[2rem] flex align-middle">
                <input type="checkBox" className="w-[1.4rem] h-[2.5rem]" />
                <span className="ml-[0.7rem] leading-10 text-[1.2rem] text-[#B1B1B1] ">
                  면접
                </span>
              </div>
              <div className="w-[6rem] ml-[2rem] flex align-middle">
                <input type="checkBox" className="w-[1.4rem] h-[2.5rem]" />
                <span className="ml-[0.7rem] leading-10 text-[1.2rem] text-[#B1B1B1] ">
                  테스트
                </span>
              </div>
            </div>
            <span className="absolute right-0 bottom-0 translate-y-6 text-[0.8rem] text-[#B1B1B1]">
              ※ 선택하지 않으면 바로 동아리에 가입됩니다.
            </span>
          </div>
          {/* 정보 */}
          <div className="w-full flex justify-end">
            <div className="w-[35rem] mt-[2rem]">
              {/* 링크 */}
              <div className="w-full flex justify-between">
                <span className="text-xl text-[#676767] leading-10">링크</span>
                <input className="w-[28.5rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
              </div>
              {/* 신청기간 */}
              <div className="w-full flex justify-between mt-[2rem]">
                <span className="text-xl text-[#676767] leading-10">
                  신청기간
                </span>
                <input className="w-[28.5rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
              </div>
              {/* 면접 */}
              <div className="w-full flex justify-between mt-[2rem]">
                <span className="text-xl text-[#676767] leading-10">면접</span>
                <div className="w-[28.5rem] flex relative">
                  <div className="flex align-middle">
                    <input
                      type="radio"
                      name="interview"
                      className="w-[1.4rem] h-[2.5rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-[1.3rem]">개인별</span>
                  </div>
                  <div className="ml-8 flex align-middle">
                    <input
                      type="radio"
                      name="interview"
                      className="w-[1.4rem] h-[2.5rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-[1.3rem]">전체</span>
                  </div>
                  <span className="absolute bottom-0 translate-y-7 text-[#B1B1B1] text-[0.8rem]">
                    ※ 개인별의 경우 신청자 확인후 면접 일정을 공지해주시기
                    바랍니다.
                  </span>
                </div>
              </div>
              {/* 테스트 */}
              <div className="w-full flex justify-between mt-[2rem]">
                <span className="text-xl text-[#676767] leading-10">
                  테스트
                </span>
                <div className="w-[28.5rem] flex">
                  <div className="flex align-middle">
                    <input
                      type="radio"
                      name="test"
                      className="w-[1.4rem] h-[2.5rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-[1.3rem]">개인별</span>
                  </div>
                  <div className="ml-8 flex align-middle">
                    <input
                      type="radio"
                      name="test"
                      className="w-[1.4rem] h-[2.5rem] accent-gray-500"
                    />
                    <span className="ml-2 leading-9 text-[1.3rem]">전체</span>
                  </div>
                </div>
              </div>
              {/* 시간 */}
              <div className="w-full flex justify-between mt-[1.5rem]">
                <span className="text-xl text-[#676767] leading-10">시간</span>
                <input className="w-[28.5rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
              </div>
              {/* 장소 */}
              <div className="w-full flex justify-between mt-[1.5rem]">
                <span className="text-xl text-[#676767] leading-10">장소</span>
                <div className="relative flex">
                  <input className="w-[28.5rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
                  <span className="absolute bottom-0 translate-y-10 text-[#B1B1B1] text-[0.8rem]">
                    ※ 아직 정해지지 않았다면 신청자 확인후 공지해주시기
                    바랍니다.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* 모집대상 */}
          <div className="w-full flex justify-between mt-[4rem]">
            <span className="text-xl text-[#676767] leading-10">모집대상</span>
            <div className="flex flex-col">
              <div className="w-[28.5rem]">
                <input className="w-[21rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
                <input className="w-[5rem] h-[2.5rem] ml-2 border border-[#DDDDDD] px-3" />
                <span className="ml-2 text-[1.5rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
                <input className="w-[5rem] h-[2.5rem] ml-2 border border-[#DDDDDD] px-3" />
                <span className="ml-2 text-[1.5rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
                <input className="w-[5rem] h-[2.5rem] ml-2 border border-[#DDDDDD] px-3" />
                <span className="ml-2 text-[1.5rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
                <input className="w-[5rem] h-[2.5rem] ml-2 border border-[#DDDDDD] px-3" />
                <span className="ml-2 text-[1.5rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
                <input className="w-[5rem] h-[2.5rem] ml-2 border border-[#DDDDDD] px-3" />
                <span className="ml-2 text-[1.5rem]">명</span>
              </div>
              <div className="w-[28.5rem] mt-2">
                <input className="w-[21rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
                <input className="w-[5rem] h-[2.5rem] ml-2 border border-[#DDDDDD] px-3" />
                <span className="ml-2 text-[1.5rem]">명</span>
              </div>
            </div>
          </div>
          {/* 활동 방법 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-xl text-[#676767]">활동 방법</span>
            <textarea className="w-[28.5rem] h-[15rem] border border-[#DDDDDD] px-3 resize-none" />
          </div>
          {/* 활동 장소 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-xl text-[#676767] leading-10">활동 장소</span>
            <input className="w-[28.5rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
          </div>
          {/* 활동 시간 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-xl text-[#676767] leading-10">활동 시간</span>
            <input className="w-[28.5rem] h-[2.5rem] border border-[#DDDDDD] px-3" />
          </div>
          {/* 가입문의 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-xl text-[#676767] leading-10">가입문의</span>
            <input
              className="w-[28.5rem] h-[2.5rem] border border-[#DDDDDD] px-3"
              placeholder="ex. 인스타 : wlqdp_rkffo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
