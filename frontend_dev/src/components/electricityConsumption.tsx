import { useEffect, useState } from "react";
import plugImage from "../assets/plug.png";
import { electricityAPI } from "../API/url";
import { fetchAPI } from "../API/service";

export const ElectricityConsumption = () => {
  const [result, setResult] = useState<any>(null);

  const api = async () => {
    const data = await fetchAPI(electricityAPI);
    setResult(data);
  };

  useEffect(() => {
    //api();
  }, []);

  return (
    <div className="bg-white my-1 p-5 text-xl font-medium col-span-2">
      ELECTRIC CONSUMPTION
      <div className="flex justify-center">
        <img className="py-10" width={100} src={plugImage} />
      </div>
      {/* <div className="text-center text-3xl text-blue-400 pb-5">
        {result[0].totalConsumption} kWh
      </div> */}
    </div>
  );
};
