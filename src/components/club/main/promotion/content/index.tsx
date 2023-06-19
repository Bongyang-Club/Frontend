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
  return (
    <div className="max-w-[200px] w-full max-h-[200px] h-full flex justify-center cursor-pointer">
      <img src={data.img !== "" ? data.img : "http://placehold.it/200x200"} />
    </div>
  );
};

export default Content;
