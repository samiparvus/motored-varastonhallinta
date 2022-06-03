import React from "react";
import { FormControl, Autocomplete, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import VehicleInformation from "./VehicleInformation";

const Main = () => {
  let rekkari = "";

  return (
    <div className="Main">
      <FormControl>
        <Autocomplete
          disablePortal
          id="licenseNumber"
          options={["ASD-123"]}
          getOptionLabel={(option) => option}
          onChange={(e, val) => (rekkari = val)}
          sx={{ width: 300, margin: "1em" }}
          renderInput={(params) => (
            <TextField {...params} label="Rekisterinumero" />
          )}
        />
        <Button
          component={Link}
          to="/vehicleinformation"
          variant="contained"
          onClick={VehicleInformation(rekkari)}
        >
          Etsi
        </Button>
      </FormControl>
    </div>
  );
};

export default Main;
