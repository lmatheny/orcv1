import React from "react";
import {useRef} from 'react';
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

const Portal = () => {

	const columns = [
		{ field: 'id', headerName: 'ID', width: 85 },
	 	{
	 		field: 'status',
	 		headerName: 'Job Status',
			width: 90,
	 		editable: false,
			color: "blue",
			onclick
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
	 	}, {
			field: 'extra',
				 headerName: 'hey',
				 type: 'number',
				 width: 70,
				 editable: false,
		}

	 ];

	 const rows = [
	 	{ id: 1, status: AccessAlarmIcon , client: 'Jon', attempts: 35, extra: 30 },
	 	
		
	];

return (
	<div className="portal">
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
	</div>
);
};

export default Portal;

