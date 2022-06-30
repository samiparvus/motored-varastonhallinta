import React, { useState } from "react";
import { createSearchParams, Route, useNavigate } from "react-router-dom";
import {
  FormControl,
  TextField,
  Button,
  Autocomplete,
  Container,
} from "@mui/material";
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
  const navigate = useNavigate();
  const [selectedRegnum, setSelectedRegnum] = useState(null);

  const data = VehicleData.map(({ rekisterinumero }) => ({ rekisterinumero }));
  for (let i = 0; i < data.length; i++) {
    vehicleArray.push(data[i].rekisterinumero);
  }

  function handleSearch(event, val) {
    event.preventDefault();

    let rekkari = val;

    navigate({
      pathname: "/vehicleinformation",
      search: createSearchParams({
        regNum: rekkari,
      }).toString(),
    });
  }

  return (
    <Container>
      <FormControl>
        <Autocomplete
          placeholder="Rekisterinumero"
          options={vehicleArray}
          sx={{ width: 300, marginBottom: 1 }}
          renderInput={(params) => (
            <TextField {...params} label="Rekisterinumero" />
          )}
          value={selectedRegnum}
          onChange={(event, newRegnum) => {
            setSelectedRegnum(newRegnum);
          }}
        />
        <Button
          variant="contained"
          onClick={(event, val) => handleSearch(event, selectedRegnum)}
        >
          Etsi
        </Button>
      </FormControl>
    </Container>
  );
};

export default Main;
