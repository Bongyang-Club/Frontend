import React from "react";
import Form from "@/components/login/form";
import Img from "@/components/login/img";

const Login = () => {
  return (
    <div className="bg-[#D97706] flex justify-center items-center h-screen">
      <div className="bg-white max-w-[1000px] w-full max-h-[550px] h-full flex flex-row">
        <Img />
        <Form />
      </div>
    </div>
  );
};

export default Login;
