
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import { FaBook, FaCloud } from 'react-icons/fa'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Check } from "@rsuite/icons";
import { ArrowRight, Camera } from '@mui/icons-material'
import Typography from "@mui/material/Typography";


import "./Portal.css";
import { blue } from "@material-ui/core/colors";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import all from './icons/certain1.png';
import allWeb from './icons/all.png';
import controls from './icons/controls1.png';
import entire from './icons/entire1.png';
import mysubsall from './icons/mysubsall.png';
import Info from './icons/info.png';
import Green from './icons/g18.png';
import Orange from './icons/o18.png';
import Grey from './icons/grey18.png';
import Red from './icons/r18.png';
import webdemo from './icons/webdemo.png';
import { isMobile } from 'react-device-detect';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialReactTable } from 'material-react-table';
import MaterialTable from "material-table";
import * as FaIcons from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as AiIcons from "react-icons/ai";
import Button from '@mui/material/Button';
import { fontSize } from "@mui/system";
// const data = [
//    {
//        id: "1",
//        user: "Luke Matheny",
//        imports: "-",
//        loss: "-",
//        reports: "-",


//    },

// ];






const Portal = () => {




    //switch label
    const label = { inputProps: { 'aria-label': 'Switch demo' } };


    //switch logic
    const [checked, setChecked] = useState(false);
    const [result, setResult] = useState("table-row");
    const [result2, setResult2] = useState("table-row");
    const [result3, setResult3] = useState("table-row");
    const [result4, setResult4] = useState("table-row");
    const [resultWeb, setResultWeb] = useState(webdemo);


    //size of filler image
    const [length, setLength] = useState(60);


    //function that swaps image on mobile
    const switchHandler = (event) => {
        setChecked(event.target.checked);
        if (result == "table-row") {

            setResult("none");



        } else {
           


                    setResult('table-row');
                
            

        }


    };
    //function that swaps image on web
    const switchHandlerWeb = (event) => {
        setChecked(event.target.checked);
        if (resultWeb == webdemo) {
            setResultWeb(mysubsall);


        } else {
            setResultWeb(webdemo);


        }


    };


    //getting current window dimensions
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }
    useEffect(() => {
        window.addEventListener('resize', setWindowDimensions);
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, [])



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [openTwo, setOpenTwo] = React.useState(false);
    const handleOpenTwo = () => {
        setOpenTwo(true);
    };

    const handleClose2 = () => {
        setOpenTwo(false);
    };

    const [openThree, setOpenThree] = React.useState(false);
    const handleOpenThree = () => {
        setOpenThree(true);
    };

    const handleCloseThree = () => {
        setOpenThree(false);
    };

    const [openFour, setOpenFour] = React.useState(false);
    const handleOpenFour = () => {
        setOpenFour(true);
    };

    const handleCloseFour = () => {
        setOpenFour(false);
    };


    //search bar 
    const [textInput, setTextInput] = useState('');

    const handleTextInputChange = event => {
        setTextInput(event.target.value);

        if(checked == false) {
        
            if (!('545').includes('' + event.target.value) && !('GSIC').includes('' + event.target.value) && !('AIR').includes('' + event.target.value) && !('SQ1').includes('' + event.target.value) && !('6/4/23').includes('' + event.target.value)) {
                setResult('none')
            } else {
                setResult('table-row');
            }
        }
        
        if (!('546').includes('' + event.target.value) && !('RSIS').includes('' + event.target.value) && !('AIR').includes('' + event.target.value) && !('LM5').includes('' + event.target.value) && !('6/5/23').includes('' + event.target.value)) {
            setResult4('none')
        } else {
            setResult4('table-row');
        }

        if (!('547').includes('' + event.target.value) && !('GSIC').includes('' + event.target.value) && !('RM5').includes('' + event.target.value) && !('LM5').includes('' + event.target.value) && !('6/6/23').includes('' + event.target.value)) {
            setResult3('none')
        } else {
            setResult3('table-row');
        }

        if (!('548').includes('' + event.target.value) && !('GSIC').includes('' + event.target.value) && !('AIR').includes('' + event.target.value) && !('LM5').includes('' + event.target.value) && !('6/6/23').includes('' + event.target.value)) {
            setResult2('none')
        } else {
            setResult2('table-row');
        }

        if (('' + event.target.value).length == 0) {
            if(checked == false) {
            setResult('table-row');
            }
            setResult2('table-row');
            setResult3('table-row');
            setResult4('table-row');
        }

    };





    //if user is on mobile
    if (isMobile) {


        return (
            <div className="portal" style={{ maxWidth: (windowWidth) }} >


                <Box marginTop={"1%"} marginLeft={"2%"} marginRight={"1%"}>
                    <Dialog
                        open={open}>
                        <DialogTitle>
                            More Information
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText class="alertBody">
                                <b>AIR Import Activity ID:</b> 16240 <br></br>
                                <b>Loss Analysis Activity ID:</b>  16242
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" onClick={handleClose} >
                                CLOSE
                            </Button>
                        </DialogActions>
                    </Dialog>


                    <Dialog
                        open={openTwo}>
                        <DialogTitle>
                            More Information
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText class="alertBody">
                                <b>AIR Import Activity ID:</b> 162238 <br></br>
                                <b>Loss Analysis Activity ID:</b> 0
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" onClick={handleClose2} >
                                CLOSE
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog
                        open={openThree}>
                        <DialogTitle>
                            More Information
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText class="alertBody">
                                <b>AIR Import Activity ID:</b> 16102 <br></br>
                                <b>Loss Analysis Activity ID:</b> 16104
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" onClick={handleCloseThree} >
                                CLOSE
                            </Button>
                        </DialogActions>
                    </Dialog>


                    <Dialog
                        open={openFour}>
                        <DialogTitle>
                            More Information
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText class="alertBody">
                                <b>AIR Import Activity ID:</b> 16099 <br></br>
                                <b>Loss Analysis Activity ID:</b> 16101
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" onClick={handleCloseFour} >
                                CLOSE
                            </Button>
                        </DialogActions>
                    </Dialog>




                    <Grid container spacing={2} marginTop={"1%"}>

                        {/* switch */}

                        <Grid item xs={6} > <Box style={{ width: '100%', height: '100%', marginLeft: '1.5%' }}


                        > <FormControlLabel control={<Switch checked={checked} onChange={switchHandler} />}

                            label={
                                <Typography sx={{ fontSize: 15 }}>
                                    My Submissions
                                </Typography>
                            }

                            /></Box>

                        </Grid>




                        {/* search bar */}

                        <Grid item xs={6}> <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                marginRight: '2%',
                                bgcolor: 'background.paper',



                            }}
                        >


                            <TextField id="outlined-basic" label="Search..." variant="outlined" size="small" value={textInput}
                                onChange={handleTextInputChange} />


                        </Box>


                        </Grid>




                        <Grid item xs={12}> <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginLeft: '2%',
                                bgcolor: 'background.paper',


                            }}
                        ></Box>


                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%', textAlign: 'left', borderBottom: '1px solid black', fontSize: '14.5px' }}>ID</th>
                                        <th style={{ width: '15%', textAlign: 'left', borderBottom: '1px solid black', fontSize: '14.5px' }}>Client</th>
                                        <th style={{ width: '15%', textAlign: 'left', borderBottom: '1px solid black', fontSize: '14.5px' }}>Model</th>
                                        <th style={{ width: '12.5%', textAlign: 'left', borderBottom: '1px solid black', fontSize: '14.5px' }}>User</th>
                                        <th style={{ width: '12%', textAlign: 'left', borderBottom: '1px solid black', fontSize: '14.5px' }}>Date</th>
                                        <th style={{ width: '12%', borderBottom: '1px solid black', fontSize: '14.5px', textAlign: 'center' }}>Import</th>
                                        <th style={{ width: '12%', borderBottom: '1px solid black', fontSize: '14.5px', textAlign: 'center' }}>Loss</th>
                                        <th style={{ width: '12%', borderBottom: '1px solid black', fontSize: '14.5px', textAlign: 'center' }}>Report</th>

                                    </tr>
                                </thead>
                                <tbody >
                                    <tr style={{ display: result2 }}>
                                        <td style={{ color: "blue", fontSize: '14px' }}><u onClick={handleOpen}>548</u></td>
                                        <td style={{ fontSize: '14px' }}>GSIC</td>
                                        <td style={{ fontSize: '14px' }}>AIR</td>
                                        <td style={{ fontSize: '14px' }}>LM5</td>
                                        <td style={{ fontSize: '14px' }}>6/6/23</td>
                                        <td style={{}}> <div style={{ textAlign: "center", display: "block" }}>
                                            <img src={Green}></img></div></td>
                                        <td> <div style={{ textAlign: "center", display: "block" }}> <img src={Green}></img></div></td>
                                        <td style={{}}> <div style={{ textAlign: "center", display: "block" }}><img src={Grey}></img></div></td>




                                    </tr>
                                    <tr style={{ display: result3 }} >
                                        <td style={{ color: "blue", fontSize: '14px' }}><u onClick={handleOpenTwo}>547</u></td>
                                        <td style={{ fontSize: '14px' }}>GSIC</td>
                                        <td style={{ fontSize: '14px' }}>RMS</td>
                                        <td style={{ fontSize: '14px' }}>LM5</td>
                                        <td style={{ fontSize: '14px' }}>6/6/23</td>
                                        <td style={{}}> <div style={{ textAlign: "center", display: "block" }}>
                                            <img src={Green}></img></div></td>
                                        <td> <div style={{ textAlign: "center", display: "block" }}> <img src={Green}></img></div></td>
                                        <td style={{}}> <div style={{ textAlign: "center", display: "block" }}><img src={Orange}></img></div></td>




                                    </tr>

                                    <tr style={{ display: result4 }}>
                                        <td style={{ color: "blue", fontSize: '14px' }}><u onClick={handleOpenThree}>546</u></td>
                                        <td style={{ fontSize: '14px' }}>RSIS</td>
                                        <td style={{ fontSize: '14px' }}>AIR</td>
                                        <td style={{ fontSize: '14px' }}>LM5</td>
                                        <td style={{ fontSize: '14px' }}>6/5/23</td>
                                        <td style={{}}> <div style={{ textAlign: "center", display: "block" }}>
                                            <img src={Green}></img></div></td>
                                        <td> <div style={{ textAlign: "center", display: "block" }}> <img src={Green}></img></div></td>
                                        <td style={{}}> <div style={{ textAlign: "center", display: "block" }}><img src={Grey}></img></div></td>



                                    </tr>

                                    <tr style={{ display: result }}>
                                        <td style={{ color: "blue", fontSize: '14px' }}><u onClick={handleOpenFour}>545</u></td>
                                        <td style={{ fontSize: '14px' }}>GSIC</td>
                                        <td style={{ fontSize: '14px' }}>AIR</td>
                                        <td style={{ fontSize: '14px' }}>SQ1</td>
                                        <td style={{ fontSize: '14px' }}>6/4/23</td>
                                        <td style={{}}> <div style={{ textAlign: "center", display: "block" }}>
                                            <img src={Green}></img></div></td>
                                        <td> <div style={{ textAlign: "center", display: "block" }}> <img src={Red}></img></div></td>
                                        <td style={{}}> <div style={{ textAlign: "center", display: "block" }}><img src={Grey}></img></div></td>




                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </Grid>






                    </Grid>



                    {/* table */}

                    {/* results image */}
                    {/* <div><img style={{ width: '100%', height: (windowHeight / 100) * { length }, marginBottom: '0%' }} align='center' src={result} class="adBanner" ></img></div> */}
                    {/* <DataGrid
                               rows={rows}
                               columns={columns}
                               initialState={{
                                   pagination: {
                                       paginationModel: {
                                           pageSize: 10,
                                          
                                       },
                                   },
                               }}
                               pageSizeOptions={[5]}
                              
                           /> */}
                </Box></div >


        );
    } else {
        return (
            <div className="portal">
                <Box marginTop={"1%"} marginLeft={"2%"}>


                    <Grid container spacing={2}>


                        {/* switch */}
                        <Grid item xs={6}> <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                marginLeft: '2%',
                                bgcolor: 'background.paper',


                            }}
                        ></Box>
                            <FormControlLabel control={<Switch checked={checked} onChange={switchHandlerWeb} />}
                                label="My Submissions"
                            />
                        </Grid>




                        {/* search bar */}
                        <Grid item xs={6}> <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                marginRight: '2%',
                                bgcolor: 'background.paper',


                            }}
                        >
                            <TextField id="outlined-basic" label="Search..." variant="outlined" size="small" />
                        </Box>
                        </Grid>






                    </Grid>


                    {/* results image */}
                    <div><img style={{ width: '100%', height: (windowHeight / 100) * { length }, marginBottom: '0%' }} align='center' src={resultWeb} class="adBanner" ></img></div>
                    {/* <DataGrid
                               rows={rows}
                               columns={columns}
                               initialState={{
                                   pagination: {
                                       paginationModel: {
                                           pageSize: 10,
                                          
                                       },
                                   },
                               }}
                               pageSizeOptions={[5]}
                              
                           /> */}
                </Box></div>


        );
    }
}


export default Portal;




