const Form = () => {
  return (
    <div className="w-full h-[63.3rem]">
      <div className="max-w-4xl h-[63rem] mt-10 mx-auto shadow-[0_0_8px_0_rgba(0,0,0,0.3)] flex justify-center bg-white ">
        <div className="mt-[5rem] w-[38rem] relative">
          {/* 탑 */}
          <div className="w-full flex justify-between">
            <span className="font-bold font text-2xl">동아리 생성 신청</span>
            <button className="w-[6rem] bg-[#D97706] text-white">신청</button>
          </div>
          {/* 동아리 분류 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">
              동아리 분류
            </span>
            <div className="w-[25.5rem] flex relative">
              <div className="flex align-middle">
                <input
                  type="radio"
                  name="interview"
                  className="w-[1.2rem] h-[2.5rem] accent-gray-500"
                />
                <span className="ml-2 leading-9 text-md text-[#B1B1B1]">
                  개인별
                </span>
              </div>
              <div className="ml-8 flex align-middle">
                <input
                  type="radio"
                  name="interview"
                  className="w-[1.2rem] h-[2.5rem] accent-gray-500"
                />
                <span className="ml-2 leading-9 text-md text-[#B1B1B1]">
                  전체
                </span>
              </div>
            </div>
          </div>
          {/* 동아리 명 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">동아리 명</span>
            <input className="w-[25.5rem] border border-[#DDDDDD] text-lg px-2 py-1" />
          </div>
          {/* 동아리 장 이름 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">
              동아리 장 이름
            </span>
            <input
              className="w-[25.5rem] border border-[#DDDDDD] bg-[#F8F8F8] text-lg px-2 py-1"
              value={"박대형"}
              readOnly={true}
            />
          </div>
          {/* 담당 선생님 성함 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-10">
              담당 선생님 성함
            </span>
            <input className="w-[25.5rem] border border-[#DDDDDD] text-lg px-2 py-1" />
          </div>
          {/* 동아리 설명 */}
          <div className="w-full flex justify-between mt-[2rem]">
            <span className="text-lg text-[#676767] leading-[30rem]">
              활동 방법
            </span>
            <textarea className="w-[25.5rem] h-[30rem] border border-[#DDDDDD] px-3 resize-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
