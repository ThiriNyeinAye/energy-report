import { useEffect, useState } from "react";
import { fetchAPI } from "../API/service";
import { abnormalitiesAPI } from "../API/url";
import moment from "moment";

export const Abnormalities = () => {
  const [result, setResult] = useState<any>(null);

  const api = async () => {
    const data = await fetchAPI(abnormalitiesAPI);
    setResult(data);
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <div className="bg-white my-2 p-5 text-xl font-medium border-gray-200 border-b">
        Abnormalities
      </div>
      {result?.map((v: any, k: number) => (
        <div
          key={k}
          className="bg-white rounded mb-2 p-2 px-5 text-xl font-medium flex grid grid-cols-4 items-center  text-base"
        >
          <div>
            <span className="text-red-500">{v.deviceName} </span>
            {v.info}
          </div>
          <div className="pl-5">
            <span className="bg-green-600 rounded-full px-2 p-1 text-white text-sm">
              {v.status}
            </span>
          </div>
          <div>{moment(v.createdAt).format("DD/MM/YYYY hh:mm")}</div>
          <div className="pl-5">
            <span
              className={`${
                v.info === "Plug Open" ? "bg-red-600" : "bg-green-600"
              } rounded-full px-2 p-1 text-white text-sm`}
            >
              {v.info}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
