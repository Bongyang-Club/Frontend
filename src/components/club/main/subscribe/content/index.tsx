import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

type Content = {
  data: Data;
  type?: boolean;
};

type Data = {
  clubId: string;
  image: {
    url: string;
  };
};

const Content = ({ data, type = true }: Content) => {
  if (type) {
    return (
      <div className="w-[200px] h-[200px] cursor-pointer shadow-md">
        <img
          className="w-full h-full flex justify-center items-center"
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
