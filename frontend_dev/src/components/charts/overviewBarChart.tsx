import { ResponsiveContainer, BarChart, Bar } from "recharts";
import { GeneratePdf } from "../tools/generatePdf";

export const OverviewBarChart = () => {
  return (
    <div className="h-[400px] mx-7 text-center ">
      <ResponsiveContainer height="70%">
        <BarChart height={40} data={data}>
          <Bar dataKey="consumption" barSize={20} fill="#b80000" />
        </BarChart>
      </ResponsiveContainer>
      <div className="text-white bg-blue-500 w-100 rounded-full my-2 p-2">
        Overview
      </div>
      <div
        className="w-100 border border-blue-500 hover:border-blue-200 py-2 rounded-full cursor-pointer"
        onClick={GeneratePdf}
      >
        ESG Readings
      </div>
    </div>
  );
};

const data = [
  {
    name: "Value 1",
    consumption: 5000,
  },
  {
    name: "Value 2",
    consumption: 4000,
  },
  {
    name: "Value 3",
    consumption: 3000,
  },
  {
    name: "Value 4",
    consumption: 4000,
  },
  {
    name: "Value 5",
    consumption: 5000,
  },
];
