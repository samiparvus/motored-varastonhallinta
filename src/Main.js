import React from "react";
import { Routes, Route } from "react-router-dom";

import AddVehicle from "./AddVehicle";

const Main = () => {
  return (
    <Routes>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/addvehicle" component={AddVehicle}></Route>
    </Routes>
  );
};

export default Main;
