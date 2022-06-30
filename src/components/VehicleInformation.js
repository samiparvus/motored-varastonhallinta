import * as React from "react";
import {
  Autocomplete,
  Radio,
  RadioGroup,
  TextField,
  FormControl,
  FormControlLabel,
  Button,
  Grid,
  Divider,
  Typography,
  ListItem,
  List,
} from "@mui/material";
import { Route, useParams } from "react-router-dom";

const VehicleInformation = (rekkari) => {
  const esineLista = ["pakoputki", "rengas", "vaihteisto", "moottori"];
  const malliLista = ["Kawasaki", "Honda", "Yamaha"];
  const myyjäLista = ["Sami Testi", "Teppo Tulppu"];

  let { regNum } = useParams();
  console.log("wat: " + regNum);

  return (
    <Grid container>
      <Grid xs={3.2} minWidth="332px">
        <FormControl>
          <TextField
            label="Rekisterinumero"
            required
            defaultValue="ASD-123"
            sx={{ width: 300, margin: "1em" }}
          />
          <Autocomplete
            disablePortal
            id="model"
            options={malliLista}
            getOptionLabel={(option) => option}
            onChange={(e, val) => console.log(val)}
            sx={{ width: 300, margin: "1em" }}
            defaultValue="Yamaha"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nimi / malli"
                defaultValue="Yamaha"
              />
            )}
          />
          <TextField
            id="info"
            multiline={true}
            sx={{ width: 300, margin: "1em" }}
            defaultValue="Rekisterinumero ASD-123 Hyllypaikka C-2                              Merkki Yamaha"
          />
          <RadioGroup
            aria-labelledby="status"
            defaultValue="Myyty"
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
            options={myyjäLista}
            getOptionLabel={(option) => option}
            onChange={(e, val) => console.log(val)}
            sx={{ width: 300, margin: "1em" }}
            defaultValue="Teppo Tulppu"
            renderInput={(params) => (
              <TextField
                {...params}
                label="Myyjän nimi"
                defaultValue="Teppo Tulppu"
              />
            )}
          />
          <Button variant="contained">Tallenna</Button>
        </FormControl>
      </Grid>
      <Grid xs={0.1}>
        <Divider
          orientation="vertical"
          style={{ marginRight: "-1px" }}
        ></Divider>
      </Grid>
      <Grid sx={{ marginLeft: "0.5em" }}>
        <List>
          <ListItem>
            <ul>
              <Typography>
                <p style={{ fontWeight: "bold" }}>C-2</p>
                {esineLista.map((esine) => {
                  return <li>{esine}</li>;
                })}
              </Typography>
            </ul>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default VehicleInformation;
