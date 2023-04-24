
import React, { useState, useEffect } from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { FaBook, FaCloud } from 'react-icons/fa'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Check } from "@rsuite/icons";
import { ArrowRight, Camera } from '@mui/icons-material'
import Typography from "@mui/material/Typography";
import { blue } from "@material-ui/core/colors";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { FormControlLabel, IconButton } from "@material-ui/core";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';







export const Home = () => {
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
	 	{ id: 1, status: AccessAlarmIcon , client: 'Jon', attempts: 35 },
	 	{ id: 2, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 3, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 4, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 5, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 6, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 7, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 8, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 9, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 10, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 11, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 12, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 13, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 14, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 15, status: "completed" , client: 'Jon', attempts: 35 },
	 	{ id: 16, status: "completed" , client: 'Jon', attempts: 35 },
		
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

	

	return (
		<div className="home">
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={0}>
					<Grid xs={9}>
						<Item>Wednesday, April 12 50° F <FaCloud style={styleSun} /> </Item>
					</Grid>
					<Grid xs={3}>
						<Item>
							<a href="https://www.wjcl.com/article/savannah-2023-hurricane-season-forecast/42962644" target="_blank" rel="noopener noreferrer">
								<FaBook />
							</a>
						</Item>
					</Grid>
					<Grid xs={12}>
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
					</Grid>

				</Grid>
			</Box>
			<div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
		</div>
	);
};




