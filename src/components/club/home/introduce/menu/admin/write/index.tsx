interface propsType {
  setModal: React.Dispatch<boolean>;
}

const Write = ({ setModal }: propsType) => {
  function onClickHandler() {
    setModal(false);
  }

  return (
    <div className="w-[38rem] h-[36rem] bg-white fixed bottom-0 right-10 z-50 shadow-2xl rounded-2xl">
      <div className="w-full h-12 bg-slate-200 rounded-t-2xl flex justify-between p-3">
        <span>새 공지</span>
        <button className="border-none" onClick={onClickHandler}>
          X
        </button>
      </div>
      <textarea
        className="w-full h-[30rem] p-3 resize-none"
        placeholder="내용을 입력하세요."
      />
      <div className="w-full h-12 pl-3">
        <button className="w-24 h-10 bg-blue-500 rounded-3xl text-white tracking-widest">
          보내기
        </button>
      </div>
    </div>
  );
};

export default Write;
