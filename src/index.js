import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddVehicle from "./components/AddVehicle";
import VehicleInformation from "./components/VehicleInformation";
import AddItem from "./components/AddItem";
import Main from "./Main";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="addvehicle" element={<AddVehicle />} />
          {/* <Route path="searchvehicle" element={<SearchVehicle />} /> */}
          <Route path="additems" element={<AddItem />} />
          <Route
            path="vehicleinformation/:regNum"
            element={<VehicleInformation />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
