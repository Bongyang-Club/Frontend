import { getToken } from "@/util/useToken";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, {
    method: "get",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  }).then((res) => res.json());

const JournalList = () => {
  const router = useRouter();
  const clubid = router.query.clubid;
  const { data, error } = useSWR(`/api/schoolclub/journal/${clubid}`, fetcher);

  console.log(data);

  if (error) return "";
  else if (!data) return "";
  else
    return (
      <div
        className="flex flex-row justify-center"
        style={{ minHeight: "calc(100vh - 65px)" }}
      >
        <div className="flex flex-col max-w-4xl w-full xs:p-3">
          {data.result?.map((journal: any, key: any) => (
            <div
              key={key}
              className="flex flex-col bg-[#Ffffff] max-w-4xl w-full px-10 pt-7 pb-10 xs:p-5 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] mt-10"
            >
              <div className="flex flex-row justify-between items-center mb-3">
                <div className="w-full flex justify-between">
                  <div className="mb-1 font-medium text-lg xs:text-base">
                    {journal.date}
                  </div>
                  <a href={`/api/${journal.path}`} download>
                    다운로드
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default JournalList;
