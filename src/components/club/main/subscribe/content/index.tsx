import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Content = {
  data: Data;
};

type Data = {
  id: string;
  img: string;
};

const Content = ({ data }: Content) => {
  if (data.img !== "") {
    return (
      <div className="w-[200px] h-[200px] cursor-pointer">
        <img src={data.img} />
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
