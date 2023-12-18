import { useEffect, useState } from "react";
import { WaterLevelChart } from "./charts/waterLevelBarchart";
import { fetchAPI } from "../API/service";
import { waterLevelAPI } from "../API/url";

export const WaterLevelChartComponent = () => {
  const [result, setResult] = useState();
  const api = async () => {
    const data = await fetchAPI(waterLevelAPI);
    console.log("water >> ", data);
    setResult(data);
  };
  useEffect(() => {
    api();
  }, []);

  return (
    <div className="bg-white my-2 p-5 text-xl font-medium col-span-4 ">
      Water Level (Water Detention Tank)
      {result ? (
        <WaterLevelChart waterLevelData={result} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
