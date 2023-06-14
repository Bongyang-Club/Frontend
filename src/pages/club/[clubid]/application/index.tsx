import Checkbox from "@/assets/checkbox";
import { setInterceptor } from "@/assets/setInterceptor";
import {
  faArrowRotateRight,
  faCheck,
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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

const List = () => {
  const router = useRouter();
  const [clubid, setClubid] = useState<any>();
  const [data, setData] = useState<any>();
  const [checked, setChecked] = useState<any>([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!router.isReady) return;
    setClubid(router.query.clubid);
  }, [router.isReady]);

  useEffect(() => {
    if (!clubid) return;
    load();
  }, [clubid]);

  useEffect(() => {
    if (!data) return;
    checkAll({ target: { checked: false } });
  }, [data]);

  const deny = () => {
    const token = localStorage.getItem("token");
    setInterceptor(token);

    const list = [];
    for (let i = 0; i < data.length; i++) {
      if (checked[i] == true) {
        list.push(i);
      }
    }

    console.log(list);

    const body = {
      schoolClubId: clubid,
      memberJoinIds: list,
    };

    axios
      .put("/api/schoolclub/application/deny", body)
      .then((res) => {
        console.log(res);
        if (res.data.code === 403) {
          alert(res.data.message);
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
        }
      });
  };

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

  const checkAll = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const newCheckAll = e.target.checked;
    let newCheck = {};
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      newCheck = { ...newCheck, [data[i].memberJoinId]: newCheckAll };
    }
    setChecked(newCheck);
    setCheckedAll(newCheckAll);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = { ...checked, [e.target.id]: e.target.checked };
    setChecked(newChecked);

    const values = [];
    for (let i = 0; i < data.length; i++) {
      values.push(newChecked[data[i].memberJoinId]);
    }

    const filterValues = values.filter((data) => data === true);
    setCheckedAll(data.length === filterValues.length);
  };

  return data ? (
    <div className="w-full h-full flex justify-center xs:p-3">
      <div className="max-w-4xl w-full h-full my-10 xs:my-5 rounded-md bg-white">
        <div className="flex flex-row h-10 px-5 pt-2 items-center rounded-t-md text-white bg-[#D97706]">
          <div className="w-10 flex justify-center">
            <Checkbox
              style={
                "w-5 h-5 border border-white bg-[#D97706] flex justify-center items-center "
              }
              checked={checkedAll}
              onChange={checkAll}
              // eslint-disable-next-line react/no-children-prop
              children={checkedAll ? <FontAwesomeIcon icon={faCheck} /> : null}
              disabled={false}
            />
          </div>
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
                deny();
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
          <div className="flex items-center ml-auto">
            <input
              type="text"
              className="px-1 mr-2 w-40 border-b border-white bg-[#D97706]"
              value={search || ""}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="ml-2 w-5 h-5 flex justify-center items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row h-10 items-center pb-2 text-white bg-[#D97706]">
          <div className="w-20 flex justify-center"></div>
          <div className="w-40 flex justify-center">신청자명</div>
          <div className="w-40 flex justify-center">학번</div>
          <div className="w-60 flex justify-center ml-auto">신청일</div>
        </div>
        {data.map((v: any, i: any) => (
          <div
            key={i}
            className="flex flex-row h-10 items-center text-black bg-white rounded-md"
          >
            <div className="w-20 flex justify-center">
              <Checkbox
                style={
                  "w-5 h-5 border border-[#D97706] text-[#D97706] flex justify-center items-center "
                }
                id={v.memberJoinId}
                checked={checked[v.memberJoinId]}
                onChange={handleCheck}
                // eslint-disable-next-line react/no-children-prop
                children={
                  checked[v.memberJoinId] ? (
                    <FontAwesomeIcon icon={faCheck} />
                  ) : null
                }
                disabled={false}
              />
            </div>
            <div className="w-40 flex justify-center">{v.name}</div>
            <div className="w-40 flex justify-center">{v.studentId}</div>
            <div className="w-60 flex justify-center ml-auto">
              {v.applicationAt}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>data is undefined</div>
  );
};

export default List;
