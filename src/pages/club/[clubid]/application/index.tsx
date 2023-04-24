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
        }
      });
  };

  const checkAll = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const newCheckAll = e.target.checked;
    let newCheck = {};
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      newCheck = { ...newCheck, [i]: newCheckAll };
    }
    setChecked(newCheck);
    setCheckedAll(newCheckAll);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = { ...checked, [e.target.id]: e.target.checked };
    setChecked(newChecked);

    const values = [];
    for (let i = 0; i < data.length; i++) {
      values.push(newChecked[i]);
    }

    const filterValues = values.filter((data) => data === true);
    setCheckedAll(data.length === filterValues.length);
  };

  return data ? (
    <div className="w-full h-full flex justify-center">
      <div className="max-w-4xl w-full h-full my-10 rounded-md bg-white">
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
              icon={faTrashCan}
              className="cursor-pointer"
              onClick={() => {
                // 체크한 리스트 넘겨주면서 삭제
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
                id={i}
                checked={checked[i]}
                onChange={handleCheck}
                // eslint-disable-next-line react/no-children-prop
                children={
                  checked[i] ? <FontAwesomeIcon icon={faCheck} /> : null
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
