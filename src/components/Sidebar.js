import React, { useState, useRef, useEffect, useCallback } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import bmslogo from './icons/proflogo.png';
import { FaBell, FaUserAlt } from 'react-icons/fa'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { MarginRounded } from "@mui/icons-material";

const Nav = styled.div`
background: #4169e1;
height: 90px;
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 1rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width: 275px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
`;

const SidebarWrap = styled.div`
width: 100%;`;

const Sidebar = ({ username }) => {
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
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

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

	return (
		<>
			<Dialog
				open={open}>
				<DialogTitle>

				</DialogTitle>
				<DialogContent>
					<DialogContentText class="alertBody">
						COMING SOON!
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
				<div style={{display:'flex',justifyContent:'space-between'}}><Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon /> 
                </Avatar>
				<p style={{marginLeft:'3%', whiteSpace:'nowrap'}}>Account Information</p>
				</div>
				</DialogTitle>
				<DialogContent>
					<DialogContentText class="alertBody">
					<b>User: </b> {username} <br></br><br></br>
					
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose2} >
						CLOSE
					</Button>
				</DialogActions>
			</Dialog>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavIcon to="#">
						<FaIcons.FaBars onClick={showSidebar} />
					</NavIcon>
					<div style={{ width: '100%', marginTop: '1%' }}>
						<Box sx={{ flexGrow: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={8}>
									<img style={{ maxHeight: (windowHeight / 100) * 7, marginLeft: '3.5%', marginBottom:'2%' }} src={bmslogo}></img>
								</Grid>
								<Grid item xs={2}>
									<Box><div style={{ textAlign: 'right' }}><FaBell
										size={25} onClick={handleOpen}

									></FaBell></div></Box>
								</Grid>
								<Grid item xs={2}>
									<Box><div style={{ textAlign: 'right', marginRight: '40%' }}><FaUserAlt

										size={25} onClick={handleOpenTwo}
									></FaUserAlt></div></Box>
								</Grid>
							</Grid>
						</Box></div>
				</Nav>
				<SidebarNav sidebar={sidebar}>
					<SidebarWrap>
						<NavIcon to="#">
							<AiIcons.AiOutlineClose onClick={showSidebar} />
						</NavIcon>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}
					</SidebarWrap>
				</SidebarNav>
			</IconContext.Provider>
		</>
	);
};

export default Sidebar;

