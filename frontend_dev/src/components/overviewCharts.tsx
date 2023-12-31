import { useEffect, useState } from "react";
import { EnergyConsumptionChart } from "./charts/energyConsumptionChat";
import { OverviewBarChart } from "./charts/overviewBarChart";
import { energyConsumptionAPI } from "../API/url";
import { fetchAPI } from "../API/service";

export const OverviewCharts = () => {
  const [energyData, setEnergyData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await fetchAPI(energyConsumptionAPI);
    data = data.map((d: any) => {
      return { ...d, average: 20 };
    });
    setEnergyData(data);
  };

  return (
    <div className="flex grid grid-cols-5 bg-white px-4 py-8 my-2">
      {energyData ? (
        <>
          <OverviewBarChart />
          <EnergyConsumptionChart energyConsumption={energyData} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
