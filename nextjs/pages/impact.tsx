import React from 'react';
// @ts-ignore
import MaterialTable, {Column} from 'material-table';
import {Grid, Paper, Tabs, Tab} from "@material-ui/core";
import NavigationBars from "../src/NavigationBars";
import { Theme, useTheme, makeStyles } from '@material-ui/core/styles';
import TabPanel from "../src/TabPanel";

import {icons} from "../src/Icons"

interface TableState {
    columns: Array<Column<Row>>;
    data: Row[];
}

interface Row {
    name: string;
    url: string;
    email: string;
    location: string;
    industry: string;
    premier: string;
    programName: string;
    category: string;

}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
    tabs: {
        marginTop: "5%",
    }
  }));

export default function MaterialTableDemo() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };

  

    return (
        <>
            <NavigationBars companyName={"Feature two"}/>
            <Paper className={classes.tabs}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Example One" />
                    <Tab label="Example Two" />
                </Tabs>
            </Paper>
            <TabPanel value={value} index={0} dir={theme.direction}>
            
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
               
            </TabPanel>
        </>

    );
}




