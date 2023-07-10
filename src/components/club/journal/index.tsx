import { getToken } from "@/util/useToken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const JournalForm = () => {
  const router = useRouter();
  const clubid: any = router.query.clubid;

  const [data, setData] = useState({
    clubId: 0,
    activityDate: "2023-07-01T15:05:09.712Z",
    activityTime: "",
    place: "",
    participantCount: 0,
    absents: "",
    total: 0,
    content: "",
    leaderRatting: "",
    studentRatting: "",
    dueDate: "2023-07-01T15:05:09.712Z",
    duePlan: "",
    dueGoal: "",
    etc: "",
  });

  function updateData(key: string, value: string | boolean | number) {
    setData({ ...data, [key]: value });
  }

  function onSubmit() {
    fetch(`http://localhost:8080/api/schoolclub/journal`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify(data),
    }).then(() => {
      window.location.href = "/";
    });
  }

  useEffect(() => {
    updateData("clubId", clubid);
  }, [clubid]);

  return (
    <div className="w-full h-full flex justify-center items-center xs:p-3">
      <div className="max-w-4xl w-full h-full my-10 xs:my-0 py-20 xs:py-5 xs:px-5 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] flex justify-center bg-white ">
        <div className="max-w-[38rem] w-full">
          {/* 탑 */}
          <div className="w-full flex justify-between items-center">
            <span className="font-bold text-2xl xs:text-lg">
              동아리 일지 작성
            </span>
            <button
              className="w-[6rem] flex ml-6 xs:mx-0 mb-3 xs:mb-0 bg-[#D97706] text-white text-sm rounded-sm py-1 px-5"
              onClick={onSubmit}
            >
              작성
            </button>
          </div>
          <div className="flex justify-between">
            {/* 학교 명 */}
            <div className="w-[20rem] flex items-center justify-between mt-[3rem] xs:mt-5">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                학교 명
              </span>
              <input
                className="max-w-[20rem] w-full border border-[#DDDDDD] bg-[#F8F8F8] px-2 py-1 text-lg xs:text-base"
                value={"경북소프트웨어고등학교"}
                readOnly={true}
              />
            </div>
            {/* 장소 */}
            <div className="w-[15rem] flex items-center justify-between mt-[3rem] xs:mt-5">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                장소
              </span>
              <input
                className="max-w-[12rem] w-full border border-[#DDDDDD] px-2 py-1 text-lg xs:text-base"
                value={data.place}
                onChange={(e) => updateData("place", e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-between">
            {/* 활동 일시 */}
            <div className="w-[20rem] flex items-center justify-between mt-[1.5rem] xs:mt-5">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                활동 일시
              </span>
              <input
                className="max-w-[20rem] w-full border border-[#DDDDDD] px-2 py-1 text-lg xs:text-base"
                value={data.activityDate}
              />
            </div>
            {/* 활동 시간 */}
            <div className="w-[15rem] flex items-center justify-between mt-[1.5rem] xs:mt-5">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                활동 시간
              </span>
              <input
                className="max-w-[18rem] w-full border border-[#DDDDDD] px-2 py-1 text-lg xs:text-base"
                value={data.activityTime}
                onChange={(e) => updateData("activityTime", e.target.value)}
              />
            </div>
          </div>
          {/* 참가자 */}
          <div className="w-full flex items-center justify-between mt-[3rem] xs:mt-5">
            <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
              참가자
            </span>
            <table className="w-full border border-[#DDDDDD]">
              <tbody>
                {/* 참가인원 */}
                <tr>
                  <td className="border border-[#DDDDDD] align-middle text-center p-1 w-[10rem]">
                    <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                      참가인원
                    </span>
                  </td>
                  <td className="border border-[#DDDDDD]">
                    <input
                      className="w-full px-2 py-1 text-lg xs:text-base"
                      type="number"
                      min="0"
                      value={data.participantCount}
                      onChange={(e) =>
                        updateData("participantCount", e.target.value)
                      }
                    />
                  </td>
                </tr>
                {/* 결석인원 */}
                <tr>
                  <td className="border border-[#DDDDDD] align-middle text-center p-1 w-[10rem]">
                    <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                      결석인원
                    </span>
                  </td>
                  <td className="border border-[#DDDDDD]">
                    <input
                      className="w-full px-2 py-1 text-lg xs:text-base"
                      value={data.absents}
                      onChange={(e) => updateData("absents", e.target.value)}
                    />
                  </td>
                </tr>
                {/* 누 계 */}
                <tr>
                  <td className="border border-[#DDDDDD] align-middle text-center p-1 w-[10rem]">
                    <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                      누 계
                    </span>
                  </td>
                  <td className="border border-[#DDDDDD]">
                    <input
                      className="w-full px-2 py-1 text-lg xs:text-base"
                      type="number"
                      min="0"
                      value={data.total}
                      onChange={(e) => updateData("total", e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 활동 내용 */}
          <div className="flex">
            <div className="w-full flex items-center justify-between mt-[1.5rem] xs:mt-5">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                활동 내용
              </span>
              <textarea
                className="border border-[#DDDDDD] w-full h-[15rem] resize-none"
                value={data.content}
                onChange={(e) => updateData("content", e.target.value)}
              ></textarea>
            </div>
          </div>
          {/* 동아리 대표 평가 */}
          <div className="flex">
            <div className="w-full flex items-center justify-between mt-[1.5rem] xs:mt-5">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                <p>동아리</p>
                <p>대표 평가</p>
              </span>
              <textarea
                className="border border-[#DDDDDD] w-full h-[8rem] resize-none"
                value={data.leaderRatting}
                onChange={(e) => updateData("leaderRatting", e.target.value)}
              ></textarea>
            </div>
          </div>
          {/* 동아리원 평가 */}
          <div className="flex">
            <div className="w-full flex items-center justify-between mt-[1.5rem] xs:mt-5">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                동아리원 평가
              </span>
              <textarea
                className="border border-[#DDDDDD] w-full h-[8rem] resize-none"
                value={data.studentRatting}
                onChange={(e) => updateData("studentRatting", e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* 동아리 계획 */}
          <div className="w-full flex items-center justify-between mt-[1.5rem] xs:mt-5">
            <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
              <p>동아리</p>
              <p>계획</p>
            </span>
            <textarea
              className="border border-[#DDDDDD] w-full h-[8rem] resize-none"
              value={data.duePlan}
              onChange={(e) => updateData("duePlan", e.target.value)}
            ></textarea>
          </div>

          {/* 동아리 목표 */}
          <div className="w-full flex items-center justify-between mt-[1.5rem] xs:mt-5">
            <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
              <p>동아리</p>
              <p>목표</p>
            </span>
            <textarea
              className="border border-[#DDDDDD] w-full h-[8rem] resize-none"
              value={data.dueGoal}
              onChange={(e) => updateData("dueGoal", e.target.value)}
            ></textarea>
          </div>

          {/* 기타 */}
          <div className="flex">
            <div className="w-full flex items-center justify-between mt-[1.5rem] xs:mt-5">
              <span className="text-lg max-w-[5rem] w-full text-[#676767] leading-10 xs:text-base">
                기타
              </span>
              <textarea
                className="border border-[#DDDDDD] w-full h-[8rem] resize-none"
                value={data.etc}
                onChange={(e) => updateData("etc", e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalForm;
