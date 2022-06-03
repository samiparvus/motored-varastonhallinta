import * as React from "react";
import { FormControl, Autocomplete, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const SearchVehicle = () => {
  return (
    <div className="SearchVehicle">
      <FormControl>
        <Autocomplete
          disablePortal
          id="licenseNumber"
          options={["ASD-123", "ASD-321"]}
          getOptionLabel={(option) => option}
          onChange={(e, val) => console.log(val)}
          sx={{ width: 300, margin: "1em" }}
          renderInput={(params) => (
            <TextField {...params} label="Rekisterinumero" />
          )}
        />
        <Button component={Link} to="/additems" variant="contained">
          Etsi
        </Button>
      </FormControl>
    </div>
  );
};

export default SearchVehicle;
