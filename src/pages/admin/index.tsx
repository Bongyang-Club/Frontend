import List from "@/assets/list";
import { setInterceptor } from "@/assets/setInterceptor";
import { faArrowRotateRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const test = [
  {
    memberJoinId: 3,
    name: "일일일",
    studentId: "3201",
    joinAt: "2023-04-24",
  },

  {
    memberJoinId: 4,
    name: "이이이",
    studentId: "3202",
    joinAt: "2023-04-24",
  },

  {
    memberJoinId: 5,
    name: "삼삼삼",
    studentId: "3203",
    joinAt: "2023-04-24",
  },
  {
    memberJoinId: 6,
    name: "사사사",
    studentId: "3204",
    joinAt: "2023-04-24",
  },
];

const ClubList = () => {
  const [data, setData] = useState<any>();
  const list = useRef<any>();

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    const token = localStorage.getItem("token");
    setInterceptor(token);

    axios
      .get("/api/schoolclub/members")
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          // alert(res.data.message);
          // location.href = "/";
        } else {
          setData(res.data.result);
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          location.href = "/login";
        } else {
          setData(test);
        }
      });
  };

  return data ? (
    <List
      data={data}
      ref={list}
      th={["동아리명", "동아리장", "전공/자율"]}
      td={["memberJoinId", "name", "studentId", "joinAt"]}
    >
      <div className="w-10 flex justify-center">
        <FontAwesomeIcon
          icon={faArrowRotateRight}
          className="cursor-pointer"
          onClick={() => {
            window.location.reload();
          }}
        />
      </div>
      <div className="w-10 flex justify-center">
        <FontAwesomeIcon
          icon={faCheck}
          className="cursor-pointer"
          onClick={() => {
            // deny();
          }}
        />
      </div>
    </List>
  ) : (
    <div>data is undefined</div>
  );
};

export default ClubList;
