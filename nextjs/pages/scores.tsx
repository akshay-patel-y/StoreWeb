import React from "react";
import NavigationBars from "../src/NavigationBars";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {Card, Container, Grid, Button, TextField} from "@material-ui/core";

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

export default function Profile() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

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
                  label="Current Impact Score"
                  defaultValue="15"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                
                <TextField
                  id="standard-read-only-input"
                  label="Current Impact Rank"
                  defaultValue="23"
                  InputProps={{
                    readOnly: true,
                  }}
                />  <TextField
                id="standard-read-only-input"
                label="Current Retention Score"
                defaultValue="22"
                InputProps={{
                  readOnly: true,
                }}
              />  <TextField
              id="standard-read-only-input"
              label="Current Retention Rank"
              defaultValue="21"
              InputProps={{
                readOnly: true,
              }}
            />  <TextField
            id="standard-read-only-input"
            label="Current Recruitment Score"
            defaultValue="20"
            InputProps={{
              readOnly: true,
            }}
          />
<TextField
              id="standard-read-only-input"
              label="Current Recruitment Rank"
              defaultValue="21"
              InputProps={{
                readOnly: true,
              }}
            />  <TextField
            id="standard-read-only-input"
            label="Current Leadership Score"
            defaultValue="20"
            InputProps={{
              readOnly: true,
            }}
          />
<TextField
            id="standard-read-only-input"
            label="Current Leadership Rank"
            defaultValue="86"
            InputProps={{
              readOnly: true,
            }}
          />

<TextField
              id="standard-read-only-input"
              label="Current Blendscore"
              defaultValue="21"
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
              </form>
             
            </Card>
          </Container>
      </Grid>




      <Grid item>
          <Container maxWidth={"sm"}>
            <Card style={{marginTop:"10%"}}>
              <form className={classes.root} noValidate autoComplete="off">
              <TextField
                  id="standard-read-only-input"
                  label="Pending Impact Score"
                  defaultValue="20"
                  InputProps={{
                    readOnly: true,
                  }}
                />
                
                <TextField
                  id="standard-read-only-input"
                  label="Pending Impact Rank"
                  defaultValue="23"
                  InputProps={{
                    readOnly: true,
                  }}
                />  <TextField
                id="standard-read-only-input"
                label="Pending Retention Score"
                defaultValue="22"
                InputProps={{
                  readOnly: true,
                }}
              />  <TextField
              id="standard-read-only-input"
              label="Pending Retention Rank"
              defaultValue="21"
              InputProps={{
                readOnly: true,
              }}
            />  <TextField
            id="standard-read-only-input"
            label="Pending Recruitment Score"
            defaultValue="20"
            InputProps={{
              readOnly: true,
            }}
          />
<TextField
              id="standard-read-only-input"
              label="Pending Recruitment Rank"
              defaultValue="21"
              InputProps={{
                readOnly: true,
              }}
            />  <TextField
            id="standard-read-only-input"
            label="Pending Leadership Score"
            defaultValue="20"
            InputProps={{
              readOnly: true,
            }}
          />
<TextField
            id="standard-read-only-input"
            label="Pending Leadership Rank"
            defaultValue="86"
            InputProps={{
              readOnly: true,
            }}
          />

<TextField
              id="standard-read-only-input"
              label="Pending Blendscore"
              defaultValue="21"
              InputProps={{
                readOnly: true,
              }}
            />  <TextField
            id="standard-read-only-input"
            label="Pending Blendscore Rank"
            defaultValue="20"
            InputProps={{
              readOnly: true,
            }}
          />
              
              </form>
             
            </Card>
          </Container>
      </Grid>
  
      </Grid>
    </>
  );
};