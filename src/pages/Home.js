
import React, { useState, useRef, useEffect, useCallback } from "react";
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { FaCalendar, FaClock, FaCloud } from 'react-icons/fa'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Check } from "@rsuite/icons";
import { ArrowRight, Camera } from '@mui/icons-material'
import Typography from "@mui/material/Typography";
import { blue } from "@material-ui/core/colors";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { FormControlLabel, IconButton } from "@material-ui/core";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import "./Home.css";
import { render } from 'react-dom';






export const Home = () => {





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

	const [data, setData] = useState(null);

	// 	useEffect(() => {
	//     fetch('https://webapp-usc-preprod-analytics-catmodeling-windows-verisk-api.ilbase-usintprod.appserviceenvironment.net/api/VeriskAPI/Status')
	//       .then(response => response.json())
	//       .then(json => setData(json))
	//       .catch(error => console.error(error));
	//   }, []);




	const columns = [
		{ field: 'id', headerName: 'ID', width: 85 },
		{
			field: 'status',
			headerName: 'Job Status',
			width: 90,
			editable: false,

		},
		{
			field: 'client',
			headerName: 'Client Name',
			width: 100,
			editable: false,
		},
		{
			field: 'attempts',
			headerName: 'Attempts',
			type: 'number',
			width: 70,
			editable: false,
		},

	];

	const rows = [
		{ id: 1, status: AccessAlarmIcon, client: 'Jon', attempts: 35 },
		{ id: 2, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 3, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 4, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 5, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 6, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 7, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 8, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 9, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 10, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 11, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 12, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 13, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 14, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 15, status: "completed", client: 'Jon', attempts: 35 },
		{ id: 16, status: "completed", client: 'Jon', attempts: 35 },

	];


	//const windowWidth = useRef(window.innerWidth);
	//const windowHeight = useRef(window.innerHeight);
	const styleSun = { color: "grey" }

	// Function to add our give data into cache
	const addDataIntoCache = (cacheName, url, response) => {
		// Converting our response into Actual Response form
		const data = new Response(JSON.stringify(response));

		if ('caches' in window) {
			// Opening given cache and putting our data into it
			caches.open(cacheName).then((cache) => {
				cache.put(url, data);
				alert('Data Added into cache!')
			});

		}
	};

	const getDataIntoCache = (cacheName, url, response) => {
		// Converting our response into Actual Response form
		const data = new Response(JSON.stringify(response));

		if ('caches' in window) {
			// Opening given cache and putting our data into it
			caches.open(cacheName).then((cache) => {
				cache.get(url, data);
				alert('Data Added into cache!')
			});

		}
	};

	const Item = styled('div')(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		border: '1px solid',
		borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
		padding: theme.spacing(1),
		borderRadius: '4px',
		textAlign: 'center',
	}));


	const ButtonStyle = { margin: "0px 10px" };

	// Using Date() method
	const date = new Date();
	let y = date.getFullYear();
	let mo = date.getMonth() + 1;
	let d = date.getDate();
	let h = date.getHours();
	let mi = date.getMinutes();
	let s = date.getSeconds();






	// Converting the number value to string
	let timez = mo.toString() + "/" + d.toString() + "/" + y.toString();



	return (
		<div style={{backgroundColor:"#cccccc"}}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={0}>
					<Grid xs={12}>
					
						<h1 style={{ marginTop: '2%', marginBottom: '1.5%', textAlign: 'center', fontSize: (''+ windowHeight / 100 * 3 + 'px'), fontFamily: "ui-rounded" }}>{timez}</h1>
			
					</Grid>

					<Grid xs={12}>
						<Box sx={{ width: '100%', height: (windowHeight / 100) * 95, marginLeft:'.25%', marginRight:'.25%' }}><iframe
							frameBorder="0"
							height={(windowHeight / 100) * 81}
							src="https://livingatlas.arcgis.com/wildfireaware/"
							width="100%"
							
						></iframe></Box>
						{/* <Item><h1 class="placeholder">Content placeholder</h1> </Item> */}
					</Grid>

					{/* <Grid xs={12}>
						<Item><Box sx={{ height: 500, width: '100%' }}>
							<DataGrid 
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
								
							/>
						</Box></Item>
					</Grid> */}

				</Grid>
			</Box>
			<div>

			</div>
		</div>
	);
};




