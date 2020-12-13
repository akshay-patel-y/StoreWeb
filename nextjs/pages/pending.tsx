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

    /* Leadership */
    firstName: string;
    lastName: string;
    title: string;
    race: number;
    gender: number;

    /* Impact and Recruitment */
    name: string;
    url: string;
    email: string;
    location: string;
    industry: string;
    premier: string;
    programName: string;
    category: string;



    /* Retention */
    metricUrl: string;
    programName: string;
    retainBlack: number;
    retainWomen: number;
    retainLatin: number;
    retainOther: number;
    category: number;
    target: number;


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

    

    const [state, setState] = React.useState<TableState>({
        columns: [
            { title: 'First Name', field: 'firstName' },
            { title: 'Last Name', field: 'lastName' },
            { title: 'Title', field: 'title' },
            { title: 'Race', field: 'race',
              lookup: { 1: 'White', 2: 'East Asian', 
              3: 'South Asian', 4: 'Southeast Asian',
              5: 'Pacific Islander', 6: 'Native American',
              7: 'Latinx', 8: 'MENA',
              9: 'Mixed', 10: 'Black'},
          },
          
          { title: 'Gender', field: 'gender',
          lookup: { 0: 'Male', 1: 'Female' },
      }, ],
        data: [
            { 
                firstName: 'Mehmet', 
                lastName: 'Zeyra', 
                title: 'CEO', 
                race: 1, 
                gender: 1, 

            },
            {
              firstName: 'Example', 
              lastName: 'Two', 
              title: 'CFO', 
              race: 2, 
              gender: 2, 

            },
        ],
    });



    const [state2, setState2] = React.useState<TableState>({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'URL', field: 'url' },
            { title: 'email', field: 'email' },
            { title: 'location', field: 'location' },
            { title: 'industry', field: 'industry' },
            { title: 'premier', field: 'premier' },

            
        ],
        data: [
            { 
                name: 'Mehmet', 
                url: 'www.url.com', 
                email: 'www.Mehmet@gmail.com', 
                location: 'USA', 
                industry: 'tech', 
                premier: 'No', 
            },
            {
                name: 'Zerya Betül',
                url: 'www.url.com', 
                email: 'www.Zeyra@gmail.com', 
                location: 'USA', 
                industry: 'tech', 
                premier: 'No', 
            },
        ],
    });





    
    const [state3, setState3] = React.useState<TableState>({
        columns: [
            { title: 'Program Name', field: 'programName' },
            { title: 'Category', field: 'category' },
            
        ],
        data: [
            { 
                programName: 'Program one', 
                category: 'Example one', 
            },
            {
                programName: 'Program two',
                category: 'Example two', 
            },
        ],
    });




    const [state4, setState4] = React.useState<TableState>({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'URL', field: 'url' },
            { title: 'email', field: 'email' },
            { title: 'location', field: 'location' },
            { title: 'industry', field: 'industry' },
            { title: 'premier', field: 'premier' },

            
        ],
        data: [
            { 
                name: 'Mehmet', 
                url: 'www.url.com', 
                email: 'www.Mehmet@gmail.com', 
                location: 'USA', 
                industry: 'tech', 
                premier: 'No', 
            },
            {
                name: 'Zerya Betül',
                url: 'www.url.com', 
                email: 'www.Zeyra@gmail.com', 
                location: 'USA', 
                industry: 'tech', 
                premier: 'No', 
            },
        ],
    });





    
    const [state5, setState5] = React.useState<TableState>({
        columns: [
            { title: 'Program Name', field: 'programName' },
            { title: 'Category', field: 'category' },
            
        ],
        data: [
            { 
                programName: 'Program one', 
                category: 'Example one', 
            },
            {
                programName: 'Program two',
                category: 'Example two', 
            },
        ],
    });




    const [state6, setState6] = React.useState<TableState>({
        columns: [
            { title: 'Metric URL', field: 'metricUrl' },

            { title: 'Retain Black', field: 'retainBlack' },
            { title: 'Retain Women', field: 'retainWomen' },
            { title: 'Retain Latin', field: 'retainLatin' },
            { title: 'Retain Other', field: 'retainOther' },
                    ],
        data: [
            { 
                metricUrl: "www.example.com",
                retainBlack: 10,
                retainWomen: 10,
                retainOther: 10,
                retainLatin: 10,
            },
        ],
    });





    const [state7, setState7] = React.useState<TableState>({
        columns: [
            { title: 'Program Name', field: 'programName' },
            { title: 'Category', field: 'category',
            lookup: { 0: 'Example 1', 1: 'Example 2' },

        },

        { title: 'target', field: 'target',
        lookup: { 0: 'Women', 1: 'Under-represented Minorities',
        2: 'Veterans', 3: 'Disabled',
        4: 'LGBTQ', 5: 'Older'},

    },
            
        ],
        data: [
            { 
                programName: 'Example',
                category: 0,
                target: 3,
            },
        ],
    });

    return (
        <>
            <NavigationBars companyName={"Google"}/>
            <Paper className={classes.tabs}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Leadership" />
                    <Tab label="Impact" />
                    <Tab label="Recruitment" />
                    <Tab label="Retention" />


                </Tabs>
            </Paper>
            <TabPanel value={value} index={0} dir={theme.direction}>
    
            <Grid container justify={"space-evenly"} style={{marginTop:"10%"}}>
                <Grid item >
                    <MaterialTable
                        title="Pending Executive Changes"
                        columns={state.columns}
                        data={state.data}
                        // @ts-ignore
                        icons={icons}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />
            </Grid>
                </Grid>
            </TabPanel>

            


            <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid container spacing={2} direction={"row"} justify={"space-evenly"} style={{marginTop:"5%"}}>
                <Grid item>
                    <MaterialTable
                        title="Pending Partner Changes"
                        columns={state2.columns}
                        data={state2.data}
                        // @ts-ignore
                        icons={icons}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState2((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState2((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState2((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </Grid>


                <Grid item>
                    <MaterialTable
                        title="Pending Program Changes"
                        columns={state3.columns}
                        data={state3.data}
                        // @ts-ignore
                        icons={icons}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState2((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState3((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState3((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </Grid>
                </Grid>

            </TabPanel>

            



            <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid container spacing={2} direction={"row"} justify={"space-evenly"} style={{marginTop:"5%"}}>
                <Grid item>
                    <MaterialTable
                        title="Pending Partner Changes"
                        columns={state4.columns}
                        data={state4.data}
                        // @ts-ignore
                        icons={icons}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState4((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState4((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState4((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </Grid>


                <Grid item>
                    <MaterialTable
                        title="Pending Program Changes"
                        columns={state5.columns}
                        data={state5.data}
                        // @ts-ignore
                        icons={icons}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState5((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState5((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState5((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </Grid>
                </Grid>
            </TabPanel>


            <TabPanel value={value} index={3} dir={theme.direction}>
            <Grid container spacing={2} direction={"row"} justify={"space-evenly"} style={{marginTop:"5%"}}>
            <Grid item >
                    <MaterialTable
                        title="Pending Information Changes"
                        columns={state6.columns}
                        data={state6.data}
                        // @ts-ignore
                        icons={icons}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState6((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState6((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState6((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </Grid>
                <Grid item>
                    <MaterialTable
                        title="Pending Program Changes"
                        columns={state7.columns}
                        data={state7.data}
                        // @ts-ignore
                        icons={icons}
                        editable={{
                            onRowAdd: (newData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState7((prevState) => {
                                            const data = [...prevState.data];
                                            data.push(newData);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            setState7((prevState) => {
                                                const data = [...prevState.data];
                                                data[data.indexOf(oldData)] = newData;
                                                return { ...prevState, data };
                                            });
                                        }
                                    }, 600);
                                }),
                            onRowDelete: (oldData) =>
                                new Promise((resolve) => {
                                    setTimeout(() => {
                                        resolve();
                                        setState7((prevState) => {
                                            const data = [...prevState.data];
                                            data.splice(data.indexOf(oldData), 1);
                                            return { ...prevState, data };
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </Grid> 
                </Grid>
            </TabPanel>
        </>

    );
}