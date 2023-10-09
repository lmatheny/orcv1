import React, { useState, useEffect } from 'react';
import Green from './icons/g18.png';
import Orange from './icons/o18.png';
import Grey from './icons/grey18.png';
import Red from './icons/r18.png';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import exampleData from './example.json'; // Import the JSON data

const getStatusImageForColumn = (value) => {
  // Define logic for each column based on its specific values
  if (value === 1) {
    return Grey; // Example image for status 1
  } else if (value === 2) {
    return Orange; // Example image for status 2
  } else if (value === 3) {
    return Green; // Example image for status 3
  } else if (value === 4) {
    return Red; // Example image for status 4
  } else {
    return null; // Handle other cases as needed
  }
};

const NewProject = ({ username }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLM5Users, setShowLM5Users] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    // Simulate an asynchronous fetch from the JSON file
    const fetchData = async () => {
      try {
        // Assuming exampleData is an array of objects in "example.json"
        setData(exampleData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleSwitchChange = () => {
    setShowLM5Users((prevValue) => !prevValue);
    setCurrentPage(1); // Reset to the first page when toggling the switch
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
  };

  const handleCloseDialog = () => {
    setSelectedRow(null);
  };

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  // Separate the filtering logic for the switch and the TextField search
  const filteredDataBySwitch = data.filter((row) => showLM5Users && row.SubmittedBy.toLowerCase() === username.toLowerCase());
  const filteredDataBySearch = data.filter((row) =>
    Object.values(row).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Combine the filtered results from the switch and the search
  const filteredData = showLM5Users ? filteredDataBySwitch : filteredDataBySearch;

  // Calculate the current page's data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div>
      <Grid item xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginLeft: '1%',
            marginTop: '1%',
            bgcolor: 'background.paper',
          }}
        >
          <div style={{ width: '60%' }}>
            <FormControlLabel
              style={{ width: '100%', marginTop: '0.5%', marginLeft: '.5%' }}
              control={<Switch checked={showLM5Users} onChange={handleSwitchChange} />}
              label="My Submissions"
            />
          </div>
          <div style={{ width: '37.5%' }}>
            <TextField
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              size="small"
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              style={{
                justifyContent: 'center',
                width: '100%',
                marginTop: '1%',
                borderRadius: '15px', // Adjust the value to control the roundness
                padding: '0px', // Add some padding to make it look better
              }}
            />
          </div>
        </Box>
      </Grid>

      <table style={{ width: '98%', margin: '1%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'left', width: '1%', fontSize: '14px' }}>ID</th>
            <th style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'left', width: '20%', fontSize: '14px' }}>Client</th>
            <th style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'left', width: '14%', fontSize: '14px' }}>User</th>
            <th style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'left', width: '12%', fontSize: '14px' }}>Date</th>
            <th style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'center', width: '6%', fontSize: '14px' }}>SOV</th>
            <th style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'center', width: '6%', fontSize: '14px' }}>Import</th>
            <th style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'center', width: '6%', fontSize: '14px' }}>Loss</th>
            <th style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'center', width: '6%', fontSize: '14px' }}>Report</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row) => (
            <tr key={row.SubmissionID}>
              <td style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'left', width: '1%', fontSize: '14px' }}>
                <span
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => handleRowClick(row)}
                >
                  {row.SubmissionID}
                </span>
              </td>
              <td style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'left', width: '20%', fontSize: '14px' }}>{row.ClientName}</td>
              <td style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'left', width: '14%', fontSize: '14px' }}>{row.SubmittedBy}</td>
              <td style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'left', width: '12%', fontSize: '14px' }}>
                {new Date(row.SubmittedDate).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })}
              </td>
              <td style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'center', width: '6%', fontSize: '14px' }}>
                <img
                  style={{ marginLeft: '10px', width: '16px', height: '16px' }}
                  src={getStatusImageForColumn(row.SOV)}
                  alt={`SOV: ${row.SOV}`}
                />
              </td>
              <td style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'center', width: '6%', fontSize: '14px' }}>
                <img
                  style={{ marginLeft: '10px', width: '16px', height: '16px' }}
                  src={getStatusImageForColumn(row.Import)}
                  alt={`Import: ${row.Import}`}
                />
              </td>
              <td style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'center', width: '6%', fontSize: '14px' }}>
                <img
                  style={{ marginLeft: '10px', width: '16px', height: '16px' }}
                  src={getStatusImageForColumn(row.Loss)}
                  alt={`Loss: ${row.Loss}`}
                />
              </td>
              <td style={{ borderBottom: '1px solid black', padding: '4px', textAlign: 'center', width: '6%', fontSize: '14px' }}>
                <img
                  style={{ marginLeft: '10px', width: '16px', height: '16px' }}
                  src={getStatusImageForColumn(row.Report)}
                  alt={`Report: ${row.Report}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        {totalPages <= 2 ? (
          <>
            <Button
              style={{ width: '12.5%', justifyContent: 'center' }}
              variant="contained"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </Button>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageToShow = index + 1;

              return (
                <Button
                  key={index}
                  style={{
                    width: '25px',
                    height: '25px',
                    margin: '0 5px',
                    padding: '0',
                    borderRadius: '0%',
                    backgroundColor: currentPage === pageToShow ? '#1E90FF' : '#FFF',
                    color: currentPage === pageToShow ? '#FFF' : '#000',
                  }}
                  variant="contained"
                  onClick={() => handlePageChange(pageToShow)}
                >
                  {pageToShow}
                </Button>
              );
            })}

            <Button
              style={{ width: '12.5%', justifyContent: 'center', marginLeft: '2%' }}
              variant="contained"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </>
        ) : (
          <>
            <Button
              style={{ width: '12.5%', justifyContent: 'center' }}
              variant="contained"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </Button>

            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
              {Array.from({ length: 3 }, (_, index) => {
                let pageToShow;
                if (currentPage === totalPages) {
                  if (index === 0) {
                    pageToShow = currentPage - 2;
                  } else if (index === 1) {
                    pageToShow = currentPage - 1;
                  } else {
                    pageToShow = currentPage; // Display the current page on the right
                  }
                } else {
                  pageToShow = currentPage === 1 ? index + 1 : currentPage + index - 1;
                }

                return (
                  <Button
                    key={index}
                    style={{
                      width: '25px',
                      height: '25px',
                      margin: '0 5px',
                      padding: '0',
                      borderRadius: '0%',
                      backgroundColor: currentPage === pageToShow ? '#1E90FF' : '#FFF',
                      color: currentPage === pageToShow ? '#FFF' : '#000',
                    }}
                    variant="contained"
                    onClick={() => handlePageChange(pageToShow)}
                  >
                    {pageToShow}
                  </Button>
                );
              })}
            </div>

            <Button
              style={{ width: '12.5%', justifyContent: 'center', marginLeft: '2%' }}
              variant="contained"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </>
        )}
      </div>

      {/* Dialog to display additional JSON data */}
      <Dialog
  open={selectedRow !== null}
  onClose={handleCloseDialog}
  fullWidth
  maxWidth="sm"
  aria-labelledby="dialog-title"
>
  <DialogTitle id="dialog-title" style={{ fontSize: '24px' }}>
   Submission ID: {selectedRow?.SubmissionID}
  </DialogTitle>
  <DialogContent>
    <DialogContentText style={{ color: 'black' }}>
      {/* Display specific fields without quotes */}
      {selectedRow ? (
        <>
          <div>
            <strong>ProjectName:</strong> {selectedRow.ProjectName}
          </div>
          <div>
            <strong>Analysis:</strong> {selectedRow.Analysis}
          </div>
          <div>
            <strong>Model:</strong> {selectedRow.Model}
          </div>
        </>
      ) : (
        ''
      )}
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleCloseDialog} variant="contained" color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>
    </div>
  );
};

export default NewProject;
