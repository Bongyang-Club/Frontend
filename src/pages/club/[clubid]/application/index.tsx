import List from "@/assets/list";
import { setInterceptor } from "@/assets/setInterceptor";
import {
  faArrowRotateRight,
  faCheck,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const test = [
  {
    memberJoinId: 3,
    name: "일일일",
    studentId: "3201",
    applicationAt: "2023-04-24",
  },

  {
    memberJoinId: 4,
    name: "이이이",
    studentId: "3202",
    applicationAt: "2023-04-24",
  },

  {
    memberJoinId: 5,
    name: "삼삼삼",
    studentId: "3203",
    applicationAt: "2023-04-24",
  },
  {
    memberJoinId: 6,
    name: "사사사",
    studentId: "3204",
    applicationAt: "2023-04-24",
  },
];

const Application = () => {
  const [checked, setChecked] = useState<any>([]);
  const router = useRouter();
  const [clubid, setClubid] = useState<any>();
  const [data, setData] = useState<any>();

  const checkedList = () => {
    const list = [];
    console.log(checked);
    for (let i = 0; i < data.length; i++) {
      if (checked[data[i]["memberJoinId"]] == true) {
        list.push(data[i]["memberJoinId"]);
      }
    }

    return list;
  };

  useEffect(() => {
    if (!router.isReady) return;
    setClubid(router.query.clubid);
  }, [router.isReady]);

  useEffect(() => {
    if (!clubid) return;
    load();
  }, [clubid]);

  const load = () => {
    const token = localStorage.getItem("token");
    setInterceptor(token);
    const body = {
      schoolClubId: clubid,
    };

    axios
      .post("/api/schoolclub/application/list", body)
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          alert(res.data.message);
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
        } else {
          setData(test);
        }
      });
  };

  const deny = () => {
    const token = localStorage.getItem("token");
    setInterceptor(token);

    const body = {
      schoolClubId: Number(clubid),
      memberJoinIds: checkedList(),
    };

    console.log(body);

    axios
      .put("/api/schoolclub/application/deny", body)
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          alert(res.data.message);
          // location.href = "/";
        } else {
          window.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          // location.href = "/login";
        }
      });
  };

  const approve = () => {
    const token = localStorage.getItem("token");
    setInterceptor(token);

    const body = {
      schoolClubId: Number(clubid),
      memberJoinIds: checkedList(),
    };

    console.log(body);

    axios
      .put("/api/schoolclub/application/approve", body)
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          alert(res.data.message);
          // location.href = "/";
        } else {
          //.location.reload();
        }
      })
      .catch((e) => {
        console.log(e);
        if (e.response.status === 401) {
          alert(e.response.data);
          // location.href = "/login";
        }
      });
  };

  return data ? (
    <List
      data={data}
      text={"신청자 없음"}
      checked={checked}
      setChecked={setChecked}
      th={["신청자명", "학번", "신청일"]}
      td={["memberJoinId", "name", "studentId", "applicationAt"]}
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
            approve();
          }}
        />
      </div>
      <div className="w-10 flex justify-center">
        <FontAwesomeIcon
          icon={faTrashCan}
          className="cursor-pointer"
          onClick={() => {
            deny();
          }}
        />
      </div>
    </List>
  ) : (
    <div>data is undefined</div>
  );
};

export default Application;
