import * as React from "react";
import {
  FormControl,
  Button,
  List,
  TextField,
  ListSubheader,
  ListItem,
  Autocomplete,
  Grid,
} from "@mui/material";

const AddItem = (rekkari) => {
  const esineLista = ["pakoputki", "rengas", "vaihteisto", "moottori"];
  const hyllyLista = [
    "A1",
    "A2",
    "B1",
    "B2",
    "C1",
    "C2",
    "D1",
    "D2",
    "E1",
    "E2",
  ];

  const listItems = esineLista.map((esine) => <li>{esineLista}</li>);

  const hyllyObj = { hylly: String, esineet: [] };
  const hylly1 = hyllyObj;

  hylly1.hylly = "A1";
  hylly1.esineet = esineLista;

  console.log(rekkari);

  return (
    <div className="AddItem">
      <FormControl>
        <List
          sx={{ width: "100%", maxWidth: 360 }}
          aria-labelledby="item-list-subheader"
          subheader={
            <ListSubheader id="item-list-subheader">Esineet</ListSubheader>
          }
        >
          <ListItem>
            <ul>{listItems}</ul>
          </ListItem>
        </List>
        <Autocomplete
          disablePortal
          id="hyllyt"
          options={hyllyLista}
          renderInput={(params) => (
            <TextField {...params} label="Hyllypaikka" />
          )}
        />
        <TextField fullWidth label="Esine" style={{ margin: "0.1em" }} />
        <Button variant="contained" style={{ width: 206, margin: "0.1em" }}>
          Lisää
        </Button>
      </FormControl>
    </div>
  );
};

export default AddItem;
