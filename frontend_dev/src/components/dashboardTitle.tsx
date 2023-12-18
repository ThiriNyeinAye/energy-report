import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import CachedIcon from "@mui/icons-material/Cached";

export const DashboardTitle = () => {
  return (
    <div className="py-3 mb-5 flex justify-between border-b-2 border-gray-300">
      <div className="flex flex-row">
        <div className="text-4xl font-bold">
          Report
          <span className="text-lg font-normal ps-8">Home / Report</span>
        </div>
      </div>
      <div className="flex flex-row">
        <Button
          variant="contained"
          sx={{
            borderRadius: "40px",
            marginRight: "10px",
          }}
        >
          <SettingsIcon sx={{ color: "#fff", fontSize: "25px" }} />
        </Button>
        <Button variant="contained" sx={{ borderRadius: "40px" }}>
          <CachedIcon sx={{ color: "#fff", fontSize: "25px" }} />
        </Button>
      </div>
    </div>
  );
};
