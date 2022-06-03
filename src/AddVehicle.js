import * as React from "react";
import {
  Autocomplete,
  Radio,
  RadioGroup,
  TextField,
  FormControl,
  FormControlLabel,
  Button,
} from "@mui/material";

let array = ["asd", "asdf", "asdfg"];

function AddVehicle(rekkari) {
  return (
    <div className="AddVehicle">
      <FormControl>
        <Autocomplete
          disablePortal
          id="licenseNumber"
          options={array}
          getOptionLabel={(option) => option}
          onChange={(e, val) => console.log(val)}
          sx={{ width: 300, margin: "1em" }}
          renderInput={(params) => (
            <TextField {...params} label="Rekisterinumero" required />
          )}
        />
        <Autocomplete
          disablePortal
          id="model"
          options={array}
          getOptionLabel={(option) => option}
          onChange={(e, val) => console.log(val)}
          sx={{ width: 300, margin: "1em" }}
          renderInput={(params) => (
            <TextField {...params} label="Nimi / malli" />
          )}
        />
        <TextField
          id="info"
          label="Yleistietoja"
          multiline={true}
          sx={{ width: 300, margin: "1em" }}
        />
        <RadioGroup
          aria-labelledby="status"
          defaultValue="Myynnissä"
          name="radio-buttons-group"
          required
          onChange={(e, val) => console.log(val)}
          sx={{ margin: "1em" }}
        >
          <FormControlLabel
            value="Myynnissä"
            control={<Radio />}
            label="Myynnissä"
          />
          <FormControlLabel value="Myyty" control={<Radio />} label="Myyty" />
          <FormControlLabel
            value="Arkistoitu"
            control={<Radio />}
            label="Arkistoitu"
          />
        </RadioGroup>
        <Autocomplete
          disablePortal
          id="employeeName"
          options={array}
          getOptionLabel={(option) => option}
          onChange={(e, val) => console.log(val)}
          sx={{ width: 300, margin: "1em" }}
          renderInput={(params) => (
            <TextField {...params} label="Myyjän nimi" />
          )}
        />
        <Autocomplete
          disablePortal
          id="shelfLocation"
          options={array}
          getOptionLabel={(option) => option}
          onChange={(e, val) => console.log(val)}
          sx={{ width: 300, margin: "1em" }}
          renderInput={(params) => (
            <TextField {...params} label="Hyllypaikka" />
          )}
        />
        <Button
          variant="contained"
          // onClick={() => {
          //   alert(
          //     shelfLocation.value +
          //       " " +
          //       model.value +
          //       " " +
          //       info.value +
          //       " " +
          //       employeeName.value +
          //       " "
          //   );
          // }}
        >
          Lisää
        </Button>
      </FormControl>
    </div>
  );
}

export default AddVehicle;
