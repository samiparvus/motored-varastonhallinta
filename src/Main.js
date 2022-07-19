import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  TextField,
  Button,
  Autocomplete,
  Container,
} from "@mui/material";
import VehicleData from "./data.json";

// 1. Hakuominaisuus backendistä
// 2. Esineen lisäys hyllypaikalle
// 3. Uuden ajoneuvon lisäys
// X. Muut muutokset UI:hin joista on puhuttu (kuten haussa näkyviin mahdolliset rekisterinumerot (löytyy kirjanmerkeistä))

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

    navigate(`/vehicleinformation/${rekkari}`);
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
