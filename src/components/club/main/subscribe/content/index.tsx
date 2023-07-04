import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Content = {
  data: Data;
  type?: boolean;
};

type Data = {
  name: string;
  clubId: string;
  image: any;
};

const Content = ({ data, type = true }: Content) => {
  const [check, setCheck] = useState(false);
  if (type) {
    return (
      <div className="relative w-[200px] h-[200px] cursor-pointer shadow-md">
        <div
          onMouseOut={() => setCheck(false)}
          className={
            "absolute h-full w-full flex justify-center items-center z-10 font-bold text-xl " +
            (check ? "" : "hidden")
          }
        >
          {data.name}
        </div>
        <img
          className={
            "absolute top-0 left-0 w-full h-full object-cover z-0 " +
            (check ? "opacity-20 " : "")
          }
          onMouseOver={() => setCheck(true)}
          src={
            data.image === null
              ? "http://placehold.it/200x200"
              : `http://localhost:8080/${data.image.url}`
          }
        />
      </div>
    );
  } else {
    return (
      <div className="w-[200px] h-[200px] flex justify-center items-center bg-[#CCCCCC] cursor-pointer">
        <FontAwesomeIcon icon={faPlus} />
      </div>
    );
  }
};

export default Content;
