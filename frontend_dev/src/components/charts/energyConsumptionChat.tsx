import {
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  energyConsumption: any;
}

export const EnergyConsumptionChart = (props: Props) => {
  const { energyConsumption } = props;
  return (
    <div className="col-span-4" style={{ width: "100%", height: 350 }}>
      <div className="flex justify-around pb-5">
        <div className="font-medium text-xl text-center">
          137.0M <span className="text-xs text-red-500">+18%</span>
          <div className="text-sm text-gray-400">Consumption (kWh)</div>
        </div>
        <div className="font-medium text-xl text-center">
          $12.4M <span className="text-xs text-red-500">+15%</span>
          <div className="text-sm text-gray-400">Cost</div>
        </div>
      </div>
      <ResponsiveContainer>
        <ComposedChart data={energyConsumption}>
          <XAxis
            dataKey="createdAt"
            stroke="#8884d8"
            tickFormatter={(timeStr) =>
              new Date(timeStr).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            }
          />{" "}
          <YAxis />
          <Tooltip />
          <CartesianGrid vertical={true} horizontal={true} stroke="#ccc" />
          <Bar dataKey="energy_meter" fill="#0095ff" barSize={30} />
          <Line type="monotone" dataKey="average" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
