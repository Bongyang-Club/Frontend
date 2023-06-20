import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface propsType {
  setModal: React.Dispatch<boolean>;
}

const Write = ({ setModal }: propsType) => {
  function onClickHandler() {
    setModal(false);
  }

  return (
    <div
      className="w-full h-full top-0 left-0 fixed flex justify-center items-center z-50 bg-black bg-opacity-30"
      // onClick={() => onClickHandler()}
    >
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
        />
        <div className="p-3">
          <button className="w-full h-10 bg-[#D97706] rounded-3xl text-white tracking-widest">
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Write;
