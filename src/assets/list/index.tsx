import Checkbox from "@/assets/checkbox";
import { faCheck, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useImperativeHandle, useState } from "react";

type ListProps = {
  data: any;
  ref: any;
  children?: React.ReactNode;
  th: any;
  td: any;
};

const List = ({ data, ref, children, th, td }: ListProps) => {
  const [checked, setChecked] = useState<any>([]);
  const [checkedAll, setCheckedAll] = useState(false);
  const [search, setSearch] = useState("");

  useImperativeHandle(ref, () => ({
    checkedList,
  }));

  const checkedList = () => {
    const list = [];
    for (let i = 0; i < data.length; i++) {
      if (checked[i] == true) {
        list.push(i);
      }
    }

    console.log(list);

    return list;
  };

  useEffect(() => {
    if (!data) return;
    checkAll({ target: { checked: false } });
  }, [data]);

  const checkAll = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const newCheckAll = e.target.checked;
    let newCheck = {};
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      newCheck = { ...newCheck, [data[i][td[0]]]: newCheckAll };
    }
    setChecked(newCheck);
    setCheckedAll(newCheckAll);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = { ...checked, [e.target.id]: e.target.checked };
    setChecked(newChecked);

    const values = [];
    for (let i = 0; i < data.length; i++) {
      values.push(newChecked[data[i][td[0]]]);
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
          {children}
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
          <div className="w-40 flex justify-center">{th[0]}</div>
          <div className="w-40 flex justify-center">{th[1]}</div>
          <div className="w-60 flex justify-center ml-auto">{th[2]}</div>
        </div>
        {data.map((v: any, i: any) => (
          <div
            key={i}
            className="flex flex-row h-10 items-center text-black bg-white rounded-md"
          >
            <div className="w-20 flex justify-center">
              <Checkbox
                id={v[td[0]]}
                checked={checked[v[td[0]]]}
                onChange={handleCheck}
                // eslint-disable-next-line react/no-children-prop
                children={
                  checked[v[td[0]]] ? <FontAwesomeIcon icon={faCheck} /> : null
                }
                disabled={false}
              />
            </div>
            <div className="w-40 flex justify-center">{v[td[1]]}</div>
            <div className="w-40 flex justify-center">{v[td[2]]}</div>
            <div className="w-60 flex justify-center ml-auto">{v[td[3]]}</div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>data is undefined</div>
  );
};

export default List;
