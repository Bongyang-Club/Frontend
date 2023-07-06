import React, { useCallback, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";

type Img = {
  router: ParsedUrlQuery;
  user: any;
  club: any;
};

const Img = ({ router, user, club }: Img) => {
  const [img, setImg] = useState(
    club.imageUrl !== null
      ? `http://localhost:8080/${club.imageUrl}`
      : "http://placehold.it/500x500"
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onUploadImage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) {
        return;
      }
      var maxSize = 5 * 1024 * 1024;
      var fileSize = e.target.files[0].size;

      if (fileSize > maxSize) {
        alert("첨부파일 사이즈는 5MB 이내로 등록 가능합니다.");
        return false;
      }
      console.log(e.target.files[0]);
      const imageSrc = URL.createObjectURL(e.target.files[0]);
      setImg(imageSrc);
      sendImg(e.target.files[0]);
    },
    []
  );

  const sendImg = useCallback((file: any) => {
    const data = {
      id: Number(router.clubid),
    };

    const formData = new FormData();
    formData.append("multipartFile", file);
    formData.append(
      "request",
      new Blob([JSON.stringify(data)], {
        type: "application/json",
      })
    );

    axios
      .post("/api/schoolclub/club/image", formData, {
        headers: {
          "Content-Type": `multipart/form-data`,
        },
      })
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          alert(e.response.data);
          location.href = "/login";
        }
      });
  }, []);

  const onClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <div className="cursor-pointer max-w-[30rem] w-full h-full overflow-hidden flex justify-center items-center xs:hidden">
      {user ? (
        <>
          <div className="relative w-[500px] h-[500px] overflow-hidden flex justify-center items-center">
            <img
              src={img}
              className="z-10 opacity-70 top-0 w-full h-full object-cover"
              onClick={() => onClick()}
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
              onClick={() => onClick()}
            />
          </div>
        </>
      ) : (
        <div className="relative w-[500px] h-[500px] overflow-hidden flex justify-center items-center">
          <img
            src={img}
            className="z-10 opacity-100 top-0 w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Img;
