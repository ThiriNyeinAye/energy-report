import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  waterLevelData: any;
}
export const WaterLevelChart = (props: Props) => {
  const { waterLevelData } = props;
  return (
    <div className="col-span-4 pt-10" style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart width={600} height={300} data={waterLevelData}>
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
          <YAxis type="number" tickCount={6} domain={[0, 1]} />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="currentWaterLevel" fill="#0095ff" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
