import React from "react";
import NavigationBars from "../src/NavigationBars";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Card, Container, Grid, Button, TextField} from "@material-ui/core";
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      padding: "10px"
    },
    upload: {
      '& > *': {
        margin: theme.spacing(10),
      },
    },
    input: {
      display: 'none',
    },
  }),
);


const sizes = [
  {
    value: '1',
    label: '100+',
  },
  {
    value: '2',
    label: '200+',
  },
  {
    value: '3',
    label: '300+',
  },
  {
    value: '4',
    label: '400+',
  },
  {
    value: '5',
    label: '500+',
  },
];

const useStyles1 = makeStyles((theme: Theme) =>
createStyles({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}),
);

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);


export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };


  const classes1 = useStyles1();
  const [size, setSize] = React.useState('1');

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };
 

  const classes2 = useStyles();


  return (
    <>
      <NavigationBars companyName={"Google"}/>
      <Grid container justify={"space-evenly"} style={{marginTop:"5%"}}>
        <Grid item>
          <Container maxWidth={"sm"}>
            <Card style={{marginTop:"10%"}}>
              <form className={classes.root} noValidate autoComplete="off">
              <TextField
              id="standard-read-only-input"
              label="Current Blendscore"
              defaultValue="71"
              InputProps={{
                readOnly: true,
              }}
            />  <TextField
            id="standard-read-only-input"
            label="Current Blendscore Rank"
            defaultValue="20"
            InputProps={{
              readOnly: true,
            }}
          />

                <TextField
                  id="standard-read-only-input"
                  label="Impact Score"
                  defaultValue="23"
                  InputProps={{
                    readOnly: true,
                  }}
                />  <TextField
                id="standard-read-only-input"
                label="Retention Score"
                defaultValue="22"
                InputProps={{
                  readOnly: true,
                }}
              />  <TextField
              id="standard-read-only-input"
              label="Leadership Score"
              defaultValue="22"
              InputProps={{
                readOnly: true,
              }}
            />  <TextField
            id="standard-read-only-input"
            label="Recruitment Score"
            defaultValue="20"
            InputProps={{
              readOnly: true,
            }}
          />




               
              </form>
             
            </Card>
          </Container>
      </Grid>


      <Grid item>
          <Container maxWidth={"md"}>
            <Card style={{marginTop:"10%"}}>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField
                  id="standard-read-only-input"
                  label="Company Name"
                  defaultValue="Google"
                  InputProps={{
                    readOnly: true,
                  }}
                />
 <TextField
          id="standard-select-size"
          select
          label="Select"
          value={size}
          onChange={handleChange1}
          helperText="Editable"
        >
          {sizes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button size="medium" className={classes1.margin}>
          Save Changes
        </Button>



        
                
                   <TextField
                  id="outlined-multiline-static"
                  label="Company Description"
                  multiline
                  rows={15}
                  defaultValue="Google LLC is an American 
                  multinational technology 
                  company that specializes
                   in Internet-related services 
                   and products, which include 
                   online advertising technologies,
                    a search engine, cloud computing, 
                    software, and hardware."
                  variant="outlined"
                  helperText="Editable"
                />
<Button size="medium" className={classes2.margin}>
          Save Changes
        </Button>
              </form>
              <div className={classes.upload}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained"
                  color="primary" 
                  component="span">
                    Upload
                  </Button>
                </label>
              </div>
            </Card>
          </Container>
      </Grid>
      </Grid>
    </>
  );
};