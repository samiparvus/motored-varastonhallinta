import React from "react";
import { FormControl, TextField, Button, Autocomplete } from "@mui/material";
import VehicleInformation from "./components/VehicleInformation";
import VehicleData from "./Data.json";

// 1. Hakuominaisuus toimivaksi
// 2. Luo kunnon objektit pyörille
// 3. Hakuominaisuus backendistä
// 4. Muut muutokset UI:hin joista on puhuttu (kuten haussa näkyviin mahdolliset rekisterinumerot (löytyy kirjanmerkeistä))

// Haku vie /vehicleinformation/REKKARI sivulle, jossa voi muokata
// kyseisen rekkarin objektia ja tallentaa muutokset jotka viedään bäkkäriin

// Search bar toimimaan niin pitäisi onnistua mukavammin haku

const Main = () => {
  const vehicleArray = [];
  let val = "";
  const data = VehicleData.map(({ rekisterinumero }) => ({ rekisterinumero }));
  for (let i = 0; i < data.length; i++) {
    vehicleArray.push(data[i].rekisterinumero);
  }

  const handleSubmit = (rekkari) => {
    VehicleInformation(this.rekkari);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Autocomplete
          placeholder="Rekisterinumero"
          options={vehicleArray}
          sx={{ width: 300, marginBottom: 1 }}
          onChange={(event, value) => (val = value)}
          onSubmit={() => handleSubmit(val)}
          renderInput={(params) => (
            <TextField {...params} label="Rekisterinumero" />
          )}
        />
      </FormControl>
      <Button type="submit" variant="contained">
        Etsi
      </Button>
    </form>
  );
};

export default Main;
