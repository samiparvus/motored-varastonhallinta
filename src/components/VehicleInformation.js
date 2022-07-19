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
import { useParams } from "react-router-dom";

const vehicleData = [
  {
    rekisterinumero: "ABC-123",
    malli: "Yamaha",
    yleistietoja: "Malli on Yamaha",
    status: "Myyty",
    myyjanNimi: "Teppo Tulppu",
    hyllypaikka: "B2",
  },
  {
    rekisterinumero: "DEF-456",
    malli: "Kawasaki",
    yleistietoja: "Malli on Kawasaki",
    status: "Myynnissä",
    myyjanNimi: "Hannu Hanhi",
    hyllypaikka: "A1",
  },
];

const shelfData = [
  { hylly: "A1", esineet: ["pakoputki", "rengas", "vaihteisto", "moottori"] },
  { hylly: "B2", esineet: ["kaasupoljin", "kytkin"] },
];

// class VehicleData extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       rekisterinumero: "",
//       malli: "",
//       yleistietoja: "",
//       status: "",
//       myyjanNimi: "",
//     };
//   }
// }

const VehicleInformation = () => {
  const malliLista = [];
  const myyjaLista = [];
  const { regNum } = useParams();
  const [selected, setSelected] = React.useState([]);

  const filterVehicleData = vehicleData.filter((item) =>
    item.rekisterinumero.includes(regNum)
  );
  const filterShelfData = shelfData.filter((item) =>
    item.hylly.includes(filterVehicleData[0].hyllypaikka)
  );
  // map the values for <Autocomplete />
  for (let i = 0; i < vehicleData.length; i++) {
    myyjaLista.push(vehicleData[i].myyjanNimi);
    malliLista.push(vehicleData[i].malli);
  }

  const [vehicleInformation, setVehicleInformation] = React.useState({
    rekisterinumero: filterVehicleData[0].rekisterinumero,
    malli: filterVehicleData[0].malli,
    yleistietoja: filterVehicleData[0].yleistietoja,
    status: filterVehicleData[0].status,
    myyjanNimi: filterVehicleData[0].myyjanNimi,
    hyllypaikka: filterVehicleData[0].hyllypaikka,
  });

  console.log(vehicleInformation);

  return (
    <Grid container>
      <Grid xs={3.2} minWidth="332px">
        <FormControl>
          <TextField
            name="Rekisterinumero"
            label="Rekisterinumero"
            required
            defaultValue={filterVehicleData[0].rekisterinumero}
            onChange={(e) =>
              setVehicleInformation({
                ...vehicleInformation,
                rekisterinumero: e.target.value,
              })
            }
            sx={{ width: 300, margin: "1em" }}
          />
          <Autocomplete
            disablePortal
            options={malliLista}
            getOptionLabel={(option) => option}
            sx={{ width: 300, margin: "1em" }}
            defaultValue={filterVehicleData[0].malli}
            onChange={(e, val) =>
              setVehicleInformation({
                ...vehicleInformation,
                malli: val,
              })
            }
            renderInput={(params) => (
              <TextField {...params} label="Nimi / malli" />
            )}
          />
          <TextField
            id="info"
            multiline={true}
            sx={{ width: 300, margin: "1em" }}
            defaultValue={filterVehicleData[0].yleistietoja}
            onChange={(e) =>
              setVehicleInformation({
                ...vehicleInformation,
                yleistietoja: e.target.value,
              })
            }
          />
          <RadioGroup
            aria-labelledby="status"
            defaultValue={filterVehicleData[0].status}
            name="radio-buttons-group"
            required
            onChange={(e) =>
              setVehicleInformation({
                ...vehicleInformation,
                status: e.target.value,
              })
            }
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
            defaultValue={filterVehicleData[0].myyjanNimi}
            options={myyjaLista}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField {...params} label="Myyjän nimi" />
            )}
            onChange={(e, val) =>
              setVehicleInformation({
                ...vehicleInformation,
                myyjanNimi: val,
              })
            }
            sx={{ width: 300, margin: "1em" }}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={() => {
              console.log(vehicleInformation);
            }}
          >
            Tallenna
          </Button>
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
                <p style={{ fontWeight: "bold" }}>{shelfData[0].hylly}</p>
                {shelfData[0].esineet.map((esine) => {
                  return <li>{esine}</li>;
                })}
              </Typography>
            </ul>
          </ListItem>
        </List>
        <TextField label="Lisää esine hyllypaikalle" />
        <Button variant="contained" type="submit">
          Lisää
        </Button>
      </Grid>
    </Grid>
  );
};

export default VehicleInformation;
