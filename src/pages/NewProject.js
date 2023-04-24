import React from "react";
import { useState, useEffect } from "react";

// function callApi() {
// 	fetch('https://catfact.ninja/fact', { method: 'GET' })
// 	.then(response => {
// 		console.log('response.status: ', response.status);
// 		console.log(response);
// 	  })
// 	  .catch(err => {
// 		console.log(err);
// 	  });
//   }



const NewProject = () => {


const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //https://official-joke-api.appspot.com/random_joke
  //https://webapp-usc-preprod-analytics-catmodeling-windows-verisk-api.ilbase-usintprod.appserviceenvironment.net/api/VeriskAPI/Status
 
  useEffect(() => {
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then(response => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);





return (


	<>
	<div className="newproject">

	{loading && <p>Loading...</p>}
        {!loading && <p>Fetched data</p>}
      </div>
	</>
);
};

export default NewProject;

