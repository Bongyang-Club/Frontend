import { setInterceptor } from "@/assets/setInterceptor";
import { getToken } from "@/util/useToken";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";

interface propsType {
  setModal: React.Dispatch<boolean>;
  router: ParsedUrlQuery;
}

const LeaderChange = ({ setModal, router }: propsType) => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");

  function onClickHandler() {
    setModal(false);
  }

  const send = () => {
    setInterceptor(getToken());

    if (!router.clubid) return;
    if (studentId === "") {
      alert("새동아리장의 학번을 입력해주세요");
      return;
    }
    if (name === "") {
      alert("새동아리장의 이름을 입력해주세요");
      return;
    }

    const body = {
      clubId: router.clubid,
      studentId: studentId,
      name: name,
    };

    axios
      .put("/api/schoolclub/leader/change", body)
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          location.href = "/";
        } else {
          window.location.reload();
        }
        alert(res.data.message);
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          location.href = "/login";
        }
      });
  };

  return (
    <div className="w-full h-full top-0 left-0 fixed flex justify-center items-center z-40 bg-black bg-opacity-30">
      <div className="w-[20rem] bg-white flex flex-col justify-between shadow-2xl rounded-2xl z-50">
        <div className="w-full h-12 bg-[#F5F5F5] border-b rounded-t-2xl flex items-center justify-between p-3">
          <span>동아리장 변경</span>
          <button className="border-none" onClick={() => onClickHandler()}>
            <FontAwesomeIcon icon={faXmark} width={20} height={20} />
          </button>
        </div>
        <label className="text-sm font-300 px-3 pt-2">새동아리장의 학번</label>
        <input
          className="w-[calc(100%-1.5rem)] h-full px-3 py-1 border-b mx-3 my-1"
          placeholder="1111"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <label className="text-sm font-300 px-3 pt-4">새동아리장의 이름</label>
        <input
          className="w-[calc(100%-1.5rem)] h-full px-3 py-1 border-b mx-3 my-1"
          placeholder="홍길동"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              send();
            }
          }}
        />
        <div className="px-3 pt-2 pb-3">
          <button
            className="w-full h-10 bg-[#D97706] rounded-3xl text-white tracking-widest"
            onClick={send}
          >
            변경하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderChange;
