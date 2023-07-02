import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { setInterceptor } from "@/assets/setInterceptor";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { getToken } from "@/util/useToken";

type Notification = {
  user: any;
};

const dummyData = [
  {
    user: "김무일",
    createdAt: "21시간 전",
    content:
      "가입이 완료되면\n카카오톡 : (카카오톡 링크)\n디스코드 : (디스코드 링크)\n로 들어와 주세요 :)",
  },
];

const Notification = ({ user }: Notification) => {
  const router = useRouter();
  const clubid = router.query.clubid;
  const [check, setCheck] = useState(false);
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (!router.query || Object.keys(router.query).length === 0) return;
    load();
  }, [router.query]);

  const load = () => {
    setInterceptor(getToken());
    axios
      .get(`/api/schoolclub/notices/${clubid}`)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        if (res.data.code === 403) {
          location.href = "/";
        } else {
          setData(res.data.result);
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          location.href = "/login";
        }
        setData(dummyData);
      });
  };

  const deny = (noticeId: number) => {
    setInterceptor(getToken());

    if (!clubid) return;
    if (!noticeId) return;

    const body = {
      clubId: Number(clubid),
      noticeId: noticeId,
    };

    axios
      .put("/api/schoolclub/notice", body)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        if (res.data.code === 403) {
          location.href = "/";
        } else {
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          location.href = "/login";
        }
      });
  };

  return data ? (
    data.map((v: any, i: any) => (
      <div
        key={i}
        className="flex flex-col bg-[#Ffffff] max-w-4xl w-full px-10 pt-7 pb-10 xs:p-5 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-10"
      >
        <div className="flex flex-row justify-between items-center mb-3">
          <div className="flex flex-col justify-start">
            <div className="mb-1 font-medium text-lg xs:text-base">
              작성자 {v.writer}
            </div>
            <div className="text-[#969696] font-light text-sm xs:text-xs">
              {v.createdAt}
            </div>
          </div>
          {user !== "" ? (
            <div
              className={
                "rounded-full w-10 xs:w-8 h-10 xs:h-8 flex justify-center items-center " +
                (check ? "bg-[#eeeeee]" : "")
              }
              onClick={() => setCheck(!check)}
            >
              <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
              {check ? (
                <div className="absolute z-10 mt-5 flex w-[8rem] -translate-x-12 translate-y-10">
                  <div className="flex-auto rounded-lg bg-white text-sm shadow-lg ring-1 ring-gray-900/5">
                    <div
                      className="relative text-center py-3 px-4 hover:bg-gray-50 rounded-t-lg  border-b"
                      onClick={() => deny(v.id)}
                    >
                      <button className="select-none font-regular text-gray-900 w-max h-max">
                        삭제하기
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="justify-items-center mt-3 whitespace-pre-wrap xs:text-sm">
          {v.content}
        </div>
      </div>
    ))
  ) : (
    <></>
  );
};

export default Notification;
