import React from 'react';
// @ts-ignore
import MaterialTable, { Column } from 'material-table';
import { Grid } from "@material-ui/core";
import NavigationBars from "../src/NavigationBars";

import {icons} from "../src/Icons"

export default function MaterialTableDemo() {
    return (
        <>
            <NavigationBars companyName={"New Feature"}/>
            <div>
            <Grid container justify={"space-evenly"} style={{marginTop:"10%"}}>
                <Grid item >
                    
                </Grid>
            </Grid>
            </div>
        </>
    );
}




