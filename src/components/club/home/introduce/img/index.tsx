import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Img = () => {
  const sendImg = () => {};

  return (
    <div className="cursor-pointer max-w-[30rem] w-full h-full overflow-hidden flex justify-center items-center ">
      <img
        src="http://placehold.it/500x500"
        className="z-10 opacity-70"
        onClick={() => sendImg()}
      />
      <div className="absolute z-20 text-white">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </div>
    </div>
  );
};

export default Img;
