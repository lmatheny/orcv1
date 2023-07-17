import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { SiMicrosoftoutlook } from 'react-icons/fa';
export const SidebarData = [
{
	title: "App Links",

	icon: <AiIcons.AiOutlineLink />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "AIR",
		path: "/links/air",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "RMS",
		path: "/links/RMS",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Outlook",
		path: "/links/Outlook",
		icon: <FaIcons.FaMailBulk/>,
	},{
		title: "DBMS",
		path: "/links/DBMS",
		icon: <FaIcons.FaServer/>,
	},{
		title: "Contract Simulator",
		path: "/links/Contracts",
		icon: <FaIcons.FaFileContract/>,
	},{
		title: "Alteryx",
		path: "/links/Alteryx",
		icon: <FaIcons.FaCodeBranch/>,
	},{
		title: "SQL Server",
		path: "/links/sql",
		icon: <FaIcons.FaDatabase/>,
	}
	],
},
{
	title: "Home",
	path: "/",
	icon: <AiIcons.AiFillHome  />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Integration Portal",
	path: "/portal",
	icon: <FaIcons.FaTelegram />,
},
{
	title: "New Project",
	path: "/new",
	icon: <FaIcons.FaPlus/>,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
{
	title: "Admin",
	path: "/admin",
	icon: <FaIcons.FaCog />,
},
];

