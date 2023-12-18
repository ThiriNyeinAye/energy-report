import {
  DashboardTitle,
  OverviewCharts,
  ElectricityConsumption,
  CarbonFootprint,
  WaterLevelChartComponent,
  WaterUsage,
  Recycle,
  WasteCollection,
  Abnormalities,
} from "../components";

const Dashboard = () => {
  return (
    <div className="px-7 py-3">
      <DashboardTitle />
      <div className="printElement">
        <OverviewCharts />
        <div className="flex grid grid-cols-6 gap-4">
          <ElectricityConsumption />
          <CarbonFootprint />
        </div>
        <div className="flex grid grid-cols-6 gap-4">
          <WaterLevelChartComponent />
          <WaterUsage />
        </div>
        <div className="flex grid grid-cols-2 gap-4">
          <Recycle />
          <WasteCollection />
        </div>
        <Abnormalities />
      </div>
    </div>
  );
};

export default Dashboard;
