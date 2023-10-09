import React, { useState, useRef, useEffect, useCallback } from "react";
import App from './App';
import bmslogo from
  './components/icons/proflogo.png';

const Login = () => {


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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [aSession, setaSession] = useState(false);

  const [key1, setKey1] = useState('' + process.env.LM_USER);
  // const storedVariable = sessionStorage.getItem('myVariable');
   // To retrieve data:
   


   useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(username));
  }, [username]);


  const [name, setName] = useState(() => {
		// getting stored value
		const saved = localStorage.getItem("name");
		const initialValue = JSON.parse(saved);
		return initialValue || "";
	  });


  const handleLogin = () => {
    if ((username == "LM5" && password == "test") || (username == process.env.REACT_APP_U2_USER && password == process.env.REACT_APP_U2_PASSWORD) || (username == process.env.REACT_APP_U3_USER && password == process.env.REACT_APP_U3_PASSWORD)) {
      // Successful login logic (e.g., set authentication state)
      // Save the variable to sessionStorage
      // To store data:
    

      setaSession(true);
      localStorage.setItem("name", JSON.stringify(aSession));
      setLoggedIn(true);
    } else {
      setLoginError('Invalid username or password.');
     
    }
  };


  return (
    <div>
      {!loggedIn ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <img style={{ maxHeight: (windowHeight / 100) * 12.5, marginBottom: '1.5%' }} src={bmslogo}></img>
          <h1 style={{ marginBottom: '20px', color: '#021368', fontFamily: 'Open Sans, sans-serif', fontSize: '27.5px', fontWeight: 'bold' }}>Conductor</h1>

          {loginError && <p style={{ color: 'red', marginBottom: '10px' }}>{loginError}</p>}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '10px' }}>Username</label>
            <input
              style={{ width: '300px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value + "")}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ fontWeight: 'bold', marginBottom: '10px' }}>Password</label>
            <input
              style={{ width: '300px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            style={{
              width: '150px',
              padding: '10px',
              marginTop: '20px',
              backgroundColor: '#021368',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <App username={username} />
      )}
    </div>
  );
};



export default Login;
