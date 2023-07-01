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

const Write = ({ setModal, router }: propsType) => {
  const [text, setText] = useState("");
  function onClickHandler() {
    setModal(false);
  }
  const onClick = () => {
    setInterceptor(getToken());

    const body = {
      clubId: router.clubid,
      notice: text,
    };

    axios
      .post("/api/schoolclub/notice", body)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        if (res.data.code === 403) {
          location.href = "/";
        } else {
          window.location.reload();
        }
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
    <div className="w-full h-full top-0 left-0 fixed flex justify-center items-center z-50 bg-black bg-opacity-30">
      <div className="w-[38rem] xs:w-[20rem] h-[36rem] xs:h-[20rem] bg-white fixed xs:static flex flex-col justify-between bottom-10 right-10 z-50 shadow-2xl rounded-2xl">
        <div className="w-full h-12 bg-[#F5F5F5] border-b rounded-t-2xl flex items-center justify-between p-3">
          <span>새 공지</span>
          <button className="border-none" onClick={() => onClickHandler()}>
            <FontAwesomeIcon icon={faXmark} width={20} height={20} />
          </button>
        </div>
        <textarea
          className="w-full h-full p-3 resize-none"
          placeholder="내용을 입력하세요."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="p-3">
          <button
            className="w-full h-10 bg-[#D97706] rounded-3xl text-white tracking-widest"
            onClick={onClick}
          >
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
