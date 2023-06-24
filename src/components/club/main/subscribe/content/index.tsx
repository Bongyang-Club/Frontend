import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Content = {
  data: Data;
};

type Data = {
  clubId: string;
  image: string;
};

const Content = ({ data }: Content) => {
  if (data.image !== "") {
    return (
      <div className="w-[200px] h-[200px] cursor-pointer shadow-md">
        <img src={data.image} />
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
