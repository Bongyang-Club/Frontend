import React from "react";
import Image from "next/image";

const Img = () => {
  return (
    <div className="relative w-[450px] h-full overflow-hidden">
      <Image
        className="absolute z-10 top-2 left-2"
        src="/gbsw-logo.png"
        alt="gbsw-logo"
        width={30}
        height={30}
      />
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/school.jpg"
        alt="school"
        width={825}
        height={700}
      />
    </div>
  );
};

export default Img;
