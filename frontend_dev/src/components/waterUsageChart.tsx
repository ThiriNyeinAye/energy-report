import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { fetchAPI } from "../API/service";
import { currentWaterUsage } from "../API/url";

export const WaterUsage = () => {
  const [result, setResult] = useState<any>(null);
  const api = async () => {
    const data = await fetchAPI(currentWaterUsage);
    setResult(data);
  };
  useEffect(() => {
    // api();
  }, []);

  if (result === null) {
    return (
      <div className="bg-white my-2 p-5 text-xl font-medium col-span-2 ">
        Loading...
      </div>
    );
  }
  return (
    <div className="bg-white my-2 p-5 text-xl font-medium col-span-2 ">
      Water Usage
      <div className="flex justify-center">
        <div className="w-[50%]">
          <CircularProgressbar
            value={result?.currentWaterLevel}
            text={`${result?.currentWaterLevel}%`}
          />
          <div className="text-sm text-center pt-4 text-gray-400">
            Current Water Level is {result.currentWaterLevel + result.unit}
          </div>
        </div>
      </div>
    </div>
  );
};
