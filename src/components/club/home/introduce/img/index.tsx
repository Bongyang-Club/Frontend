import React, { useCallback, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

type Img = {
  user: boolean;
  club: any;
};

const Img = ({ user, club }: Img) => {
  const [img, setImg] = useState("http://placehold.it/500x500");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      console.log(e.target.files[0]);
      const imageSrc = URL.createObjectURL(e.target.files[0]);
      setImg(imageSrc);
    },
    []
  );

  const sendImg = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();

    const body = {};

    axios
      .post("/api/schoolclub/lub/image", body)
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          alert(res.data.message);
        }
        location.href = "/";
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          location.href = "/login";
        }
      });
  }, []);

  return (
    <div className="cursor-pointer max-w-[30rem] w-full h-full overflow-hidden flex justify-center items-center xs:hidden">
      {user ? (
        <>
          <div className="relative w-[500px] h-[500px] overflow-hidden flex justify-center items-center">
            <img
              src={img}
              className="z-10 opacity-70 top-0 w-full h-full object-cover"
              onClick={() => sendImg()}
            />
          </div>
          <div className="absolute z-20 text-white">
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={onUploadImage}
              className="hidden"
            />
            <FontAwesomeIcon
              icon={faPlus}
              size="2x"
              onClick={() => sendImg()}
            />
          </div>
        </>
      ) : (
        <div className="relative w-[500px] h-[500px] overflow-hidden flex justify-center items-center">
          <img
            src={club.imageUrl}
            className="z-10 opacity-100 top-0 w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Img;
