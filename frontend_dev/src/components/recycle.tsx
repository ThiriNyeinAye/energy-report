import { useEffect, useState } from "react";
import { RecycleBarchart } from "./charts/recycleBarchart";
import { fetchAPI } from "../API/service";
import { recycleAPI } from "../API/url";

export const Recycle = () => {
  const [result, setResult] = useState();
  const api = async () => {
    const data = await fetchAPI(recycleAPI);
    setResult(data);
  };
  useEffect(() => {
    // api();
  }, []);
  return (
    <div className="bg-white my-2 p-5 text-xl font-medium">
      Recyclable vs non-recyclable
      {result ? (
        <RecycleBarchart recycleData={result} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
