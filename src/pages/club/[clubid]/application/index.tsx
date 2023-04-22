import Checkbox from "@/assets/checkbox";
import {
  faArrowRotateRight,
  faCheck,
  faMagnifyingGlass,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const List = () => {
  const [data, setData] = useState([
    { i: "0", name: "박대형", id: "3208", date: "2023-03-20" },
    { i: "1", name: "임준형", id: "3208", date: "2023-03-20" },
  ]);
  const [checked, setChecked] = useState<any>({ "1": false, "2": false });
  const [checkedAll, setCheckedAll] = useState(false);

  const checkAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckAll = e.target.checked;
    let newCheck = {};
    for (let i = 0; i < data.length; i++) {
      newCheck = { ...newCheck, [data[i].i]: newCheckAll };
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

  return (
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
            <FontAwesomeIcon icon={faArrowRotateRight} />
          </div>
          <div className="w-10 flex justify-center">
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
          <div className="flex items-center ml-auto">
            <input
              type="text"
              className="px-1 mr-2 w-40 border-b border-white bg-[#D97706]"
            />
            <div className="ml-2 w-5 h-5 flex justify-center items-center">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>
        <div className="flex flex-row h-10 items-center pb-2 text-white bg-[#D97706]">
          <div className="w-20 flex justify-center"></div>
          <div className="w-40 flex justify-center">신청자명</div>
          <div className="w-40 flex justify-center">학번</div>
          <div className="w-60 flex justify-center ml-auto">신청일</div>
        </div>
        {data.map((v, i) => (
          <div
            key={i}
            className="flex flex-row h-10 items-center text-black bg-white rounded-md"
          >
            <div className="w-20 flex justify-center">
              <Checkbox
                style={
                  "w-5 h-5 border border-[#D97706] text-[#D97706] flex justify-center items-center "
                }
                id={v.i}
                checked={checked[v.i]}
                onChange={handleCheck}
                // eslint-disable-next-line react/no-children-prop
                children={
                  checked[v.i] ? <FontAwesomeIcon icon={faCheck} /> : null
                }
                disabled={false}
              />
            </div>
            <div className="w-40 flex justify-center">{v.name}</div>
            <div className="w-40 flex justify-center">{v.id}</div>
            <div className="w-60 flex justify-center ml-auto">{v.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;