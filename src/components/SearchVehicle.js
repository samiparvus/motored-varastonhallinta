import * as React from "react";
import { FormControl, Autocomplete, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export default SearchVehicle = () => {
  const [data, setData] = (useState = "");

  const searchRegNum = () => {};

  return (
    <div className="SearchVehicle">
      <FormControl action="/">
        <Autocomplete
          disablePortal
          id="licenseNumber"
          options={["ASD-123", "ASD-321"]}
          getOptionLabel={(option) => option}
          onChange={(event, val) => console.log(val)}
          sx={{ width: 200, margin: "1em" }}
          renderInput={(params) => <TextField {...params} label="Auto" />}
        />
        <Button component={Link} to="/additems" variant="contained">
          Etsi
        </Button>
      </FormControl>
    </div>
  );
};
