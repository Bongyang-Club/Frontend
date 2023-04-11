import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  const [data, setData] = useState();
  return data ? (
    <div className="w-[200px] h-[200px] cursor-pointer">
      <img src="http://placehold.it/200x200" />
    </div>
  ) : (
    <div className="w-[200px] h-[200px] flex justify-center items-center bg-[#CCCCCC] cursor-pointer">
      <FontAwesomeIcon icon={faPlus} />
    </div>
  );
};

export default Content;
