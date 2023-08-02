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
import exampleData from './example.json'; // Import the JSON data

const getClientStatusImage = (status) => {
  switch (status) {
    case 1:
      return Grey;
    case 2:
      return Orange;
    case 3:
      // email logic TODO
      return Green;
    case 4:
      return Red;
    default:
      return null;
  }
};

const NewProject = ({ username }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLM5Users, setShowLM5Users] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [isLoading, setIsLoading] = useState(true);

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
          <div style={{ width: '80.5%' }}>
            <FormControlLabel
              style={{ width: '100%', marginTop: '0.5%', marginLeft: '.5%' }}
              control={<Switch checked={showLM5Users} onChange={handleSwitchChange} />}
              label="My Submissions"
            />
          </div>
          <div style={{ width: '25%' }}>
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
                width: '85%',
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
            <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left', width: '10%' }}>Submission ID</th>
            <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}>Client Name</th>
            <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}>Submitted By</th>
            <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left', width: '25%' }}>Submitted Date</th>
            <th style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'center' }}>SOV</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((row) => (
            <tr key={row.SubmissionID}>
              <td style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.SubmissionID}</td>
              <td style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.ClientName}</td>
              <td style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}>{row.SubmittedBy}</td>
              <td style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'left' }}>
                {new Date(row.SubmittedDate).toLocaleString()}
              </td>
              <td style={{ borderBottom: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <img style={{ marginLeft: '10px' }} src={getClientStatusImage(row.SOV)} alt={`Status: ${row.SOV}`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <Button
          style={{ width: '12.5%', justifyContent: 'center' }}
          variant="contained"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        
        <Button
          style={{ width: '12.5%', justifyContent: 'center', marginLeft: '2%' }}
          variant="contained"
          disabled={currentItems.length < itemsPerPage || currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
        <div style={{marginLeft:'20%',marginRight:'-30%', display: 'flex', alignItems: 'flex-end'}}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              style={{
                width: '25px',
                height: '25px',
                margin: '0 5px',
                padding: '0',
                borderRadius: '0%',
                backgroundColor: currentPage === index + 1 ? '#1E90FF' : '#FFF',
                color: currentPage === index + 1 ? '#FFF' : '#000',
              }}
              variant="contained"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProject;
