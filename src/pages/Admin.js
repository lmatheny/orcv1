import React, { useMemo } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MaterialReactTable } from 'material-react-table';
import RMS from './icons/rms.png';
import Verisk from './icons/verisk.png';


const data = [
  {
    id: "1",
    longname: 'Access Home Insurance Company',
    shortname: 'AHIC',
    active: 'True',
  },
  {
    id: "2",
    longname: 'Agency Insurance Company of Maryland',
    shortname: 'AICM',
    active: 'True',
  }, {
    id: "3",
    longname: 'American Insurance Company of Maryland',
    shortname: 'AMIE',
    active: 'True',
  },

];





const Admin = ({ username }) => {

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'ID',
        size: 5,
      },
      {
        accessorKey: 'longname', //normal accessorKey
        header: 'Client Name',
        size: 5,
      },
      {
        accessorKey: 'shortname',
        header: 'Client ShortName',
        size: 5,
      },
      {
        accessorKey: 'active',
        header: 'isActive',
        size: 5,
      },
    ],
    [],
  );



  return (
    <div className="admin">
      {username == 'LM5' || username == "SQ1" ? (
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Clients</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <MaterialReactTable columns={columns} data={data} />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Profiles</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div><img style={{ width: '100%' }} align='center' src={Verisk} class="adBanner" ></img></div>
                <div><img style={{ width: '100%' }} align='center' src={RMS} class="adBanner" ></img></div>
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
          <p style={{ color: 'red', fontWeight: 'bold', marginTop: '3%' }}>Admin Privileges required</p>
        </div>


      )}
    </div>
  );
};

export default Admin;

